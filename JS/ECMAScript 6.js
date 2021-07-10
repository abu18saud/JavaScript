/**
 * Also note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.
 */
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

varTest();
letTest();


let name = 'David';
let msg = `Welcome ${name}!`; //backtick
console.log(msg);

let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);