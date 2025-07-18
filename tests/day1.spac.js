var x=10;
let y=20;
var z='hello';
//  console.log(z);
function sum() {
     x = 5; // This will shadow the global variable x
     y= 15; // This will shadow the global variable y
    console.log(y);
    console.log("Test function called with x =", x);

    }
    sum();
    console.log("Global y =", y);


