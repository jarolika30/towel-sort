
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let matrixVal = (typeof matrix === 'undefined' || matrix.length === 0) ? [] : matrix.map((el, index) => {return index % 2 === 0 ? el : el.reverse()});
    return matrixVal.length === 0 ? matrixVal : [].concat(...matrixVal);
}
