import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const PLAYERS = {
  X: "Player1",
  O: "Player2",
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function checkWinner(gameBoard, players) {
  let winner = null;
  // Check each winning combination
  // If a winning combination is found, set the winner
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard;
}
function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);
  // Setting Game Board
  // The game board is initialized with null values
  // and updated based on the game turns
  let gameBoard = deriveGameBoard(gameTurns);
  // Checking for winner
  const winner = checkWinner(gameBoard, players);

  // If no winner is found, check for a draw
  // A draw occurs when all squares are filled and no winner is found
  const hasDraw = gameTurns.length === 9 && !winner;
  // Function to switch player
  // This function is called when a player selects a square
  function switchPlayer(rowIndex, cellIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = derivedActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: cellIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }
  // Function to handle game restart
  // This function resets the game board and game turns
  // It is called when the "Rematch!" button is clicked
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={switchPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
