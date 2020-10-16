'use strict'
const events = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password-user-form').hide(),
  $('#sign-up-user-form').on('submit', events.onSignUp),
  $('#sign-in-user-form').on('submit', events.onSignIn),
  $('#change-password-user-form').on('submit', events.onChangePassword),
  $('#sign-out-user-form').on('submit', events.onSignOut)
}
)
