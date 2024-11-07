// Problem 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(numArray) {
    var sum = 0;
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
        sum += num;
    }
    return sum;
}
var problem1 = sumArray([1, 2, 3, 4, 5]);
console.log('Problem1 Output:', problem1);
