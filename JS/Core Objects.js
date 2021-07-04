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