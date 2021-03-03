
// You should implement your task here.

module.exports = function towelSort (matrix) {
    result = [];
    if (Array.isArray(matrix)) {
        result = matrix.map((a, idx) => (Array.isArray(a)) ? ((idx % 2) ? a.reverse() : a) : a).flat();
    }
    return result;
}
