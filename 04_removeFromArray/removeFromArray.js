<<<<<<< HEAD
const removeFromArray = function(arr, ...theArgs) {
    for (const arg of theArgs) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] === arg) {
            arr.splice(i, 1);
            };
        };
    };
    return arr;
=======
const removeFromArray = function() {
>>>>>>> upstream/main
};

// Do not edit below this line
module.exports = removeFromArray;
