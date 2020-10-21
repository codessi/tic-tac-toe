'use strict'

const store = require('../store')


let playerTurn = 'X'

const newGameSuccess = (response) => {
  store.game = response.game
  // console.log(response)
  $('#message').text('New Game! Players turn: ' + playerTurn)
  $('#sign-up-user-form').hide()
  $('#sign-in-user-form').hide()
  $('#start-new-game-button').hide()
  $('#change-password-user-form').hide()
  $('#game').show()
  $('#sign-out-user-form').show()
  $('#new-game-button').show()
  $('#index-game-button').show()
  $('.box').text('')
  $('.box:nth-child(2n)').css('background-color', 'orange')
  $('.box:nth-child(2n+1)').css('background-color', 'black')
}
const newGameFailure = () => {
  $('#message').text('Something went wrong, try again')
}

const countGameSuccess = (response) => {
  store.game = response.game
  // console.log(response)

  const gamesPlayed = store.game.length
  $('#message').text('Games Played ' + gamesPlayed)
  // placeholder - need to run a function inside event
}
const countGameFailure = () => {
  $('#message').text('Something went wrong, try again')
}

const onBoxClickSuccess = (response) => {
  store.game = response.game
  playerTurn = playerTurn === 'O' ? 'X' : 'O'
  $('#message').text('Players Turn: ' + playerTurn)
  console.log(store.game)
}

const onBoxClickFailure = () => {
  $('#message').text('Something went wrong, try again')
}

const winGameSuccess = (response) => {
  store.game = response.game
  playerTurn = playerTurn === 'O' ? 'X' : 'O'
  $('#message').text('Player ' + playerTurn + ' Wins')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  countGameSuccess: countGameSuccess,
  countGameFailure: countGameFailure,
  onBoxClickSuccess: onBoxClickSuccess,
  onBoxClickFailure: onBoxClickFailure,
  winGameSuccess: winGameSuccess
}
