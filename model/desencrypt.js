const alphabet = require("../constants/alphabet.js");

/**
 * Desencrypt text hex to string alphabet
 * @param {*} text
 * @returns string
 */
const desencryptHex = (text) => {
  var j;
  var hexes = text.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }
  return back;
};

/**
 * Desencrypt text binary to string alphabet
 * @param {*} text
 * @returns
 */
const desencryptBinary = (text) => {
  return decodeURI(
    text.replace(/\s*[01]{8}\s*/g, function (bin) {
      return String.fromCharCode(parseInt(bin, 2));
    })
  );
};

/**
 * Desencrypt text number to string alphabet
 * @param {*} text
 * @returns
 */
const desencryptNumber = (text) => {
  const dat = [];
  text.split(" ").map((i) => {
    if (i === "0") {
      dat.push(" ");
    } else {
      alphabet.filter((a, b) => {
        if (Number(i) - 1 === b) {
          dat.push(a);
        }
      });
    }
  });
  return dat.join("");
};

module.exports = { desencryptNumber, desencryptBinary, desencryptHex };
