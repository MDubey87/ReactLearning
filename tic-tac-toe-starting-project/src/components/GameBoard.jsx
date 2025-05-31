const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, board }) {
  //   let gameBoard = initialGameBoard;
  //   for (const turn of turns) {
  //     const { square, player } = turn;
  //     gameBoard[square.row][square.col] = player;
  //   }
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleCellClick(rowIndex, cellIndex) {
  //     setGameBoard((prevBoard) => {
  //       const newBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //       newBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //       return newBoard;
  //     });
  //     onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, cellIndex)}
                  disabled={!!playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
