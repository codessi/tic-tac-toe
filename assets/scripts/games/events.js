'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

let currentPlayer = 'X'
// add gameState = false, run it through line 20 as argument and through API PATCH/UPDATE

const onBoxClick = (event) => {
  const box = $(event.target)

  const boxIndex = box.data('box-index')
  console.log('box index ', boxIndex)
  console.log('players turn ', currentPlayer)

  box.text(currentPlayer)
  box.css('background', 'transparent').text(currentPlayer)
// I need to store my current player in API and not just have it go back and forth
  api.updateGame(boxIndex, currentPlayer)
    .then(ui.onBoxClickSuccess)
    .catch(ui.onBoxClickFailure)

  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}
// TO DO
// const checkWin = () => {
//   // Add Parameter with currentPlayer
//  or add box id's in html and replace store.game.cells with box id[]
//   if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
//
//     ui.winGameSuccess()
//   } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
//     ui.winGameSuccess()
//   } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
//     ui.winGameSuccess()
//   }
// }

const onNewGame = (event) => {
  event.preventDefault()

  const button = event.click
  // console.log(button, 'working')
  // console.log(JSON.stringify(button))

  api.newGame(button)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

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
  onCountGame: onCountGame
  // TO DO
  // checkWin: checkWin

}
