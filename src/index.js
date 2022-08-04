
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return (matrix || []).reduce((res, subArr, i) => {
    res.push(...(i % 2 === 0 ? subArr : subArr.reverse()));
    return res;
  }, []);
}
