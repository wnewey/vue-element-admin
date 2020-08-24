var random = (digit = 6, number = false) => {
  var ox = number ? 10 : 36;
  var finalDigit = (!isNaN(digit) && parseInt(digit) >= 0) ? parseInt(digit) : 6;
  return Math.random().toString(ox).substr(2, finalDigit);
};

export default {
  random: (digit) => {
    return random(digit);
  },
  randomNumber: (digit) => {
    return random(digit, true);
  }
};
