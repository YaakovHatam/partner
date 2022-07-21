// sync

function x1() { console.log('x1') }
function x2() {
   console.log('x2');
   x1();
}
function x3() {
   console.log('x3');
   x2();
}
x3();
console.log('work');
/*
   12
   9
   10
   5
   6
   3
   6
   10
   12
   13

   call stack:
   12: x3 (pop #3)
   10: x2 (pop #2)
   6: x1 (pop #1)

*/


// async
function getProgramsCallback(programs) {
   console.log(programs);

}

function getPrgorams() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         var cellular = {
            'Future Gold 5G': 69.9,
            'Future 5G': 59.9
         }
         resolve(cellular);
      }, 1000)
   });
}


getPrgorams().then(getProgramsCallback);
console.log('1');
