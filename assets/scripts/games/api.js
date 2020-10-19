'use strict'

const config = require('./../config')
const store = require('./../store')

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
    url: config.apiUrl + '/games ',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const updateGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games/:id ' + store.game_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
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
