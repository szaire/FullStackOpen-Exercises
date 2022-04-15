// const x = 1
// let y = 5
// console.log(x, y);
// y += 10
// console.log(x, y);
// y = 'sometext'
// console.log(x, y);
// x = 4

// const arr = [0, -1, 2, 3]
// arr.push(5)
// console.log(arr);
// arr.push(99)
// arr.forEach(v => {
//       console.log(v);
// })

// const arr2 = [0, 2, 3, 6]
// const arrNew = arr2.concat(5)
// console.log(arrNew);
// const arrMap = arrNew.map(v => v * 2)
// console.log(arrMap);

const newArr = [0, 1, 2, 3, 4, 5]

const [first, second, third, ...rest/* the rest creates an array! */] = newArr

console.log(newArr);
console.log(first);
console.log(second);
console.log(third);
console.log(rest);