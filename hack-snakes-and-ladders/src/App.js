import logo from './logo.svg';
import './App.css';
import Board from './components/board/Board';

function App() {
  return (
    <Board rows={10} cols={10} boardSize={50} maxPlayers={2}/>    
  );
}

export default App;
