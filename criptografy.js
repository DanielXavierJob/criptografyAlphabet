const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

const crypto_number = (text) => {
  const splits = Object.assign([], text);
  const crypto = [];
  for (let i = 0; i < splits.length; i++) {
    alphabet.filter((letter, index) => {
      if (splits[i] === letter) {
        crypto.push(index + 1);
      }
    })
  }
  return crypto.join(' ');
}

const crypto_binary = (text) => {
  text = encodeURIComponent(text);
  var chr, i = 0, l = text.length, out = '';
  for (; i < l; i++) {
    chr = text.charCodeAt(i).toString(2);
    while (chr.length % 8 != 0) { chr = '0' + chr; }
    out += chr;
  }
  return out;
}

const crypto_hex = (text) => {
  var hex, i;

  var result = "";
  for (i = 0; i < text.length; i++) {
    hex = text.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result
}