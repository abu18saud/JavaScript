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

}
