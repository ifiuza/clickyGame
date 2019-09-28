import React from 'react';
import "./style.css"

function Characters (props) {
    return (
    <div className="character-image-container">
        <img className="characterImage" alt={props.name} src={props.image} />
    </div>
    );
  }

export default Characters;

  