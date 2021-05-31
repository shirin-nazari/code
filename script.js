const whatNumberIsIt = (n) =>
  `Input number is ${
    Number.isNaN(n)
      ? `Number.NaN`
      : n === Number.MAX_VALUE
      ? `Number.MAX_VALUE`
      : n === Number.MIN_VALUE
      ? `Number.MIN_VALUE`
      : n === Infinity
      ? `Number.POSITIVE_INFINITY`
      : n === -Infinity
      ? `Number.NEGATIVE_INFINITY`
      : n
  }`;

function whatNumberIsIt(n) {
  if (n === Infinity) return "Input number is Number.POSITIVE_INFINITY";
  else if (n == 1.7976931348623157e308)
    return "Input number is Number.MAX_VALUE";
  else if (isNaN(n)) return "Input number is Number.NaN";
  else if (n == 5e-324) return "Input number is Number.MIN_VALUE";
  else if (n === -Infinity) return "Input number is Number.NEGATIVE_INFINITY";
  else return "Input number is " + n;
}
