import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import config from './config'
import site from './utils/site'

init()

function _$ (id) {
  return document.querySelector(id)
}
function _$$ (id) {
  return document.querySelectorAll(id)
}

function init () {
  if (site.isSite() === true) {
    let $title = _$('title')
    $title.innerText = config.title
    ReactDOM.render(<App/>, document.getElementById('app'))
  } else {
    document.write('error')
  }
}
