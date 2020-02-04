export const steps = n => {
  let count = 0;
  if (n <= 0) throw new Error("Only positive numbers are allowed");

  while (n !== 1) {
    //   if (n % 2 === 0) {
    //     n = n / 2;
    //   } else {
    //     n = n * 3 + 1;
    //   }

    // --SOLUTION USING TERNARY OPERATOR--
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    count++;
  }
  return count;
};
