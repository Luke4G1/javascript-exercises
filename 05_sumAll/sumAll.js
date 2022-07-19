const sumAll = function (n1, n2) {
    let sum = 0
    switch (true) {
        case (isNaN(n1)):
            return "ERROR"
            break;
        case (isNaN(n2)):
            return "ERROR"
            break;
        case (n2 < n1):
            for (n2; n2 <= n1; n2--) {
                sum += n2
            }
            return sum
            break;
        case (n1 < 0 || n2 < 0):
            return "ERROR"
            break;
        default:

            for (n1; n1 <= n2; n1++) {
                sum += n1
            }
            return sum;
    }
}
// Do not edit below this line
module.exports = sumAll;