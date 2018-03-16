/*
The check digit (x) is obtained by computing the sum of the other digits
(third row) then subtracting the units digit from 10 (67 => Units digit 7;
0 − 7 = check digit 3). In algorithm form:

Compute the sum of the non-check digits (67).
Take the units digit (7).
Subtract the units digit from 10.
The result (3) is the check digit. In case the sum of digits ends in 0 then
0 is the check digit.
*/

function luhn(number) {
  var numArr = number.toString().split("").reverse();
  // console.log(numArr);
  var checkDigit = Number(numArr.shift());
  numArr = numArr.map(function(str) {
    return Number(str);
  })
  // console.log(numArr);
  for (var i = 0; i < numArr.length - 1; i += 2) {
    numArr[i] *= 2;
    if (numArr[i] > 9) {
      numArr[i] -= 9;
    }
  }
  var sum = numArr.reduce(function(acc, currentEl) {
    return acc + currentEl;
  });


  // console.log(sum);

  var compDigit = 10 - (sum % 10);

  if (checkDigit !== compDigit) {
    return false;
  }

  return true;
}

// console.log(luhn(29303985));

module.exports = luhn;