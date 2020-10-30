'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

store.currentPlayer = 'X'
store.board = ['', '', '', '', '', '', '', '', '']
let gameState = {
  moves: 0,
  over: false,
  winningPlayer: ''
}

const changePlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const onNewGame = (event) => {
  event.preventDefault()
  gameState = {
    moves: 0,
    over: false,
    winningPlayer: ''
  }
  store.currentPlayer = 'X'

  const button = event.click
  // console.log(button, 'working')
  // console.log(JSON.stringify(button))

  api.newGame(button)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const checkWinner = (array) => {
  if (array[0] !== '' && array[0] === array[1] && array[1] === array[2]) {
    gameState.winningPlayer = array[0]
    gameState.over = true
    return gameState
  } else if (array[0] !== '' && array[0] === array[3] && array[3] === array[6]) {
    gameState.winningPlayer = array[0]
    gameState.over = true
    return gameState
  } else if (array[0] !== '' && array[0] === array[4] && array[4] === array[8]) {
    gameState.winningPlayer = array[0]
    gameState.over = true
    return gameState
  } else if (array[1] !== '' && array[1] === array[4] && array[4] === array[7]) {
    gameState.winningPlayer = array[1]
    gameState.over = true
    return gameState
  } else if (array[2] !== '' && array[2] === array[5] && array[5] === array[8]) {
    gameState.winningPlayer = array[2]
    gameState.over = true
    return gameState
  } else if (array[2] !== '' && array[2] === array[4] && array[4] === array[6]) {
    gameState.winningPlayer = array[2]
    gameState.over = true
    return gameState
  } else if (array[3] !== '' && array[3] === array[4] && array[4] === array[5]) {
    gameState.winningPlayer = array[3]
    gameState.over = true
    return gameState
  } else if (array[6] !== '' && array[6] === array[7] && array[7] === array[8]) {
    gameState.winningPlayer = array[6]
    gameState.over = true
    return gameState
  } else {
    // Need to change gameState.winningPlayer to value of tie to differentiate true in lines 75-79
    if (array[0] !== '' && gameState.moves === 9) {
      gameState.winningPlayer = 'Tie'
      gameState.over = true
      return gameState
    } else return gameState
  }
}

const onBoxClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  const boxIndex = $(event.target).data('box-index')

  if (gameState.winningPlayer === 'Tie') {
    $('#message').text('Game ended in a draw! Play Again!!')
  } else if (gameState.over === true) {
    // $('#game').css('pointer-events', 'none')
    $('#message').text(`${gameState.winningPlayer} is the Winner!`)
  } else if ($(event.target).text() !== '') {
    ui.takenSpot()
  } else {
    store.game.cells[boxIndex] = store.currentPlayer
    box.css('background', 'transparent')

    // box.css('pointer-events', 'none')
    console.log('box index ', boxIndex)
    console.log('players turn ', store.currentPlayer)
    console.log(store.game.cells)
    console.log(gameState.over)

    api.updateGame(boxIndex, store.currentPlayer, gameState.over)
      .then(function (data) {
        $(event.target).text(store.currentPlayer)
        checkWinner()
        changePlayer()
        gameState.moves++
        ui.onBoxClickSuccess(data)
      })
      .catch(ui.onBoxClickFailure)
  }
}
// passthrough values for when a new game is started to clear/reset the board

const onCountGame = (event) => {
  event.preventDefault()
  const button = event.click
  api.countGame(button)
    .then(ui.countGameSuccess)
    .catch(ui.countGameFailure)
}

module.exports = {
  gameState: gameState,
  changePlayer: changePlayer,
  onNewGame: onNewGame,
  onBoxClick: onBoxClick,
  onCountGame: onCountGame,
  checkWinner: checkWinner

}
