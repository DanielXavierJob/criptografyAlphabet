const {
  desencryptNumber,
  desencryptBinary,
  desencryptHex,
} = require("./desencrypt");

describe("desencrypt number to text", () => {
  const text = "Hello world";
  const encrypted = "8 31 38 38 41 0 49 41 44 38 30";

  it("should be desencrypt number to text", () => {
    expect(desencryptNumber(encrypted)).toBe(text);
  });
});

describe("desencrypt binary to text", () => {
  const text = "Hello world";
  const encrypted =
    "01001000011001010110110001101100011011110010010100110010001100000111011101101111011100100110110001100100";

  it("should be desencrypt binary to text ", () => {
    expect(desencryptBinary(encrypted)).toBe(text);
  });
});
describe("desencrypt hex to text", () => {
  const text = "Hello world";
  const encrypted = "00480065006c006c006f00200077006f0072006c0064";
  it("should be desencrypt hex to text", () => {
    expect(desencryptHex(encrypted)).toBe(text);
  });
});
