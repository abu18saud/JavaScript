function ArithmeticOperators() {
    var x = eval("10 * 20 + 8");
    var y = x + 5 + 22 + 45 + 6548;
    document.write(y);
}

function SpeedOfSound() {
    /*
    Create a program that outputs the distance the sound covers in a given number of seconds.

Math Operators


Science fact! The speed of sound in air is about 343 meters per second.

Create a program that calculates and outputs to the console the distance the sound covers in 600 seconds.
Use console.log() to output the result to the console.
    */
    console.log(343 * 600);
}

function BigSale() {
    /*
    Complete the program so that it will output the discounted price to the console.

Math Operators

Time to go shopping!
Everything in the store has been discounted by 20%.
You are given a program that takes the price of an item as input. Complete the program so that it outputs the discounted price to the console.

Sample Input
100

Sample Output
80

Explanation
20 percent of 100 equals to 20 (100 * 20/100), so the discounted price will be 80 (100 - 20).
Remember the division (/) and multiplication (*) operators.
    */
    //so we don’t overwhelm you, we’ve hidden the code that executes the input
    var oldPrice = parseInt(readLine(), 10)
    // your code goes here
    console.log(oldPrice - (oldPrice * 20 / 100));
}

function ChangeYourPassword() {
    /*
    Comparison Operators

    Write a program that doesn't allow you to type an old password.
    Reset account passwords should not be the same as the old password.
    Write a program that takes old and new passwords as inputs and outputs to the console the boolean value (true or false) that shows whether or not they match.

    Sample Input
    hl8792m
    hl8792m

    Sample Output
    true

    Remember that all comparison operators always return true or false.
    For example: console.log(5>4) outputs true.
    */

    var oldPass = readLine();
    var newPass = readLine();
    // Your code goes here
    console.log(oldPass == newPass);
}

function FindTheAdults() {
    /**
     * Math Operators
     * There are a lot of situations where you want to check someone’s age...not just at the bar!
     * Write a program that takes the age of the user as input, checks if the user is an adult, and outputs to the console the corresponding boolean value.
     * 
     * Sample Input
     * 20
     * 
     * Sample Output
     * true
     * 
     * If the user is 18 or older, they’re considered an adult.
     */
    var age = parseInt(readLine(), 10);
    // Your code here
    if (age >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function NoonOrMidnight() {
    /**Noon Or Midnight
     * Given a clock that measures 24 hours in a day, write a program that takes the hour as input and ...
     * Time flies when you’re having fun.
     * Given a clock that measures 24 hours in a day, write a program that takes the hour as input. If the hour is in the range of 0 to 12, output am to the console, and output pm if it's not.
     * 
     * Sample Input
     * 13
     * 
     * Sample Output
     * pm
     * 
     * Assume the input number is positive and less than or equal to 24.
     */
    var hour = parseInt(readLine(), 10);
    // Your code goes here
    if (hour >= 13) {
        console.log("pm");
    } else {
        console.log("am");
    }
}
