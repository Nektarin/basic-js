const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str;
  if (string === null) {
    string = "null";
  }
  let separator = "+";
  let someAddition = "";
  let additionCopy = options.addition;
  let additionSeparator = "|";

  if (options.separator != undefined) {
    separator = options.separator;
  }

  if (additionCopy !== undefined) {
    if (additionCopy === null) {
      additionCopy = "null";
    }

    if (options.additionSeparator != undefined) {
      additionSeparator = options.additionSeparator;
    }

    if (
      options.additionRepeatTimes < 2 ||
      options.additionRepeatTimes == undefined
    ) {
      someAddition += additionCopy;
    } else {
      someAddition = additionCopy + additionSeparator;

      for (let index = 0; index < options.additionRepeatTimes - 1; index++) {
        if (index == options.additionRepeatTimes - 2) {
          someAddition += additionCopy;
        } else {
          someAddition += additionCopy + additionSeparator;
        }
      }
    }
  }

  for (let index = 0; index < options.repeatTimes - 1; index++) {
    string += someAddition + separator + str;
  }

  if (options.addition !== undefined) {
    return string + someAddition;
  } else {
    return string;
  }
};
