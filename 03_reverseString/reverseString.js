const reverseString = function(string) {
    let stringArray = string.split('');
    let newString = '';
    for (let i = 1; i <= stringArray.length; i++) {
    newString += stringArray[stringArray.length - i];
}   
    return newString;
}

// Do not edit below this line
module.exports = reverseString;
