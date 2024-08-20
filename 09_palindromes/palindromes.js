const palindromes = function (string) {
  let arr = string.split("").filter(function (char) {
    return (
      ("a" <= char && char <= "z") ||
      ("A" <= char && char <= "Z") ||
      ("0" <= char && char <= "9")
    );
  });
  let arrOriginal = [...arr];
  let arrReversed = arr.reverse();
  return (
    arrOriginal.join("").toLowerCase() === arrReversed.join("").toLowerCase()
  );
};

// Do not edit below this line
module.exports = palindromes;
