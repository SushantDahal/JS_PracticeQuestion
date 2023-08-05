//--------------------------------  Map=> It creates a new array by doing something each itesm in an array

//-------------------------------- Lets take the difference of map and forEach function
//=========Map================
//  const number = [10, 20, 30, 40, 50];
// function double(x) {
//   return x * 2;
// }
// const newNumber = number.map(double);
//We can do like this also
// const newNumber = number.map(function (x) {
//   return x * 2;
// });
// console.log(newNumber);

//=========forEach================
// const number = [10, 20, 30, 40, 50];
// const newNumber = [];
// function double(x) {
//   newNumber.push(x * 2);
// }
// number.forEach(double);

//=======We can also do like this
// number.map(function (x) {
//     newNumber.push(x * 2);
//   });
// console.log(newNumber);
// .
// .
// .
// .
// .
// .
// .

//--------------------------------Filter => Creates a new array by keeping the items that returns true
//-------------------------------- Lets take the difference of Filter and forEach function
//=========Map================
// const number = [10, 20, 30, 40, 50];

// const newNumber = number.filter(function (num) {
//   return num > 20;
// });
// console.log(newNumber);

//=========forEach================
// const number = [10, 20, 30, 40, 50];
// const newNumber = [];

// number.forEach(function (num) {
//   if (num > 10) {
//     newNumber.push(num);
//   }
// });
// console.log(newNumber);
// .
// .
// .
// .
// .
// .
// .

//--------------------------------Reduce => Accumulate the value bly doing something to each item in an array
//-------------------------------- Lets take the difference of Reduce and forEach function
//==============Reduce function
// const numbers = [10, 20, 30, 40, 50];

// const newNumber = numbers.reduce(function (accumulator, currentnumber) {
//   return a + b;
// });
// console.log(newNumber);

//===============forEach function

// const numbers = [10, 20, 30, 40, 50];

// var newNumber = 0;

// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);
//-------------------------------- Lets take the difference of Reduce and forEach function
// .
// .
// .
// .
// .
// .
// .

// Find =>Find the first items that match from the array
const numbers = [10, 2, 33, 420, 30, 4];

const newNumbers = numbers.find(function (x) {
  return x > 20;
});
console.log(newNumbers);

// FindIndex =>Find the first items Index that match from the array
const number = [10, 2, 33, 420, 30, 4];

const newNumber = numbers.findIndex(function (x) {
  return x > 20;
});
console.log(newNumber);
