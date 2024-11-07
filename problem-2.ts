// Problem 2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(numArray: number[]): number[] {
  const myArray: number[] = [];
  for (let num of numArray) {
    if (!myArray.includes(num)) {
      myArray.push(num);
    }
  }
  return myArray;
}

const problem2 : number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log('Problem2 Output:', problem2);