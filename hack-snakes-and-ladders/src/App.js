import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
  const [numPlayers, setNumPlayers] = useState(null);

  return (
    <div className="App">
    <header>
        <h1>Welcome to Snake and Ladders</h1>
    </header>
    {
      !numPlayers && (
        <div>
        <p>How many players?</p>
        <button onClick={() => setNumPlayers(2)}>2</button>
        <button onClick={() => setNumPlayers(3)}>3</button>
        <button onClick={() => setNumPlayers(4)}>4</button>
        </div>
      
      )

    }
      {numPlayers && <Board rows={10} cols={10} boardSize={50} maxPlayers={numPlayers}/>}
    </div>
  );
}



export default App;
