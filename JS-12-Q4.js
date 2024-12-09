//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
// Using var
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // Output: 20
}
console.log(x); // Output: 20

// Using let
let y = 10;
if (true) {
    let y = 20; 
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

// Using const
const z = 30;
// z = 40; // Error! because z cannot be reassigned
console.log(z); // Output: 30