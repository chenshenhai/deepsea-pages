import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import config from './config'

ReactDOM.render(<App/>, document.getElementById('app'));
init();

function _$(id) {
  return document.querySelector(id);
}
function _$$(id) {
  return document.querySelectorAll(id);
}

function init() {
  let $title = _$('title');
  $title.innerText = config.title
}


