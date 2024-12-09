// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(a, b) {
    return a * b;
}
function outerFunc(x, y) {
    const result = innerFunc(x, y);
    console.log(`The multiplication of ${x} and ${y} is: ${result}`);
}
outerFunc(6,5);
