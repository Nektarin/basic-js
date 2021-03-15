const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(3600 / turnsSpeed * turns);
  return {
    'turns': turns,
    'seconds': seconds
  };
};