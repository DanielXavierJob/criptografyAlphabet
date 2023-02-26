const { encryptNumber, encryptBinary, encryptHex } = require("./encrypt");

describe("encrypt text to number ", () => {
  const text = "Hello world";
  const encrypted = "8 31 38 38 41 0 49 41 44 38 30";
  it("should be encrypt text to number", () => {
    expect(encryptNumber(text)).toBe(encrypted);
  });
});

describe("encrypt text to binary", () => {
  const text = "Hello world";
  const encrypted =
    "01001000011001010110110001101100011011110010010100110010001100000111011101101111011100100110110001100100";
  it("should be encrypt text to binary", () => {
    expect(encryptBinary(text)).toBe(encrypted);
  });
});
describe("encrypt text to hex", () => {
  const text = "Hello world";
  const encrypted = "00480065006c006c006f00200077006f0072006c0064";
  it("should be encrypt text to hex", () => {
    expect(encryptHex(text)).toBe(encrypted);
  });
});
