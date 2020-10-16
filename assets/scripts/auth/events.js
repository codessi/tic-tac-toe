'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  // console.log(JSON.stringify(data))

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  // console.log(JSON.stringify(data))

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  // console.log(JSON.stringify(data))

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)
  // console.log(JSON.stringify(data))

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
