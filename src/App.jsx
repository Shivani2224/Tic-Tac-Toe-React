import { useState } from "react";
import Player from "./component/Player";
import Gameboard from "./component/Gameboard";
import Log from "./component/Log";
import { Winning_Combination } from "./component/winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveACtivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length % 2 !== 0) {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  // const [checkWinner, SetCheckWinner] = useState(false);
  let winner = null;
  const activePlayer = deriveACtivePlayer(gameTurn);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of Winning_Combination) {
    const firstSquare = Gameboard[combination[0].row][combination[0].col];
    const secondSquare = Gameboard[combination[1].row][combination[1].col];
    const thirdSquare = Gameboard[combination[2].row][combination[2].col];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      {/* <header id="header">
        <img src={logo} alt="game-logo" />
      </header> */}

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
        {winner && <p>you win{winner}</p>}
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
