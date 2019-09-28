import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Characters from "./component/characters.js";


class App extends Component {
  state = {
    characters
  };


render(){
  return (
     <div>
       {this.state.characters.map((character, index) => (
         <Characters
         key={index}
         id={character.id}
        image={character.name}
        name={character.image}
        />
       )
        
  )}
     </div>
  );
  }

}

export default App
