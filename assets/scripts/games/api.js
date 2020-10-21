'use strict'

const config = require('../config')
const store = require('../store')

const newGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const countGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const updateGame = (boxIndex, currentPlayer) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: boxIndex,
          value: currentPlayer
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame: newGame,
  countGame: countGame,
  updateGame: updateGame

}
