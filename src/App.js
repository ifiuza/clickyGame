import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Characters from "./component/Character";
import Navbar from "./component/Navbar";


class App extends Component {
  state = {
    characters,
    counter : 0,
    high: 0
  };


  gameOver = () => {
    if (this.state.counter > this.state.high) {
      this.setState({high: this.state.counter}, function() {
      });
    }
    this.state.characters.forEach(character => {
      character.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.counter}`);
    this.setState({counter: 0});
    return true;
  }

  counter = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        if(characters[i].count === 0 ||typeof(characters[i].count)==="undefined" ){
          characters[i].count = characters[i].count + 1;
          this.setState({counter : this.state.counter + 1}, function(){
          });
          this.state.characters.sort(() => Math.random() - 1)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

render(){
  return (
    <div class="wrapper">
    <Navbar
    counter={this.state.counter}
    high={this.state.high}
    />

     <div className="picture-list-container">
       {this.state.characters.map(character => (
         <Characters
         key={character.id}
         id={character.id}
        image={character.image}
        name={character.name}
        counter={this.counter}
        high={this.high}
        />

        
       )      
       )}
     </div>
     </div>
  );
  }
}

export default App
