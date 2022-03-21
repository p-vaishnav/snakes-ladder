import React from "react";
import { Players } from "../../utils/players";
import './Square.css';

const Square = function({key, top, left, width, height, isMarked, playerNo, position , pos ,setPosition }) {
    // console.log({top, left, width, playerNo, isMarked});
    // if (isPlayerOne) { 
    // }
    // if()
    return (
        <div className="square" style={{"top": top + 'px',
            left: left + 'px',
            width: width + 'px',
            height: height + 'px',
            color: '#000',
            backgroundColor: isMarked ? Players[playerNo] : position%2 ==0 && position ? '#0afc4b': '#106b29'}}>
            {position}
        </div>
    );
}

export default Square;