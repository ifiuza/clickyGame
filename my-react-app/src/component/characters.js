import React from 'react';

function Characters (props) {
    return (
    <div>
        <img alt={props.name} src={props.image} />
    </div>
    );
  }

export default Characters;

  