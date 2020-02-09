//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = num => {
  let aliquotSum = calculateFactorSum(num);
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  if (aliquotSum == num) {
    return "perfect";
  } else if (aliquotSum > num) {
    return "abundant";
  } else if (aliquotSum < num) {
    return "deficient";
  }
};

const calculateFactorSum = n => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
};
