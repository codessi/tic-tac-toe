'use strict'

const store = require('./../store')

const newGameSuccess = (response) => {
  store.games = response.games
  console.log(response)
  $('#message').text('New Game')
  $('#sign-up-user-form').hide()
  $('#sign-in-user-form').hide()
  $('#start-new-game-button').hide()
  $('#change-password-user-form').hide()
  $('.container').show()
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
  store.games = response.games
  // console.log(response)
  const gamesPlayed = store.games.length
  $('#message').text('Games Played ' + gamesPlayed)
  // placeholder - need to run a function inside event
}
const countGameFailure = () => {
  $('#message').text('Something went wrong, try again')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  countGameSuccess: countGameSuccess,
  countGameFailure: countGameFailure
}
