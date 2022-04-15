// function sum (a, b) {
//     return a + b
// }

const sum = (a, b) => a + b
console.log(sum(1, 2));

// function isAdult(num) {
//     return num > 18
// }

const isAdult = num => num >= 18
console.log(isAdult(19));

// function getRandomNubmer() {
//     return Math.random()
// }

const getRandomNubmer = () => Math.random()
const x = Math.trunc(getRandomNubmer() * 11)
console.log(x);

// document.addEventListener('click', function () {
//     console.log('clicked');
// })

const y = document.addEventListener('click', () => console.log('clicked'))