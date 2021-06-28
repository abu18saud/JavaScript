//Quiet Rules
function QuietRules() {
    /*
The if Statement
Sundays in Switzerland are protected with Quiet Rules which make it illegal to pursue certain activities.
Taking the day of the week as input, output to the console "Obey the rules" if it is Sunday.

Sample Input
Sunday

Sample Output
Obey the rules

Don't output anything if the input day isn't a Sunday.
    */
    var day = readLine();
    var rules = 'Obey the rules';

    if (day == "Sunday") {
        console.log(rules);
    }
    // Your code goes here
}

//Admission In Pairs
/**
 * Take the number of customers in the club and check whether they match the condition of admission in pairs.
 * Entrance to the club is only permitted in pairs.
 * Take the number of customers in the club as input, and, if all of them have a pair, output to the console "Right", otherwise output "Wrong".
 * 
 * Sample Input
 * 14
 * 
 * Sample Output
 * Right
 * 
 * Do not confuse the = operator with the == operator.
 */
function AdmissionInPairs() {
    var numberGuests = parseInt(readLine(), 10)
    // Your code here
    if ((numberGuests % 2) == 0) {
        console.log("Right");
    } else {
        console.log("Wrong");
    }
}

/**
 * Buy More, Get More
 * Write a program output the corresponding discount to the console.
 * Problem description
 * A store is offering a tiered discounts based on the purchase total.
 * 
 * 5000 and above => 50%
 * 3000-4999 => 30%
 * 1000-2999 => 10%
 * 1-999 => 0%
 * Write a program that takes the total price as input and outputs the corresponding discount to the console.
 * 
 * Sample Input
 * 4700
 * 
 * Sample Output
 * 30%
 * 
 * Use logical operator && to chain multiple conditions.
 */
function BuyMore_GetMore() {
    var totalPrice = parseInt(readLine(), 10)
    // Your code here
    if (totalPrice <= 999) {
        console.log("0%");
    } else if (totalPrice <= 2999) {
        console.log("10%");
    } else if (totalPrice <= 4999) {
        console.log("30%");
    } else {
        console.log("50%");
    }
}
/**Dark Theme
 * Complete the program to output the theme according to input number.
 * Switch statements
 * The user can choose the color theme for the browser:
 * 1. Light
 * 2. Dark
 * 3. Nocturne
 * 4. Terminal
 * 5. Indigo
 * 
 * You are given a program that takes
 * the number as input. Complete the program so that it will output to the console the theme according to input number.
 * 
 * Sample Input
 * 2
 * 
 * Sample Output
 * Dark
 * 
 * Don't forget to use break for each case statement.
 */

function DarkTheme() {
    var themeNumber = 1;
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    */
    // Your code here
    switch (themeNumber) {
        case 1:
            console.log("Light");
            break;
        case 2:
            console.log("Dark");
            break;
        case 3:
            console.log("Nocturne");
            break;
        case 4:
            console.log("Terminal");
            break;
        case 5:
            console.log("Indigo");
            break;
    }
}
/**Pages Per Minute
 * Write a program tto define and output the speed of the printer.
 * The For loop
 * The printer prints 20 pages per minute.
 * Write a program that will output to the console how many pages will be printed each minute over the course of 6 minutes.
 * 
 * Output
20
40
60
80
100
120
 * 
 * Don't forget to increment the counter (i++) for every iteration.
 */
function PagesPerMinute() {
    // Your code here
    for (i = 1, dep = 20; i <= 6; i++) {
        result = dep * i;
        console.log(result);
    }
}
/** Factorial Fun
 * Write a program to output to the console the factorial of ...
 * The for loop
 * A number's factorial is the product of all positive integers less than or equal to the number.
 * Write a program that takes a number as input and outputs its factorial to the console.
 * 
 * Sample Input
 * 5
 * 
 * Sample Output
 * 120
 * 
 * Explanation
 * 5*4*3*2*1 = 120
 * 
 * A factorial variable is declared for initial iteration.
 */
function factorialFun() {
    // Your code here
    var number = parseInt(readLine(), 10)
    var factorial = 1;

    if (number == 0 || number == 1) {
        console.log(factorial);
    } else {
        for (var i = number; i >= 1; i--) {
            factorial = factorial * i;
        }
        console.log(factorial);
    }
}