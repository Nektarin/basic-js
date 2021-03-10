const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members == null) {
    return false;
  }
  str = '';
  members.forEach(element => {
    if (typeof element == 'string') {
      str = str + element.trim()[0].toUpperCase();
    }
  });
  return str.split('').sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  }).join('');
};