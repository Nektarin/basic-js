const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let arr2 = arr.slice();

  for (let index = 0; index < arr2.length; index++) {

    if (Array.isArray(arr2[index])) {
      arr2[index] = transform(arr2[index]).slice();
    }

    if (index == 0 && (arr2[index] == '--discard-prev' || arr2[index] == '--double-prev')) {
      arr2.splice(index, 1);
    } else if (index == arr2.length - 1 && (arr2[index] == '--discard-next' || arr2[index] == '--double-next')) {
      arr2.splice(index, 1);
    } else if (arr2[index] == '--discard-next') {
      if (arr2[index + 2] == '--double-prev' || arr2[index + 2] == '--discard-prev') {
        arr2.splice(index, 3);
      } else {
        arr2.splice(index, 2);
      }
    } else if (arr2[index] == '--discard-prev') {
      arr2.splice(index - 1, 2);
    } else if (arr2[index] == '--double-next') {
      arr2.splice(index, 1, arr2[index + 1]);
    } else if (arr2[index] == '--double-prev') {
      arr2.splice(index, 1, arr2[index - 1]);
    }
  }
  return arr2;
};