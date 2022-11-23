module.exports = function validateCPF(value) {
  const toValidate = value.replace(/[\.\-]/g, '');
  const digits = toValidate.split('');

  let sumFirstDigit = 0;
  let sumSecondDigit = 0;
  for (let index = 0; index < digits.length - 2; index++) {
    const digit = digits[index];

    sumFirstDigit += (10 - index) * digit;
    sumSecondDigit += (11 - index) * digit;
  }

  sumSecondDigit += 2 * digits[digits.length - 2];

  const firstDigitMatch = checkDigit(sumFirstDigit, digits[digits.length - 2]);

  const secondDigitMatch = checkDigit(
    sumSecondDigit,
    digits[digits.length - 1]
  );

  return firstDigitMatch && secondDigitMatch;
};

function checkDigit(sum, digit) {
  let digitShouldBe = 0;
  const firstDigitDif = sum % 11;
  if (firstDigitDif !== 10) {
    digitShouldBe = 11 - firstDigitDif;
  }
  return digit == digitShouldBe;
}
