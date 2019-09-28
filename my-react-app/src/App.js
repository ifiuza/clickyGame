import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Characters from "./component/Character";
import Navbar from "./component/Navbar";


class App extends Component {
  state = {
    characters,
    counter : 0

  };

   counter=() => {
    this.setState({ counter: this.state.counter + 1 });
   }

render(){
  return (
    <div class="wrapper">
    <Navbar
    counter={this.state.counter}
    
    />

     <div className="picture-list-container">
       {this.state.characters.map(character => (
         <Characters
         key={character.id}
         id={character.id}
        image={character.image}
        name={character.name}
        counter={this.counter}
        />

        
       )      
       )}
     </div>
     </div>
  );
  }
}

export default App
