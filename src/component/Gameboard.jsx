import { useState } from "react";

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, activePlayerSymbole }) {
  const [gameboard, setGameboard] = useState(initialGame);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameboard((prev) => {
      const updatedBorad = [...prev.map((innerArray) => [...innerArray])];
      updatedBorad[rowIndex][colIndex] = activePlayerSymbole;
      return updatedBorad;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
