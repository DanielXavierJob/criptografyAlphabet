# Criptography alphabet

With this package you'll be able to encrypt all the letters of the alphabet for three types of encryption.


# How to install

Run ``npm i @danielxavierjob/cripto-alphabet``

## Encryptions

- three types of current encryption:
 - hex
 - binary
 - number

- function to encrypt and decrypt are prefix of real functions

 - encryptHex
 - encryptNumber
 - encryptBinary
 - decryptHex
 - decryptNumber
 - decryptBinary


To encrypt just call the function (prefix encrypt)(Cryptography)

Ex: ``encryptNumber("Hello world")``,

Result:
``"8 31 38 38 41 0 49 41 44 38 30"``


To decrypt just call (prefix decrypt)(Encryption)

Ex: ``desencryptNumber("8 31 38 38 41 0 49 41 44 38 30")``

Result: ``"Hello world"``
