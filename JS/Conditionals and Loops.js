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
/**Time's Up!
 * Write a program-timer that will take the count of seconds as input and output ...
 * Write a program-timer, that will take the count of seconds as input and output to the console all the seconds until timer stops.
 * Sample Input
 * 4
 * Sample Output
 * 4
 * 3
 * 2
 * 1
 * 0
 */
function Times_Up() {
    var seconds = parseInt(readLine(), 10)
        // Your code here
    while (seconds >= 0) {
        console.log(seconds);
        seconds--;
    }
}
/** Skipping 13
 * Write a program to number 15 rooms skipping the number 13.
 * Break and continue
 * Many tall buildings, including hotels, skip the number 13 when numbering floors -- often going from floor 12 to floor 14. It is thought that the number 13 is unlucky.
 * Write a program that will number 15 rooms starting from 1, skipping the number 13. Output to the console each room number in separate line.
 * Be attentive - considering the missing number, the number of last room should be greater than the count of rooms by 1.
 */
function Skipping_13() {
    var countOfRooms = 15;
    // Your code here
    for (i = 1; i <= (countOfRooms + 1); i++) {
        if (i == 13) {
            continue;
        } else {
            console.log(i);
        }
    }
}

function test() {
    //What’s the output of this code?
    var x = 0;
    while (x < 6) {
        x++;
    }
    document.write(x);
}
/**The Snail in the Well
 * The snail climbs up 7 feet each day and slips back 2 feet each night.
 * How many days will it take the snail to get out of a well with the given depth?
 * Sample Input:
 * 31
 * 
 * Sample Output:
 * 6
 * 
 * Explanation: Let's break down the distance the snail covers each day:
 * Day 1: 7-2=5
 * Day 2: 5+7-2=10
 * Day 3: 10+7-2=15
 * Day 4: 15+7-2=20
 * Day 5: 20+7-2=25
 * Day 6: 25+7=32
 * 
 * So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.
 * 
 * Hint: You can use a loop to calculate the distance the snail covers each day, and break the loop when it reaches the desired distance.
 */

function theSnailinTheWell() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    i = 0;

    for (; depth > 0;) {
        i++;

        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}
/**Loading
 * It’s very comfortable to have a preloader component especially in ...
 * User-Defined Functions
 * It’s very common to have "Preloader" component, especially in multifunctional apps and websites.
 * Create a function that will output "Loading" to the console.
 * 
 * Output
 * Loading
 * 
 * Don't forget to call the function.
 */
function showPreloader() {
    //complete the function
    console.log("Loading");
}

//call the function
//showPreloader();

/**Important reminders
 * Complete the function-reminder to output the corresponding message.
 * Function Parameters
 * Sometimes it’s very useful to set reminder to help you accomplish all of your tasks.
 * The program you are given takes an event as input.
 * Complete the function-reminder to take that event as argument and output the corresponding message.
 * 
 * Sample Input
 * workout
 * 
 * Sample Output
 * You set a reminder about workout
 * 
 * Use + operator to concatenate string values together.
 * 
 * For example, console.log("JS is " + "fun!") will output "JS is fun".
 */
function Importantreminders() {
    var eventExample = readLine();
    // function call
    setReminder(eventExample)
}
//complete the function
function setReminder(eventExample) {
    console.log("You set a reminder about " + eventExample);
};

/**Spend after saving
 * Complete the function in order to calculate and output the savings.
 * Function Parameters
 * "Do not save what is left after spending; instead spend what is left after saving." said Warren Buffett. Inspired by these words Jack decided to save 15% of his monthly salary.
 * You are given a program that takes salary as input. Complete the function in order to calculate and output the savings.
 * 
 * Sample Input
 * 200
 * 
 * Sample Output
 * 30
 * 
 * Remember to pass the argument when you call the function.
 */
function spendAfterSaving() {
    var salaryAmount = parseInt(readLine(), 10);
    // complete the function call
    getSavings(salaryAmount);
}
//complete the function
function getSavings(amount) {
    savings = amount * 0.15
    console.log(savings)

};