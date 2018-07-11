const {location} = window;
const XOR = new Date().getFullYear();
const HEX = 26;

export function redirect( url ) {
  location.href = url;
}


export function hello( str ) {
  let xor = XOR;
  let hex = HEX;
  if ( typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
    return;
  }

  let resultList = [];
  hex = hex <= 25 ? hex : hex % 25;

  for ( let i=0; i<str.length; i++ ) {
    let charCode = str.charCodeAt(i);
    charCode = (charCode * 1) ^ xor;
    charCode = charCode.toString(hex);
    resultList.push(charCode);
  }

  let splitStr = String.fromCharCode(hex + 97);
  let resultStr = resultList.join( splitStr );
  return resultStr;
}

export function decrypto( str ) {
  let xor = XOR;
  let hex = HEX;
  if ( typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
    return;
  }
  let strCharList = [];
  let resultList = [];
  hex = hex <= 25 ? hex : hex % 25;
  let splitStr = String.fromCharCode(hex + 97);
  strCharList = str.split(splitStr);

  for ( let i=0; i<strCharList.length; i++ ) {
    let charCode = parseInt(strCharList[i], hex);
    charCode = (charCode * 1) ^ xor;
    let strChar = String.fromCharCode(charCode);
    resultList.push(strChar);
  }
  let resultStr = resultList.join('');
  return resultStr;
}
