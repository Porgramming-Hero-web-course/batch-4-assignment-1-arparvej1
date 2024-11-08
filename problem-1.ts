{
  // ----------------------------------------------------------------

  // Problem 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  function sumArray(numArray: number[]): number {
    let sum = 0;
    for (let num of numArray) {
      sum += num;
    }
    return sum;
  }

  const problem1: number = sumArray([1, 2, 3, 4, 5]);

  console.log("Problem1 Output:", problem1);

  // ----------------------------------------------------------------
}
