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
let msg = `The sum is ${a + b}`;
console.log(msg);

/**London is the capital of GB
 * ES6 Variables and Strings
 * Complete the function to return a string in the required format for your country card program.
 * You need to make country cards for a school project.
 * The given program takes the country and its capital name as input.
 * Complete the function to return a string in the format you are given in the sample output:
 * 
 * Sample Input
 * Portugal
 * Lisbon
 * 
 * Sample Output
 * Name: Portugal, Capital: Lisbon
 * 
 * Use template literals to output variables in strings.
 */
function londonIsTheCapitalOfGB() {
    var country = readLine();
    var capital = readLine();

    console.log(countryCard(country, capital));
}

function countryCard(country, capital) {
    //complete the function
    //use backtick (` `) for template literal
    return `Name: ${country}, Capital: ${capital}`;
}

let obj = { a: 1, b: 2, c: 3 };
for (let v in obj) {
    console.log(v);
}

let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

/**
 * During each iteration the val variable is assigned the corresponding element in the list.

The for...of loop works for other iterable objects as well, including strings
 */
for (let ch of "Hello") {
    console.log(ch);
}
/**
 * The for...of loop also works on the newly introduced collections (Map, Set, WeakMap, and WeakSet). We will learn about them in the upcoming lessons.
 */

/**Score 70 plus!
 * Loops in ECMAScript 6
 * Write a code to count and output to the console the number of succeeded students based on the minimum score.
 * Students need to score at least 70 points to pass an exam. The given program declares an array with results.
 * Write a program to count and output to the console the number of students who pass the exam.
 * Use a for...of loop to iterate through the array.
 */
let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63]

//your code goes here
var count = 0;
for (let score of scores) {
    if (score >= 70) {
        count++;
    }
}
console.log(count);

//Functions in ECMAScript 6
const add = (x, y) => {
    let sum = x + y;  
    console.log(sum);
}
add(35, 7);

const greet = x => "Welcome " + x;

alert(greet("David"));

//If there are no parameters, an empty pair of parentheses should be used, as in
const x = () => alert("Hi");
x();

//The syntax is very useful for inline functions. For example, let's say we have an array, and for each element of the array we need to execute a function. We use the forEach method of the array to call a function for each element:
var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});

//اختصار
arr.forEach(v => {
    console.log(v * 2);
});

/**Salary rise
 * Functions in ECMAScript 6
 * Complete the given function to calculate and return the total salary increase of all workers in the array.
 * You have created an array containing the salaries of your factory workers.
 * The manager at the factory has decided to give salary raises to his best workers and needs to the see the impact of these increases on the budget.
 * The program you are given takes the salary percent increase as input. Complete the given function to use the percent as a parameter, then calculate and return the total salary increase for all of the workers in the array.
 * 
 * Sample Input
 * 10
 * 
 * Sample Output
 * 3000
 * 
 * Use the forEach() function to operate with each element of the array.
 */

 function salaryRise() {
    var percent = parseInt(readLine(),10);
    
    console.log(salaryIncrease(percent));
}
var salaries = [3000, 7000, 5000, 15000];
const salaryIncrease = percent => {
    //your code goes here
    var increase = 0;
    
    salaries.forEach(v =>
    {
         increase += v*(percent/100);
    })
   
    return increase;
}

//Default Parameters in ES6
/*
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5));
*/

// Full ES6 equivalent
const test = (a, b = 3, c = 42) => a + b + c;
console.log(test(5));

/** Default value expressions are evaluated at function call time from left to right. This also means that default expressions can use the values of previously-filled parameters.
 */