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

arr.forEach(function (el) {
    console.log(el * 2);
});

//????????????
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
    var percent = parseInt(readLine(), 10);

    console.log(salaryIncrease(percent));
}
var salaries = [3000, 7000, 5000, 15000];
const salaryIncrease = percent => {
    //your code goes here
    var increase = 0;

    salaries.forEach(v => {
        increase += v * (percent / 100);
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


let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};

tree.grow();
console.log(tree.height); // 12


let height = 5;
let health = 100;

let athlete = {
    height, // height: height,
    health // health: health
};

console.log(athlete.height); // 5

//When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.
var a = { x: 1, x: 2, x: 3, x: 4 };
console.log(a.x); // 4


//--------------------  Computed Property Names -------------------------
//Example 1
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

//-----Example 2:
var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

//Example 3:
var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4
//It is very useful when you need to create custom objects based on some variables.

//Object.assign() in ES6
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

//Now, let's see how we can use assign() to create a duplicate object without creating a reference (mutating) to the base object.
//withError
let person = {
    name: 'Jack',
    age: 18
};

let newPerson = person;
newPerson.name = 'Bob';

console.log(person.name); // Bob
console.log(newPerson.name); // Bob

//withoutError
let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name); // Jack
console.log(newPerson.name); // Bob

//Finally, you can assign a value to an object property in the Object.assign() statement.
let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person, { name: 'Bob' });

console.log(newPerson.name); // Bob

/** ES6 Objects
 *  Workout harder!
 * Complete the code to combine basic and advanced level exercises into one new object named total.
 * You are making a workout app. After completing the basic exercises in the app, the user is able to access advanced content.
 * The given program declares two classes - basic and advanced with corresponding properties. Complete the code to combine basic and advanced level exercises into one new object named total, so that the given code for final output works correctly.
 * Use Object.assign() to perform the requested operation.
 */
let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

//your code goes here
total = Object.assign({}, basic, advanced)

for (let ex in total) {
    console.log(total[ex])
};

//-------------------------
const obj1 = {
    a: 0,
    b: 2,
    c: 4
};
const obj2 = Object.assign({ c: 5, d: 6 }, obj1);
console.log(obj2.c, obj2.d);


//Array Destructuring in ES6
let arr = ['1', '2', '3'];

let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
//We can use also destructure an array returned by a function.
let a = () => {
    return [1, 3, 2];
};

let [one, , two] = a();

console.log(one); // 1
console.log(two); // 2

//?????????? ??????????
let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4

//???????? ???????????? ??????????????
let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John);

//?????? ???????? ?????? ?????????????????? ???????????? ???? ??????????????
let obj = { h: 100, s: true };
let { h, s } = obj;

console.log(h);
console.log(s);

//???????????? ?????????????? ???????? ?????????? ?? ???????? ???????? ?????? ?????????????????? ?????????????? ????????
let a, b;
({ a, b } = { a: 'Hello ', b: 'Jack' });

console.log(a + b);
//?????? () ???????? ?????????? ?????? ?????????? ???????????? (??) ???? ?????????????? ?????????????? ?????? ?????????????? ???????? ??????????. ?????? ?????? ?? ?????????? ?????????? ???????????? ???????? ?????? ?????????? ???????????? ?????? ???? ???????? () ????????????

var o = { h: 42, s: true };
var { h: foo, s: bar } = o;

//console.log(h); // Error
console.log(foo); // 42

//???????????? ?????????? ?????????? ?????? ???????????????? ?????????????????? ?? ???? ???????? ?????? ?????????? ???????????? ???????? ???? ???? ?????????? ???? ????????????.
var obj = { id: 42, name: "Jack" };

let { id = 10, age = 20 } = obj;

console.log(id); // 42
console.log(age); // 20

//ES6 Rest Parameters
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) == -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

//???????? ???????? ??????????
function containsAll(arr) {
    for (let k = 0; k < arguments.length; k++) {
        let num = arguments[k];

        if (arr.indexOf(num) !== -1) {
            console.log(arguments[k] + " - (" + num + ")");
        }
    }
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 2, 4, 7));

//???????? ???????????? ???? ?????????? ??????????
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

//We can pass any number of arguments to the function and access it using the arguments object.



/** Rest & Spread 
 * Summary calculator
 * Create a program to calculate the sum of any number of values.
 * You are making a program to calculate the sum of any number of values.
 * Complete the given function so that it takes as parameters as many numbers as needed and returns the sum.
 * Use the rest parameter as an argument.
 * 
 */
//complete the function
function Add(...num) {
    total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(Add(1, 2, 3));
console.log(Add(4, 14, 5, 9, 14));
console.log(Add(2, 36));


//Filter
function magic(...nums) {
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));

//?????? ES6
function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

//???????? ES6 ?????????? ???????? ???????????? ?????????????? ?????????? ???? ?????????? ????????????????
const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);

//???????????? ?????????????? ES6 ????????????????
var dateFields = [1970, 1, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

//?????? ES6 ?? ???????????????? ???????????? ?????????????? ???????????? ???????? ???? ?????????? ????????????????
var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);

//?????????? ?????????????? ?????? ?????? ?????????? ?? ???????????? ?? ???????????????? ?? ?????? ???????? ???????????? ?? ???????????? ?????? ???? ?????????? ???????????? ???? ????????????????. ?????? ?????? ?? ???? ES6 ?? ???????? ?????? ???????? ???????????????? ???????????? ???????? ???????????? ????????
let newArr = ['Three', 'Four'];
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);

//???? ???????????????? ?? ???????? ???????? ?????????????? ???????????????? ???????????? ???? ???????????? ???????????? ?????? ???????? ????????
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }

//?????? ?????? ?? ?????? ?????????? ?????????? ?????? ???????? ?????? ?????????????? ???????? ??????????????
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
//???????? ?????????????? ???????????????? ???? ?????????? ???? ???????? ?????? ???????? Object.assign ().


//???????? ???????????? ????????????
let nums = [3, 4, 5];
let all = [1, 2, ...nums, 6];
console.log(all[4]);


//????????????????
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

console.log(square.height);

//???? ?????????? ?????????? ?????? ?????????????? ?? ?????? ?????????? ?????????? ?????????? ??????????????
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

const square = new Square(5, 5);
const poster = new Square(2, 3);

console.log(square.height);

/** ?????????????? ???? ?????????? ???????? ?????????????? ???????????? ???????????? ???????? ???? ???????????? ???????????????? ??????.
 * ???????? ???? ???????? ???????? ?????????? ???????? ?????? ???? ???? ??????.
 */

class Point {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
    get X() { return this.x; }
    get Y() { return this.y; }
}

const Pnt = new Point(2, 4);

console.log(
    `Point A(${Pnt.X}, ${Pnt.Y})`
);

//Class Methods in ES6
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(5, 5);
console.log(square.area); // 25

//?????? ?????? ???? ?????????? ???? ?????????????? ?????????????? ?? ?????????? ???? ???????? ?????????????????? ???? ???????? ???????? ??????????. ???????????? ???? ?????????????? ?????????? ?????????????? ???????????? ?????????? ???????????? ???????????????? ???????? ??????????????????.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));
//?????? ?????? ?? ?????? ?????????????? ?????????? ?????????????? ?????????????? ???????????? ???????????????? ?????? ?????????? ?? ???????? ????????.


/** Class Methods in ES6
 * Average exam score
 * Add a static method average() to class Exam, so that the code in main work correctly.
 * You are making a program so that students are able to calculate their average of 3 exam scores.
 * The given program takes the scores of 3 exams as input and declares the Exams class.
 * Add a static method average() to class Exams, which will take the scores as parameters, and calculate and return the average score rounded to the nearest integer so that the code in main works correctly.
 * 
 * Sample Input
 * 74
 * 80
 * 68
 * 
 * Sample Output
 * 74
 * 
 * Recall Math.round() function to round the number with the floating point to the nearest integer.
 * 
 */
function main() {
    var exam1 = parseInt(readLine(), 10);
    var exam2 = parseInt(readLine(), 10);
    var exam3 = parseInt(readLine(), 10);

    console.log(Exams.average(exam1, exam2, exam3));

}
class Exams {
    //your code goes here
    static average(exam1, exam2, exam3) {
        const avg = (exam1 + exam2 + exam3) / 3;
        return Math.round(avg);
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(this.name + ' barcs.');
    }
}
let d = new Dog('Rex');
d.bark();

//Inheritance in ES6
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.
//???? ?????????? ?????????? ?? ?????? ?????????? ???? ?????? ???? ?????? ?????????????? ?? ?????? ???????????? ??????????.

//?????? ?????? ???????? ?????????? ?????????? ???? ?????????? ?????????????? ?? ???????? ?????????? ?????????????? super () ?????? ?????????????? ??????. ?????????? ?? ?????????????? ???????????? ???????????????? ?????????????? ???????????????? ?????? ????????????????.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // Super
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak();
// Rex makes a noise.
// Rex barks.
//???? ?????????? ?????????? ?? ?????? ?????????????? ?????????? ???????????? () ???????????? ?????????????????? ???????????????? ???????????? ???????????????? ??????????????.


/** 
 * Attack!
 * Inherit Gunner and Sniper classes from Unit class for your real-time strategy game with two shooter types.
 * In a real-time strategy video game there are 2 types of units: gunner and sniper.
 * The program you are given declares a standard Unit class. It has an attack() method, which displays ??essage "Attack!".
 * You need to inherit Gunner and Sniper classes from the Unit class, and add attack() method to each so that the given function calls work correctly: each method should call the attack() method of parent class Unit, and then output to the console its own corresponding message:
 * Gunner => "Using gun!"
 * Sniper = "Using sniper rifle!"
 * 
 * For example, gunner.attack() should output
 * Attack!
 * Using gun!
 * where "Attack!" is message form attack() method of parent class Unit, and "Using gun!" is its own message.
 * 
 * Use the super keyword to call the method of the parent class.
 */

class Unit {
    attack() {
        console.log("Attack!");
    }
}

//inherit this class from Unit
class Gunner extends Unit {

    attack() {
        //complete the function
        super.attack();
        console.log("Using gun!");
    }
}
//inherit this class from Unit
class Sniper extends Unit {
    attack() {
        //complete the function
        super.attack();
        console.log("Using sniper rifle!");
    }
}

let gunner = new Gunner();
let sniper = new Sniper();

//calls
gunner.attack();
sniper.attack();

//?????????????? ?????? Super ???????????????? ????????????
class Human {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Human {
    constructor(name, age) {
        super(name);
        this.age = age;
        console.log(
            this.name +
            `: ${this.age} of the year.`
        );
    }
}
let student = new Student('Bill', 23);


//ES6 Map
//https://t.me/c/1321293865/45846

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

//example
let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);

/** ES6 Map 
 * Employee map
 * Complete the program to output the list of employees in format shown in sample output.
 * Five employees at a company are stored in Map in the program you are given. Their names are set as keys and their positions as values. The company is hiring one more employee. The program should take the name and the position as inputs and store them in the existing map.
 * Complete the program to perform that operation and output to the console the list of employees in the format shown in the sample output.
 * 
 * Sample Input
 * Bob
 * Developer
 * 
 * Sample Output
 * Richard : Developer
 * Maria : SEO Specialist
 * Tom : Product Manager
 * David : Accountant
 * Sophia : HR Manager
 * Bob : Developer
 * 
 * The entries() method returns an Iterator of array[key, value] in the map for each element.
 * Don't forget to put spaces before and after the colon (:) in the output.
 */

function main() {
    var name = readLine();
    var position = readLine();
    let employees = new Map([
        ["Richard", "Developer"],
        ["Maria", "SEO Specialist"],
        ["Tom", "Product Manager"],
        ["David", "Accountant"],
        ["Sophia", "HR Manager"]
    ]);


    //add the new pair to the map
    employees.set(name, position);

    for (var i of employees.entries()) {
        //your code for the output
        console.log(i[0] + " : " + i[1]);
    }
}

//??????????
const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
    console.log('two');
} else {
    console.log(map.get('one'));
}

//ES6 Set
//A Set object can be used to hold unique values (no repetitions are allowed).
//A value in a set can be anything (objects and primitive values).
//The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values.
//The size property returns the number of distinct values in a set.
//https://t.me/CsharpAbdullahAlsalem/156

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
//______________________________________________
let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);

/** ES6 Set
 * Distinct values of the set
 * Write a code to output to the console the count of distinct values in the given set.
 * You are making a program for a sports store warehouse.
 * The warehouse currently has 7 types of sports equipment and plans to purchase more. The program you are given takes 3 new purchased item types as input.
 * let products = new Set(["dumbbells", "barbell", "t-shirt", "swim short", "gloves", "training apparatus", "goggle"]); 
 * Write a program to add the new items to the given set, then calculate and output to the console the count of item types in the warehouse.
 * 
 * Sample Input
 * barbell
 * gloves
 * bandage
 * 
 * Sample Output
 * 8
 * 
 * Explanation
 * Before the purchase, we already had a "barbell" and "gloves", but did not have a "bandage". So +1 to our item types: 7+1 = 8.
 * 
 * Now is the right time to use size property.
 */

function main() {

    let products = new Set([
        "dumbbells",
        "barbell",
        "t-shirt",
        "swim short",
        "gloves",
        "training apparatus",
        "goggle"
    ]);

    var count = 0;
    while (count < 3) {
        var itemType = readLine();
        //add the item to the set
        products.add(itemType);
        count++;
    }

    //calculate and output the count of item types
    console.log(products.size);
}

//??????????
let objSet = new Set();
objSet.add(1).add(2).add(3);
for (let v of objSet.values()) console.log(v);

//ES6 Promises - ???? ???????? ?????? ???????????? ?????? ??????????????
function asyncFunc(work) {
    return new Promise(function (resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function () {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") // Task 1
    .then(function (result) {
        console.log(result);
        return asyncFunc("Work 2"); // Task 2
    }, function (error) {
        console.log(error);
    })
    .then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
console.log("End");

//javascript-es6-promises
https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/
getSomeResult = () => {
    let result = confirm("Do you really want to leave this page?");
    alert(
        result
            ? "Thanks for visiting"
            : "Thanks for staying with us"
    );
    return result;
};

foo = () => {
    return new Promise((resolve, reject) => {
        let result = getSomeResult();
        console.log(result);
        result
            ? resolve('Success')
            : reject('Something went wrong')
    });
};

/* Taste:
"Then is the resolve defined in promise, and variable "result" is the one passed from the promise"
 
catch is the reject:*/
foo().then(result => {
    console.log(result) //Success
}).catch(result => {
    console.log(result) //Something went wrong
})

//Iterators & Generators
//First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.
//In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function).



let myIterableObj = {
    [Symbol.iterator]: function* () {
        yield 1; yield 2; yield 3;
    }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]


function* idMaker() {
    let index = 0;
    while (index < 6)
        yield index++;
}
var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// Try to add one more console.log, just like the above see what happens.


//The example below will show a useful case of how we can use generator functions and Symbol.iterators together.
const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function* () {
        for (let index of arr) {
            yield `${index}`;
        }
    }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
    .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);

/* Modules
// lib/math.js
export ???let sum = (x, y) => { return x + y; }

export ???let pi = 3.14


// app.j

import * ???as math from "lib/mat"
console.log(`2p = + ${math.sum(math.pi, math.pi);*/

/**
 * ES6 supports modules officially, however, some browsers are not supporting modules natively yet. So, we should use bundlers (builders) such as Webpack or Browserify to run our code.
 */
export const hit = (x, y, z) => {
    return x * y + z / 2;
}
export const degree = 50;
import * as calc from "util/calc";

calc.hit(1, 2, calc.degree);

//Built-in Methods

//Array Element Finding
//old
[4, 5, 1, 8, 2, 0].filter(function (x) {
    return x > 3;
})[0];

//New - The new syntax is cleaner and more robust
c = [4, 5, 1, 8, 2, 0].find(x => x > 5);
console.log(c);

//For Index
c = [4, 5, 1, 8, 2, 0].findIndex(x => x > 4);
console.log(c);

//Repeating Strings
//Old
console.log(Array(4 + 1).join("foo"));
//New - With the new syntax, it becomes:
console.log("foo".repeat(3));

//Searching Strings
//Old
console.log("SoloLearn".indexOf("Solo") === 0); // true
console.log("SoloLearn".indexOf("Solo") === (4 - "Solo".length)); // true
console.log("SoloLearn".indexOf("loLe") !== -1); // true
console.log("SoloLearn".indexOf("olo", 1) !== -1); // true
console.log("SoloLearn".indexOf("olo", 2) !== -1); // false
//New - ES6 has replaced this with a version that has cleaner and more simplified syntax
console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false

//??????????
const arr = ["3", "5", "8"];
console.log(
    arr.find(x => x == 8).repeat(2)
);

//Quiz

//1
const num = 5;

const calc = (x, y, z = num) => {

    return x + y + z;

}


//2
const arr1 = [1, 2, 3];

const arr2 = [5, 6, 7, 8];

let arr3 = [...arr1, 4, ...arr2];

//3
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
    console.log(rest.length);
}
func(...arr1);
func(...arr2);

//4
const square = num => num * num;
console.log(square(6) + 6);

//5
//Fill in the blanks to copy the user object to the newUser object by destructuring the name and age properties. Pass the value 9999 for the id property.
const user = { name: 'David', age: 28, id: 1234 };
let newUser = Object.assign({}, { name, age } = user, { id: 9999 });
console.log(newUser);

//6
/**Fill in the blanks to get the following output:
zero = 0
one = 1
 * 
 */
let myMap = new Map();
myMap.set('zero', 0);
myMap.set('one', 1);

for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

/** Words
 * You are making a text encryptor. It should take multiple words and output a combined version, where each word is separated by a dollar sign $.
 * For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
 * The given code declares a class named Add, with a constructor that takes one rest parameter.
 * Complete the code by adding a print() method to the class, which should generate the requested output.
 * Note, that the dollar sign is placed at the beginning and at the end of the output.
 */

class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print() {
        var _words = "";
        for (var i = 0; i < this.words.length; i++) {
            _words += "$" + this.words[i];
            if(i == this.words.length -1){
                _words += "$";
            }
        }
        console.log(_words);
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();