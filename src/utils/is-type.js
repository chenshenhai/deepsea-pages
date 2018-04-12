function getTypeName (data) {
  const typeStr = Object.prototype.toString.call(data)
  const regMatch = /\[object\s(\w+)\]/
  const typeName = typeStr.match(regMatch)[1]
  return typeName
}

export function isArray (data) {
  return getTypeName(data) === 'Array'
}

export function isJSON (data) {
  return getTypeName(data) === 'Object'
}

export function isFunction (data) {
  return getTypeName(data) === 'Function'
}

export function isString (data) {
  return getTypeName(data) === 'String'
}

export function isNumber (data) {
  return getTypeName(data) === 'Number'
}

export function isUndefined (data) {
  return getTypeName(data) === 'Undefined'
}

export function isNull (data) {
  return getTypeName(data) === 'Null'
}
