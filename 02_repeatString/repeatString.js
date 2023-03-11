const repeatString = function(string, num) {
    let newString = "";
    let i = 0;

    while (i <=num) {
        newString.concat(string)
    }

    console.log(newString);
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
