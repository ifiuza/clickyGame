import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Characters from "./component/Character";
import Navbar from "./component/Navbar";


class App extends Component {
  state = {
    characters

  };


render(){
  return (
    <div class="wrapper">
    <Navbar/>

     <div className="picture-list-container">
       {this.state.characters.map(character => (
         <Characters
         key={character.id}
         id={character.id}
        image={character.image}
        name={character.name}
        />
       )      
       )}
     </div>
     </div>
  );
  }
}

export default App
