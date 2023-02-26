const {encryptNumber, encryptBinary, encryptHex, desencryptNumber, desencryptBinary, desencryptHex} = require('./index')
describe("index contains a instance of encrypts and desencrypts", () => {
 
  it("should be index has instances of encrypt", () => {
    expect(typeof encryptNumber).toBe("function")
    expect(typeof encryptBinary).toBe("function")
    expect(typeof encryptHex).toBe("function")
  });

  it("should be index has instances of desencrypt", () => {
    expect(typeof desencryptNumber).toBe("function")
    expect(typeof desencryptBinary).toBe("function")
    expect(typeof desencryptHex).toBe("function")
  });

});
