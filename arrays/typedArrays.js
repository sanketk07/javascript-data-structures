let buffer;
let i32View;
let testArray = new Int32Array(3);
console.log("Printing typed array: " + testArray); // Int32Array(3) [0, 0, 0]
console.log("Checking if typed array is an array: " + Array.isArray(testArray)); // false
// testArray.push(); // Uncaught TypeError: test.push is not a function
// testArray.pop() // Uncaught TypeError: test.pop is not a function

var arr = new Array();
// let arr = [5, 4];
arr.push(5);
arr.push(2);
console.log("Printing index 0: " + arr[0]); // 5
console.log("Printing array without any index: " + arr); // 5,2
console.log("Printing array length: " + arr.length); // 2
let peekedItem = arr[arr.length-1];
console.log("Printing first element using peek: " + peekedItem); // 2