//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
let stepsHtml = steps.map(listTemplate);

console.log(stepsHtml.join(''));
const list = document.querySelector('#myList')
list.innerHTML = stepsHtml.join();

const letters = ["A", "B", "C"];
function getGPA(letter) {
  let points = 0;
  if (letter === "A") {
    points = 4;
  } else if (letter === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = letters.map(getGPA);
console.log(gpaPoints);

const trueGPA = gpaPoints.reduce((total, points) => total + points) / gpaPoints.length;
console.log(trueGPA)

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortFruits = fruits.filter((fruit) => fruit.length < 6)
console.log(shortFruits)

const numbers = [12,34,21,54]
let luckyNumber = 21

const index = numbers.indexOf(luckyNumber)
console.log(index)