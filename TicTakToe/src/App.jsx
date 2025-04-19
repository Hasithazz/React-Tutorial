import { useState } from 'react';
import GameBoard from './components/gameBoard/GameBoard';
import Player from './components/player/Player';
import Log from './components/log/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/gameOver/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].playerName === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSqareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (firstSqareSymbol && secondSquareSymbol && thirdSquareSymbol) {
      if (
        firstSqareSymbol === secondSquareSymbol &&
        secondSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSqareSymbol];
      }
    }
  }
  return winner;
}

function dreiveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    // console.log(turn);
    //Object destructuring
    const { square, playerName } = turn;
    const { row, col } = square;
    gameBoard[row][col] = playerName;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });

  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = dreiveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = !winner && gameTurns.length === 9;

  function handlePlayerChange(rowIndex, colIndex) {
    if (!winner)
      setGameTurns((prevTurns) => {
        let currentPlayer = derivedActivePlayer(prevTurns);
        const updatedTurns = [
          {
            square: { row: rowIndex, col: colIndex },
            playerName: currentPlayer,
          },
          ...prevTurns,
        ];
        return updatedTurns;
      });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameSave(name, symbol) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: name };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === 'X'}
            onSave={handlePlayerNameSave}
          ></Player>
          <Player
            playerName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === 'O'}
            onSave={handlePlayerNameSave}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematchSelect={handleRematch} />
        )}
        <GameBoard onSelectSquare={handlePlayerChange} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
