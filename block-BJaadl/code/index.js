let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr){
  return [...arr].sort((a,b) => a.length - b.length).pop();
}

findLongestWord(words);


// - Convert the above array "words" into an array of length of word instead of word.

let wordsLength = words.map((w) => w.length);

wordsLength


// - Create a new array that only contains word with atleast one vowel.
function checkvowel(words){
  return words.toLowerCase().includes("a") ||
          words.toLowerCase().includes("e") ||
          words.toLowerCase().includes("i") ||
          words.toLowerCase().includes("o") ||
          words.toLowerCase().includes("u") 
}

let vowelFilter = words.filter((w) => checkvowel(w));

vowelFilter

// - Find the index of the word "rhythm"

words.findIndex((w) => w == "rhythm");


// - Create a new array that contians words not starting with vowel.

let notWithVowel = words.filter((w) => !checkvowel(w[0]));

notWithVowel


// - Create a new array that contianse words not ending with vowel

let notEndWithVowel = words.filter((w) => !checkvowel(w[w.length-1]));

notEndWithVowel


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];



// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(arr){
  return arr.reduce((acc,cv) => {
    acc = acc + cv ; 
    return acc;
  }, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multiplyByThree = numbers.filter((num)=> num * 3===0);



// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter((num) => (num) % 2===0);

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter((num)=> (num) % 2 !==0);

// - Create a new array that should have true for even number and false for odd numbers.

let oddOrEven = numbers.map((num) => num % 2 ===0);

// - Sort the above number in assending order.

let sortedNumber = numbers.sort((a, b) => a - b);


// - Does sort mutate the original array?

// yes sort method mutates the orginal array.


// - Find the sum of the numbers in the array.

let sum = numbers.reduce((acc, cv) => {
  acc = acc + cv ;
  return acc;
}, 0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr){
  return arr.reduce((acc,cv) => {
    acc = acc + cv ;
      return acc
  }, 0)  / arr.length
}


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];



// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

 function averagewordsLength(arr) {
   return arr.map((a) => a.length)
              .reduce((acc,cv) => {
              acc = acc + cv ; 
              return acc;
              },0) / arr.length
            }