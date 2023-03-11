const removeFromArray = function(array, ...items) {

    let i = 0;
    let index  = array.indexOf(...items);
    if (index !== -1) {
        array.splice(index, 1)
    };
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
