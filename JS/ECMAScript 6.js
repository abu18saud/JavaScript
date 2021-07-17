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
var a = {x: 1, x: 2, x: 3, x: 4};
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

let newPerson = Object.assign({}, person, {name: 'Bob'});

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
total =  Object.assign({}, basic, advanced)

for(let ex in total) {
    console.log(total[ex])
};

//-------------------------
const obj1 = {
    a: 0,
    b: 2,
    c: 4
  };
  const obj2 = Object.assign({c: 5, d: 6}, obj1);
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

//تبديل القيم
let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4

//مثال لتبديل الأسماء
let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John);

//هنا نأخذ قيم المصفوفات ونضعها في متغيرات
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h);
console.log(s);

//يمكننا التخصيص بدون تصريح ، ولكن هناك بعض المتطلبات النحوية لذلك
let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b);
//تعد () التي تحتوي على فاصلة منقوطة (؛) في النهاية إلزامية عند التدمير بدون تصريح. ومع ذلك ، يمكنك أيضًا القيام بذلك على النحو التالي حيث لا تكون () مطلوبة

var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42

//أخيرًا يمكنك تعيين قيم افتراضية للمتغيرات ، في حالة عدم تحديد القيمة التي تم فك حزمها من الكائن.
var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

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

//دالة ليست واضحة
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

//دالة ليست واضحة
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

