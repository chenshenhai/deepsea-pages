import config from '@/config'
import {isString} from './is-type'

const {location = {}} = window || {}
const {hostname, protocol, href} = location

function getBloggerFullName () {
  let fullName
  if (config && config.blogger) {
    const {surname, name} = config.blogger
    if (isString(surname) === true && isString(name) === true) {
      fullName = surname + name
    }
  }
  return fullName
}

function getOnlineHostname () {
  return `${getBloggerFullName()}.github.io`
}

function checkSite () {
  return [
    'localhost',
    getOnlineHostname(),
    'chenshenhai.com',
  ].indexOf(hostname) >= 0
}

function isHTTPS() {
  return !!protocol.startsWith('https')
}

export default {
  isSite () {
    return checkSite()
  },


  httpsRedirect() {
    if( isHTTPS() !== true && getOnlineHostname() === hostname ) {
      let httpsHref = href.replace(/^http:\/\//, 'https://');
      location.href = httpsHref;
    }
  }
}
