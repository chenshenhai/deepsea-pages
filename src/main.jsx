import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' 
import site from './utils/site'



function init () {
  site.httpsRedirect();
  if (site.isSite() === true) {
    // let $title = _$('title')
    // $title.innerText = config.title
    const root = createRoot(document.getElementById('app'));
    root.render(<App/>)
  } else {
    document.write('error')
  }
}

init();