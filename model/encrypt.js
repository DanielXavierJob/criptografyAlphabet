const alphabet = require('../constants/alphabet.js');

/**
 * encrypt Text to number current of alphabet
 * @param {*} text 
 * @returns string
 */
const encryptNumber = (text) => {
  const crypto = [];
  text.split(" ").map((item, index) => {
    index !== 0 && crypto.push(0)
    const splits = Object.assign([], item);
    for (let i = 0; i < splits.length; i++) {
      alphabet.filter((letter, index) => {
        if (splits[i] === letter) {
          crypto.push(index + 1);
        }
      })
    }
  })
  
  return crypto.join(' ');
}

/**
 * Encrypt string text to binary
 * @param {*} text 
 * @returns string
 */
const encryptBinary = (text) => {
  text = encodeURIComponent(text);
  var chr, i = 0, l = text.length, out = '';
  for (; i < l; i++) {
    chr = text.charCodeAt(i).toString(2);
    while (chr.length % 8 != 0) { chr = '0' + chr; }
    out += chr;
  }
  return out;
}


/**
 * Encrypt text to hex
 * @param {*} text 
 * @returns string
 */
const encryptHex = (text) => {
  var hex, i;

  var result = "";
  for (i = 0; i < text.length; i++) {
    hex = text.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result
}

module.exports = {
  encryptNumber,
  encryptBinary,
  encryptHex
}