const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 0;
    if (Array.isArray(arr)) {
      for (let key in arr) {
        let dpth = this.calculateDepth(arr[key]);
        if (dpth > maxdepth)
          maxdepth = dpth;
      }
      return ++maxdepth;
    }
  }
};