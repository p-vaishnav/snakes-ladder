/*
Start with board, and squares should be loaded inside of it 10*10 -> done no are also good
2 players should be there -> for marking position of player1 and player2 mark colors
make roll device functionality -> at a time 2 players should be visible on grid
grid -> should start from bottom done 
then canvas should be done with red and green lines -> waiting start working on it
*/

import React, { useState } from "react";
import { ladders } from "../../utils/ladders";
import Canvas from "../canvas/Canvas";
import Square from "../square/Square";
import "./Board.css";
const Board = function ({ rows, cols, boardSize, maxPlayers }) {
  // const [isBlack, setIsBlack] = useState(false);
  const [playerNo, setPlayerNo] = useState(0);
  const [playerPositions, setPlayerPositions] = useState({
    0: 1,
    1: 1,
    2: 1,
    3: 1,
  });
  const [hasWon, setHasWon] = useState(NaN);
  const [_roll, setRoll] = useState(0);
  let isBlack = false;
  const board = [];
  let position = rows * cols;
  for (let x = 0; x < rows; x++) {
    let row = [];
    for (let y = 0; y < cols; y++) {
      row.push({
        x,
        y,
        isBlack,
        position,
      });
      isBlack = !isBlack;
      position--;
    }
    board.push(row);
  }

  const rollDevice = () => {
    if (!isNaN(hasWon)) {
      return;
    }
    let roll = Math.ceil(Math.random() * 6);
    console.log(roll);
    setRoll(roll);
    setPlayerPositions((playerPositions) => {
      // FIXME: with this hack call is not coming twice
      playerPositions = JSON.parse(JSON.stringify(playerPositions));
      playerPositions[playerNo] = playerPositions[playerNo] + roll;
      return playerPositions;
    });
    ladders.forEach((ladder) => {
      if (ladder.start === playerPositions[playerNo]) {
        setPlayerPositions((playerPositions) => {
          // FIXME: with this hack call is not coming twice
          playerPositions = JSON.parse(JSON.stringify(playerPositions));
          playerPositions[playerNo] = ladder.end;
          return playerPositions;
        });
      }
    });
    if (playerPositions[playerNo] >= 100) {
      setHasWon(playerNo);
    }
    setPlayerNo((playerNo) => {
      if (playerNo + 1 === maxPlayers) {
        return 0;
      }
      return playerNo + 1;
    });
  };
  const _switch = (playerNo) => {
    switch (playerNo) {
      case 0:
        return <div id="_switch">Turn for Player 1</div>;
      case 1:
        return <div id="_switch">Turn for Player 2</div>;
      case 2:
        return <div id="_switch">Turn for Player 3</div>;
      case 3:
        return <div id="_switch">Turn for Player 4</div>;
    }
  };
  const won = (playerNo) => {
    switch (playerNo) {
      case 0:
        return <div id="_w">Player 1 Won </div>;
      case 1:
        return <div id="_w">Player 2 Won</div>;
      case 2:
        return <div id="_w">Player 3 Won</div>;
      case 3:
        return <div id="_w">Player 4 Won</div>;
      default:
        return <div id="_w">Game is On</div>;
    }
  };
  return (
    <>
      <div
        className="board"
        style={{
          height: boardSize * rows + "px",
          width: boardSize * cols + "px",
        }}
      >
        {board.map((row) =>
          row.map((square) => {
            let isMarked = false;
            let playerNo = 0;
            let index = 0;
            for (let playerPosition in playerPositions) {
              if (playerPositions[playerPosition] === square.position) {
                isMarked = true;
                playerNo = playerPosition;
              }
              index++;
            }
            return (
              <Square
                key={square.position}
                top={square.x * boardSize}
                left={square.y * boardSize}
                width={boardSize}
                height={boardSize}
                isMarked={isMarked}
                playerNo={playerNo}
                position={square.position}
              />
            );
          })
        )}
      </div>
      {/* <Canvas board={board} boardSizeConst={boardSize}></Canvas> */}
      {/* Sam */}
      <button className="btn" onClick={rollDevice}>
        Roll Dice!
      </button>
      {<h1>{_roll}</h1>}
      {/* Sam  */}
      {_switch(playerNo)}
      {/* Sam */}
      {won(hasWon)}
    </>
  );
};

export default Board;
