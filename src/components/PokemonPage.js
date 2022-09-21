import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemon => setPokemonList(pokemon))
  },[])

function handleSubmit(formData){
  fetch('http://localhost:3001/pokemon',{
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(formData)
  })
  setPokemonList([...pokemonList, formData])
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemonList={pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(search))} />
    </Container>
  );
}

export default PokemonPage;
