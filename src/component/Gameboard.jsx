import { useState } from "react";

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns = [] }) {
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  console.log({ gameBoard });
  // const [gameboard, setGameboard] = useState(initialGame);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameboard((prev) => {
  //     const updatedBorad = [...prev.map((innerArray) => [...innerArray])];
  //     updatedBorad[rowIndex][colIndex] = activePlayerSymbole;
  //     return updatedBorad;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playersymbol !== null}
                >
                  {playersymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
