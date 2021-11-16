console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello Frances!"', helloName( 'Frances' ));

// 3. Function to add two numbers together & return the result
function addNumbers( num0, num1 ) {
  let sum = num0 + num1;
  return sum; // return firstNumber + secondNumber;
}
console.log('Test +', addNumbers ( 5, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let threex = num0 * num1 * num2;
  return threex;
}
console.log('Test *', multiplyThree ( 2, 3, 4 ));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let artists = [ 'Madi Diaz', 'Twin Shadow', 'Polica', 'Hippo Campus', 'Rostam' ];

function getLast(artists) {
  return artists[artists.length - 1] || undefined
    } 

console.log('test getLast', getLast (artists));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, artists ) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i] === value) {
      return true;
    } 
  }
    return false;
  }

console.log(find ('Houndmouth', artists))
console.log(find ('Madi Diaz', artists))
console.log(find ('Twin Shadow', artists))
console.log(find ('Polica', artists))
console.log(find ('Rostam', artists))
console.log(find ('Hippo Campus', artists))
console.log(find ('Courtney Barnett', artists))

//Could you use a forEach for this?

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numArray =  [16, 50, 4, 21, 32]
function sumAll(numArray) {
  let sum = 0;
  for (i = 0; i < numArray.length; i++) {
    sum = numArray[i] + sum;
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let numHundred = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let newArray = [];

function positive(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
}
positive(numHundred);

console.log(`First array: ${numHundred}`)
console.log(`New array: ${newArray}`)


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
