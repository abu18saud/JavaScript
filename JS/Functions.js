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
}

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
/**Who won the match?
 * Complete the function to take Team 1 and Team 2 goals and output the final result of the match.
 * You are given a program that takes Team 1 and Team 2 football teams goals as inputs accordingly.
 * Complete the function to take Team 1 and Team 2 goals as arguments and output the final result of the match:
 * - "Team 1 won", if Team 1's score is higher than Team 2's score
 * - "Team 2 won", if Team 2's score is higher than Team 1's score
 * - "Draw", if the scores are equal
 * 
 * Sample Input
 * 3
 * 4
 * 
 * Sample Output
 * Team 2 won
 * 
 * The function call is already given.
 */
function whoWonTheMatch() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    // function call
    finalResult(goalsTeam1, goalsTeam2)
}
//complete the function
function finalResult(goalsTeam1, goalsTeam2) {
    result = "";
    if (goalsTeam1 > goalsTeam2) {
        result = "Team 1 won";
    } else if (goalsTeam2 > goalsTeam1) {
        result = "Team 2 won";
    } else {
        result = "Draw";
    }
    console.log(result);
};

/**Average of three
 * Given program takes 3 numbers as input ...
 * The return Statement
 * You are given a program that takes 3 numbers as input.
 * Complete the given function to calculate the average of those 3 numbers, assign it to the given variable, and output it.
 * 
 * Sample Input
 * 3
 * 6
 * 9
 * 
 * Sample Output
 * 6
 * 
 * Use return statement to return the calculated value and use it through the program. 
 */
function averageOfThree() {
    var num1 = parseInt(readLine(), 10);
    var num2 = parseInt(readLine(), 10);
    var num3 = parseInt(readLine(), 10);

    var average = avg(num1, num2, num3);
    //assign the average value to the variable average 
    console.log(average)
}

//complete the function
function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
/**About prompt*/
var user = prompt("Please enter your name", "Abdullah");
alert(user);
/**About Confirm*/
var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
} else {
    alert("Thanks for staying with us");
}
/**Currency Converter
 * You are making a currency converter app.
 * Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
 * The code to take the parameters as input and call the function is already present in the Playground.
 * Create the function to make the code work.
 * 
 * Sample Input:
 * 100
 * 1.1
 * 
 * Sample Output:
 * 110
 * 
 * Converting 100 at the rate of 1.1 is equal to 100*1.1 = 110.
 */
function currencyConverter() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);

    console.log(convert(amount, rate));
}

function convert(amount, rate) {
    return amount * rate;
};