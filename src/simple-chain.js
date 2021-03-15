const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push(' ');
    } else {
      this.arr.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (position < 0 || typeof position !== 'number' || (position ^ 0) !== position) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }

  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let temp = this.arr.map(value => `( ${value} )`).join('~~');
    this.arr = [];
    return temp;
  }
};

module.exports = chainMaker;