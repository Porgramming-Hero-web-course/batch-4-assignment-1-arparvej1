{
  // ----------------------------------------------------------------
    
  // Problem 3: Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence : string, word : string){
  const sentenceLowercase : string = sentence.toLowerCase();
  const wordLowercase : string = word.toLowerCase();
  const words : string[] = sentenceLowercase.split(" ");
  let count : number = 0;
  for (let word of words) {
    if (word === wordLowercase) {
      count++;
    }
  }
  return count;
}

const problem3 : number = countWordOccurrences("I love typescript", "typescript");

console.log('Problem3 Output:', problem3);

  // ----------------------------------------------------------------
}