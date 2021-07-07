/**مراجع مهمة
 * https://code.sololearn.com/W5hBnt5m99tZ/?ref=app
 * 
 * 
 * 
 */



var courses = new Array("HTML", "CSS", "JS");
/**Fluffy Pancakes
 * Write a program to replace the element with input index and output the new menu.
 * The array you are given represents the menu of breakfast options available at the hotel.
 * The Chef decided to replace one of the options with "Fluffy Pancakes".
 * Write a program to take the index as input, replace the element with that index with "Fluffy Pancakes", and output the new menu to the console as an array.
 * 
 * Sample Input
 * 2
 * 
 * Sample Output
 * [
 * 'Cinnamon Doughnuts',
 * 'Waffles',
 * 'Fluffy Pancakes',
 * 'Chorizo Burrito',
 * 'French Toast'
 * ]
 * 
 * The element with index 2 has been replaced in the output array.
 * 
 * Remember that the first element of an array has 0 index.
 */

function fluffyPancakes() {
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    var index = parseInt(readLine(), 10)

    //replace the corresponding element by "Fluffy Pancakes"
    breakfasts[index] = "Fluffy Pancakes";
    //output the menu to the console
    console.log(breakfasts);
}
//You can also declare an array, tell it the number of elements it will store, and add the elements later.
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

document.write(courses[2]);
//JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically.
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

document.write(courses[2]);
//For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax.
var courses = ["HTML", "CSS", "JS"];
document.write(courses[2]);

/** Level Up!
 * Write a program to creates the corresponding array of points and output the sum of all gained points.
 * Array Properties & Methods
 * The player receives points after passing each level of a game.
 * The program given takes the number of passed levels as input, followed by the points gained for each level, and creates the corresponding array of points.
 * Complete the program to calculate and output to the console the sum of all gained points.
 * 
 * Sample Input
 * 3
 * 1
 * 4
 * 8
 * 
 * Sample Output
 * 13
 * 
 * Explanation
 * The first input represents the number of passed levels, -- in this case, 3 (the size of an array to be created). The next 3 inputs are the points awarded to the player for passing each level. The player gained 1+4+8 points for 3 passed levels, which is then output.
 * 
 * Notice that the first inputted number can be used as length of an array.
 */

function levelUp() {
    //take the number of passed levels
    var levels = parseInt(readLine(), 10);
    var points = new Array();

    var count = 0;
    while (count < levels) {
        var elem = parseInt(readLine(), 10);
        points[count] = elem;
        count++;
    }

    var sum = 0;
    //calculate the sum of points 
    for (var i = 0; i < count; i++) {
        sum += points[i];
    }


    //output
    console.log(sum);
}
//Combining Arrays
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

document.write(courses[2]);

//Associative Arrays
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);

/** Circumference Of A Circle
 * Complete the given function to calculate and output the circumference of the circle.
 * The Math Object
 * The program you are given takes the radius of a circle as input.
 * Complete the given function to take the given radius as an argument and return the circumference of the circle.
 * 
 * Sample Input
 * 5
 * 
 * Sample Output
 * 31.42
 * 
 * Hint
 * Use 2*π*r formula to calculate the circumference of the circle with radius r.
 * 
 * The method toFixed is used to round the number to keep only the decimals given as parameter.
 */
function circumferenceOfaCircle() {
    var r = parseInt(readLine(), 10)

    //the output
    console.log(calcCirc(r));
}

//complete the function
function calcCirc(r) {
c = 2 * Math.PI * r;
    return c.toFixed(2);
}

//الرقم العشوائي الصحيح
/**
 * To get a random number between 1-10,
 *  use Math.random(),
 *  which gives you a number between 0-1.
 *  Then multiply the number by 10,
 *  and then take Math.ceil() from it:
 *  Math.ceil(Math.random() * 10).
 */

 var ran = Math.ceil(Math.random() * 100);

 document.write(ran);

 /**Which Century?
  * Create a function that returns the century depending on the given parameter.
  * The Math Object
  * Create a function that returns the century depending on the year given as a parameter.
  * 
  * Sample Input
  * 1993
  * 
  * Sample Output
  * 20
  * 
  * Hint
  * You need to divide 1993 by 100: 1993/100 = 19.93, then round it to the nearest integer, which is 20 in this case.
  * 
  * Use Math.ceil(x) method, which returns x rounded upwards to the nearest integer.
  */

  function whichCentury() {
    var year = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(year){
    var c = year/100;
    return Math.ceil(c);
}
//Let's create a program that will ask the user to input a number and alert its square root.
//لنقم بإنشاء برنامج يطلب من المستخدم إدخال رقم وإرجاع جذره التربيعي

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
//Math is a handy object. You can save a lot of time using Math, instead of writing your own functions every time.
//الرياضيات هي كائن مفيد. يمكنك توفير الكثير من الوقت باستخدام الرياضيات ، بدلاً من كتابة الدالات الخاصة بك في كل مرة.

//setInterval
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);
//The Date Object
/**
 * new Date(milliseconds)
 * new Date(dateString)
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 */
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

document.write(d2);

//لنقم بإنشاء برنامج يقوم بطباعة الوقت الحالي على المتصفح مرة كل ثانية.

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
/**Monday to Sunday
 * Create a function that returns the corresponding day of week given the required arguments.
 * The Date Object
 * The program you are given takes year, month and day as input.
 * Create a function that takes them as arguments and returns the corresponding day of the week.
 * 
 * Sample Input
 * 1993
 * 7
 * 12
 * 
 * Sample Output
 * Thursday
 * 
 * Hint: The given code creates a Date object from the parameters. Use the getDay() method of the date object to get the index, then use it in the given names array to return the name of the day.
 */

 function MondayToSunday() {
    var year = parseInt(readLine(), 10);
    var month = parseInt(readLine(), 10);
    var day = parseInt(readLine(), 10);
     
    console.log(getWeekDay(year, month, day)); 
 }
 
 function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
     //complete the function
     
 }