import config from '@/config'
import {isString} from './is-type'

const {location = {}} = window || {}
const {hostname} = location

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
    getOnlineHostname()
  ].indexOf(hostname) >= 0
}

export default {
  isSite () {
    return checkSite()
  }
}
