module.exports = function countCats(matrix) {
  let answer = 0;
  matrix.forEach(element => {
    element.forEach(innerElement => {
      if (innerElement === '\^\^')
        answer++;
    });
  });
  return answer;
};