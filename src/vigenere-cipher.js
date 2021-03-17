const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(version) {
    this.version = true;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    if (version == false) {
      this.version = false;
    }
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    let index2 = 0;
    let text = message.toUpperCase();
    let fullKey = key.toUpperCase();
    let encrypted = '';

    while (fullKey.length < text.length) {
      fullKey += key.toUpperCase();
    }

    for (let index = 0; index < text.length; index++) {
      if (this.alphabet.includes(text[index])) {
        encrypted += this.alphabet[((this.alphabet.indexOf(text[index]) +
          this.alphabet.indexOf(fullKey[index2])) % 26)];
        index2++;
      } else {
        encrypted += text[index];
      }

    }
    if (this.version == true) {
      return encrypted;
    } else {
      return encrypted.split('').reverse().join('');
    }

  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    let index2 = 0;
    let text = message.toUpperCase();
    let fullKey = key.toUpperCase();
    let encrypted = '';

    while (fullKey.length < text.length) {
      fullKey += key.toUpperCase();
    }

    for (let index = 0; index < text.length; index++) {
      if (this.alphabet.includes(text[index])) {
        encrypted += this.alphabet[((this.alphabet.indexOf(text[index]) -
          this.alphabet.indexOf(fullKey[index2]) + 26) % 26)];
        index2++;
      } else {
        encrypted += text[index];
      }

    }
    if (this.version == true) {
      return encrypted;
    } else {
      return encrypted.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;