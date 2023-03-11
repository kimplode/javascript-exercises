const sumAll = function(x, y) {
    let total = 0;


    if (x >= y) {
        while (x >= y) {
            total+=y;
            y++;
        }
    } else if (x <= y) {
        while(x <= y) {
            total+=x;
            x++;
        }
    } else if (typeof x != "number" || typeof y != "number") {
            return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    }
    return total;
};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
