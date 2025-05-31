export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];
// export function isWinningCombination(turns, player) {
//   return WINNING_COMBINATIONS.some((combination) =>
//     combination.every((square) =>
//       turns.some(
//         (turn) =>
//           turn.square.row === square.row &&
//           turn.square.col === square.column &&
//           turn.player === player
//       )
//     )
//   );
// }
// export function isGameOver(turns) {
//   return (
//     isWinningCombination(turns, "X") ||
//     isWinningCombination(turns, "O") ||
//     turns.length === 9
//   );
// }
// export function getWinner(turns) {
//   if (isWinningCombination(turns, "X")) {
//     return "X";
//   }
//   if (isWinningCombination(turns, "O")) {
//     return "O";
//   }
//   return null;
// }
