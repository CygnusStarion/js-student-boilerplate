// Write a program that sums the numbers from 1 to 10.

let counter = 1; //placeholder variable
let sum = 0; //variable to keep track of sum

// `<=` is  COMPARISON OPERATOR
while (counter <= 10) {
  //while counter is <= 10, then do this:
  sum += counter; // sum = sum + counter;

  // `+=` is an ASSIGNMENT OPERATOR
  counter += 1; // counter = counter + 1;
}

console.log(sum); //logs the sum
