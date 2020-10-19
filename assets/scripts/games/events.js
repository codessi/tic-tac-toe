'use strict'

const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'X'

const onBoxClick = (event) => {
  console.log('click')

  const box = $(event.target)

  box.text(currentPlayer)
  box.css('background', 'transparent').text(currentPlayer)

  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

$('.box').on('click', onBoxClick)


const winningFormula = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winFormula = winningFormula[i];
//         let a = currentGame[winFormula[0]];
//         let b = currentGame[winFormula[1]];
//         let c = currentGame[winFormula[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
//         if (a === b && b === c) {
//             roundWon = true;
//             break
//         }
//     }
//         if (roundWon) {
//             statusDisplay.innerHTML = winningMessage();
//             gameActive = false;
//             return;
//         }
//   let roundDraw = !currentGame.includes("");
//       if (roundDraw) {
//        statusDisplay.innerHTML = drawMessage();
//        gameActive = false;
//        return;
// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const onNewGame = (event) => {
  event.preventDefault()

  const button = event.click
  // console.log(button, 'working')
  // console.log(JSON.stringify(button))

  api.newGame(button)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// const onUpdateGame = (event) => {
//   event.preventDefault()
//
//   const button = event.click
//   // console.log(button, 'working')
//   console.log(JSON.stringify(button))
// console.log(event)
// api.updateGame(button)
//   .then(ui.newGameSuccess)
//   .catch(ui.newGameFailure)
// }

const onCountGame = (event) => {
  event.preventDefault()
  const button = event.click
  api.countGame(button)
    .then(ui.countGameSuccess)
    .catch(ui.countGameFailure)
}

module.exports = {
  onBoxClick: onBoxClick,
  onNewGame: onNewGame,
  // onUpdateGame: onUpdateGame,
  onCountGame: onCountGame

}
