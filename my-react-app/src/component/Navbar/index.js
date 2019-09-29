import React from 'react';
import "./style.css"

function Navbar(props) {
    return (
        <nav class="navbar">
            <ul>
                <li>Clicky Game</li>
                <li class>Click an Image To Make Points</li>
                <li>Score:{props.counter} | High Score:{props.high}</li>
            </ul>
            <h2>Memory Game By Isaac Fiuza</h2>
        </nav>
    );
}

export default Navbar;
