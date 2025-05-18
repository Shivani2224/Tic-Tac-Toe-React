import logo from "../public/game-logo.png";
import { useState } from "react";
import Player from "./component/Player";
import Gameboard from "./component/Gameboard";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <header id="header">
        <img src={logo} alt="game-logo" />
      </header>

      <div id="game-container" className="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbole={activePlayer}
        />
      </div>
      <section id="log-container" className="log-container"></section>
    </main>
  );
}

export default App;
