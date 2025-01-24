// const PI = 3.14;
// let area = 0;

// function circleArea(radius) {
//   const area = radius * PI;
//   return area
// }

// area = circleArea(3);
// console.log(area);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(3));
// console.log(factorial(2));
// console.log(factorial(1));

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName(first, last) {
//   return `${first} ${last}`;
// }

// const fullName = function(first, last) {
//   return `${first} ${last}`;
// }

// const fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// }

// document.querySelector('.fullName').innerHTML = fullName(firstName, lastName);

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}

array = [1, 2, 3, 4, 8, 9, 10];

last = array[array.length - 1];
console.log(last);