/**
 * Given an integer n, your task is to check if the sum of the prime factors of n is a prime.
 * For n = 148, the output should be primeSumOfPrimeFactors(n) = true.
 * 148 has prime factors 2, 2 and 37. Their sum is 41, which is prime, so the answer is true.
 * For n = 8, the output should be primeSumOfPrimeFactors(n) = false.
 * 8 has prime factors 2, 2, and 2, which sum to 6. Since 6 isn't a prime (6 = 2 * 3), the answer is false.
 */

/*** 
  * primeSumOfPrimeFactors = n => {
  var array = [];
  var index = 2;
  while (n > 1) {
    if (n % index == 0) {
      array.push(index);
      n = n / index;
    } else {
      index++;
    }
  }
  return check(array.reduce((x, y) => x + y));
};

check = n => {
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
 */
primeSumOfPrimeFactors = n => {
  var sum_Number;
  var index = 2;
  while (n > 1) {
    if (n % index == 0) {
      sum_Number += index;
      n = n / index;
    } else {
      index++;
    }
  }
  for (i = 2; i * i <= sum_Number; i++) {
    if (sum_Number % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(primeSumOfPrimeFactors(148));
