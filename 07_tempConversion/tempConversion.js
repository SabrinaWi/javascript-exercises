const convertToCelsius = function(tempF) {
  let tempC;
  //converts from Fahrenheit to Celcius
  tempC = (tempF - 32) * 5/9;
  //rounds to 1 decimal and returns value
  return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  let tempF;
  //converts from Celcius to Fahrenheit
  tempF = (tempC * 9/5 + 32);
  //rounds to 1 decimal and returns value
  return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
