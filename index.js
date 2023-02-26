const {encryptNumber, encryptBinary, encryptHex} = require('./model/encrypt.js');

const {desencryptNumber, desencryptBinary, desencryptHex} = require('./model/desencrypt.js');

module.exports = {
  encryptNumber,
  encryptBinary,
  encryptHex,
  desencryptNumber,
  desencryptBinary,
  desencryptHex
}