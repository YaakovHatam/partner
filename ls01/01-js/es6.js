// destructuring
const obj1 = {
   a: 1,
   b: 2,
   c: 3
};

const arr = [1, 2, 3];

/*const a = obj1.a;
const b = obj1.b;
const c = obj1.c;*/

const { a, b, c } = obj1;
const [x, y, z] = arr;

console.log(x, y, z);

const obj2 = { ...obj1 }

function testFunc(o1) {
   o1.x = 10;
   console.log(o1)
}
console.log(obj1);
testFunc({ ...obj1 });
console.log(obj1);



// objwxr reference
const obj1 = {
   x: 1
}
function testFunc(o1) {
   o1.x = 10;
}
console.log(obj1);
testFunc(obj1);
console.log(obj1);
