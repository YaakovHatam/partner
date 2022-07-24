const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.map((e, i) => 'item ' + e + ' at index:' + i);

console.log(newArr);

console.log(arr.filter(e => e % 2 == 0));

console.log(arr.find(e => e % 2 == 0))

console.log(arr.every(e => e % 2 == 0))

console.log(arr.some(e => e % 2 == 0))

