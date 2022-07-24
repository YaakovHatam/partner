function Person(name, age) {
   this.name = name;
   this.age = age;
}

const p1 = new Person('n', 1);

var obj1 = {
   name: 'obj1',
   sayHello: function () {
      console.log('Hello ' + this.name);
   }
}

const obj2 = {
   name: 'obj2',
   sayHello: obj1.sayHello
}

obj1.sayHello();
obj2.sayHello();



// arrow function
function hello() {
   console.log(1);
}

const hello = () => {
   console.log(1);
}
