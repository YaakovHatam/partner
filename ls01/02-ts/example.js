let x;
const arr2 = [];
function a(x, y) {
    return true;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.push('sdf');
const newArr = arr.map((e, i) => 'item ' + e + ' at index:' + i);
console.log(newArr);
console.log(arr.filter(e => e % 2 == 0));
console.log(arr.find(e => e % 2 == 0));
console.log(arr.every(e => e % 2 == 0));
console.log(arr.some(e => e % 2 == 0));
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return this.x * this.y;
    }
}
class b extends Shape {
}
class c extends Shape {
    constructor() {
        super(...arguments);
        this.a = 1;
    }
}
const c1 = new c(2, 2);
c1.area();
