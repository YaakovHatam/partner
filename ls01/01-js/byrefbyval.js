
function test1(x) {
   x = 2;
}

function test2(obj) {
   obj.x = 2;
}

var _x = 0;
var _obj = {
   x: 0
}
console.log(_x, _obj);
test1(_x);
test2(_obj) 
console.log(_x, _obj);
