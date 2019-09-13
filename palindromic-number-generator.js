function palindromicNumberGenerator(num) {
  let steps = 0;
  let value = num;
  let rValue = reverser(num);
  let isPalindrome = false;

  function reverser(num) {
    let string = num.toString();
    let reverse = string
      .split("")
      .reverse()
      .join("");
    let rValue = parseInt(reverse);
    return rValue;
  }

  while (!isPalindrome) {
    if (value !== rValue) {
      value += rValue;
      rValue = reverser(value);
      steps++;
    } else {
      isPalindrome = true;
    }
  }

  return {
    value: value,
    steps: steps
  };
}

module.exports = palindromicNumberGenerator;
