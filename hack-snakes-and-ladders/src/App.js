import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
  const [numPlayers, setNumPlayers] = useState(null);
  const [playerNo, setPlayerNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="App">
      <header>
        <h1 className="wel">Welcome to Snake and Ladders</h1>
        {numPlayers && <h2>Player Turn {playerNo + 1}</h2>}
      </header>
      {!numPlayers && (
        <div>
          <p>How many players?</p>

          <button
            className="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0"
            onClick={() => {setNumPlayers(2) ; setIsLoading(true)}}
          >
            2
          </button>
          <button
            className="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0"
            onClick={() => {setNumPlayers(3); setIsLoading(true)}}
          >
            3
          </button>
          <button
            className="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0"
            onClick={() => { setNumPlayers(4); setIsLoading(true) }}
          >
            4
          </button>
        </div>
      )}
      {isLoading && (
        <h1 class="ml4">
          <span class="letters letters-1">Ready</span>
          <span class="letters letters-2">Set</span>
          <span class="letters letters-3">Go!</span>
        </h1>
      )}
      {numPlayers && (
        <Board
          rows={10}
          cols={10}
          boardSize={50}
          maxPlayers={numPlayers}
          playerNo={playerNo}
          setPlayerNo={setPlayerNo}
          setNumPlayers={setNumPlayers}
        />
      )}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    </div>
    
  );
}
export default App;
