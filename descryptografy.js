const desencrypt_hex = (text) => {
  var j;
  var hexes = text.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }
  return back;
}
const desencrypt_bin = (text) => {
  return decodeURI(text.replace(/\s*[01]{8}\s*/g, function (bin) {
    return String.fromCharCode(parseInt(bin, 2))
  }))
}
const desencrypt_number = (text) => {
  const dat = [];
  text.split(' ').map((i) => {
    alf.filter((a, b) => {
      if ((Number(i) - 1) == b) {
        dat.push(a);
      }
    });
  });
  return dat.join('');
}