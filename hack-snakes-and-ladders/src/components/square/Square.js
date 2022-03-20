import React from "react";
import { Players } from "../../utils/players";
import './Square.css';

const Square = function({top, left, width, height, isMarked, playerNo}) {
    console.log({top, left, width, playerNo, isMarked});
    // if (isPlayerOne) { 
    // }
    return (
        <div className="square" style={{"top": top + 'px',
            left: left + 'px',
            width: width + 'px',
            height: height + 'px',
            backgroundColor: isMarked ? Players[playerNo] : ''}}>
            {top/width}{left/width}
        </div>
    );
}

export default Square;