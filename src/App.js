import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './Game';
import Home from './Home';

function App() {
  
 const [gameId, setGameId] = useState(null);

  return (    
    <div className="App">
      {
        gameId?
          <Game game_id={gameId}/>:
          <Home setGameId={setGameId}/>
      }
    </div>
  );
}

export default App;
