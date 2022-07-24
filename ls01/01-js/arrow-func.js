

var obj3 = {
   firstname: 'obj3',
   sayHello: () => {
      console.log('Hello ' + this.firstname);
   }
}

const obj4 = {
   firstname: 'obj4',
   sayHello: obj3.sayHello
}

obj3.sayHello();
obj4.sayHello();


function hello() {
   var that = this;
   setTimeout(function () {
      console.log(that.firstname);
   }, 0)
};
var o = {
   firstname: 'asd',
   sayHello: hello
}
o.sayHello();


function hello() {
   setTimeout(() => console.log(this.firstname), 0)
};
var o = {
   firstname: 'asd',
   sayHello: hello
}
o.sayHello();

const exampleArrow1 = () => 1;