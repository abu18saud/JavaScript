var person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};
var x = person.age;
var y = person['age'];


document.write(x);
document.write(y);

var course = { name: "JS", lessons: 41 };
document.write(course.name.length);

/** Cuboid Volume
 * Complete the program to calculate and output the volume of the given cuboid.
 * Introducing Objects
 * The given class represents a cuboid (e.g. a rectangular prism) that contains the properties of length, width, and height.
 * Complete the program to calculate and output the volume of given cuboid to the console.
 * 
 * To calculate the volume of cuboid use length*width*height formula.
 */

function cuboidVolume() {
    var cuboid = {
        length: 25,
        width: 50,
        height: 200
    };

    //your code goes here
    console.log(cuboid.length * cuboid.width * cuboid.height);
}

//The Object Constructor
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age);
document.write(p2.name);

/**Landed!
 * Let’s help Bob to create status messages for flights.
 * Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!
 * Complete the given program by fixing the constructor, making a flight object, and assign it to given variable to correctly execute the corresponding message.
 * Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.
 * 
 * Sample Input
 * NGT 929
 * landed
 * 
 * Sample Output
 * Flight NGT 929 has landed
 * 
 * Use new keyword to create a new object using constructor.
 */
function landed() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();

    var flight1 = new Flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable

    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)

}

function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};

function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function(name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);
/** Calculating The Discount
 * Attention! Something is wrong - the method, which should execute the discount, is incomplete.
 * Adding Methods
 * A store manager needs a program to set discounts for products.
 * The program should take the product ID, price and discount as input and output the discounted price. However, the changePrice method, which should calculate the discount, is incomplete. Fix it!
 * 
 * Sample Input
 * LD1493
 * 1700
 * 15
 * 
 * Sample Output
 * LD1493 price: 1700
 * LD1493 new price: 1445
 * 
 * 
 * The first input is the product ID, the second is the price before discounting, and the third is discount percentage.
 * So after discounting the new price will be 1700-(0.15*1700) = 1445.
 */
function calculatingTheDiscount() {
    var prodID = readLine();
    var price = parseInt(readLine(), 10);
    var discount = parseInt(readLine(), 10);

    var prod1 = new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);

    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price = price - ((discount / 100) * price);
    }
}