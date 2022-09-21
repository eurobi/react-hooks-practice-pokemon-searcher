import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    hp : '',
    sprites : {
      front: '',
      back: '',
    }
  })

  function handleChange(e){
    if(e.target.name === 'name'){
      setFormData({...formData, name : e.target.value})
    }
    else if(e.target.name === 'hp'){
      setFormData({...formData, hp : e.target.value})
    }
    else if(e.target.name === 'frontUrl'){
      const newSprite = {...formData.sprites, front : e.target.value}
      const newData = {...formData}
      newData.sprites = newSprite
      setFormData(newData)
    }
    else if(e.target.name === 'backUrl'){
      const newSprite = {...formData.sprites, back : e.target.value}
      const newData = {...formData}
      newData.sprites = newSprite
      setFormData(newData)
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          handleSubmit(formData);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" value={formData.name} />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" value={formData.hp}/>
          <Form.Input onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
          />
          <Form.Input onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
