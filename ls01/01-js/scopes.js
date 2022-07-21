var myvar = 5; // global scope

if (true) {
   var x = 4;
}
function myFunc() {
   var myvar = 5; // myFunc scope
   if (true) {
      var x = 4;
   }
   console.log(x)
   console.log(myvar)
}
myFunc();

// let
if (true) {
   let x2 = 1;
   x2 = 3;
   const x3 = 3;
   x3 = 6;
   console.log(x2);
}
console.log(x2);

// #2
function OuterScope() {
   var outerScopeVariable1 = 1;
   {
      let outerScopeVariable2 = 1;
      console.log(outerScopeVariable2);
   }
   const outerScopeVariable3 = 1;

   function innerScope() {
      console.log(outerScopeVariable1, outerScopeVariable2, outerScopeVariable3)

   }
   innerScope();
}
OuterScope();


// #3