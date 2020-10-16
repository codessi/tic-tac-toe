'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('You are all signed up ' + response.user.email)
  $('#sign-up-user-form').hide()
  $('#change-password-user-form').show()
  $('#sign-out-user-form').show()
}

const signUpFailure = function (error) {
  $('#message').text('Something went wrong, try again')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Playtime ' + response.user.email)
  $('#sign-in-user-form').trigger('reset')
  $('#change-password-user-form').hide()
  $('#sign-up-user-form').hide()
  $('#sign-in-user-form').hide()
}
const signInFailure = function (error) {
  $('#message').text('Something went wrong, try again')
}
const changePasswordSuccess = function (response) {
  $('#message').text('Success! Password was changed')
  $('#sign-in-user-form').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#message').text( 'Something went wrong, try again')
}
const signOutSuccess = function (response) {
  $('#message').text('Success! Come back soon!' + response.user.email)
  store.user = null
}
const signOutFailure = function (error) {
  $('#message').text(error, 'Something went wrong, try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
