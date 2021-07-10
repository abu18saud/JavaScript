/**جميع عناصر HTML هي كائنات. وكما نعلم كل كائن له خصائص وطرق. يحتوي كائن المستند على طرق تسمح لك بتحديد عنصر HTML المطلوب. هذه الطرق الثلاث هي الأكثر استخدامًا لاختيار عناصر HTML:
 */
//finds element by id
document.getElementById("id")

//finds elements by class name
document.getElementsByClassName("name")

//finds elements by tag name
document.getElementsByTagName("name")

/** Working with DOM
 * Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.
 * 
 */

function setText() {
    var a = document.getElementById("demo");
    var arr = a.childNodes;
    for (var x = 0; x < arr.length; x++) {
        arr[x].innerHTML = "new text";
    }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var el = document.getElementsByTagName('a');
    el[0].href = 'http://www.sololearn.com';
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};

//Creating Elements
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};

//Removing Elements
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
};

//Replacing Elements
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};

//Animations
var t = setInterval(move, 500);
// starting position
var pos = 0;
//our box element
var box = document.getElementById("box");

function move() {
    pos += 1;
    box.style.left = pos + "px"; //px = pixels
}

function move() {
    if (pos >= 150) {
        clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos + "px";
    }
}

//Final Code
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);

    function move() {
        if (pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos + 'px';
        }
    }
};


//Events
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};

//لتكبير النص بعد فقد التركيز عن العنصر
function change() {
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}

//Event Listeners
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
};
/**
 * Internet Explorer version 8 and lower do not support the addEventListener() and removeEventListener() methods. However, you can use the document.attachEvent() method to attach event handlers in Internet Explorer.
 */

//Event Propagation

//Capturing propagation
elem1.addEventListener("click", myFunction, true);

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

//Image Slider
var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/2.jpg',
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

//What will be the content of the paragraph after the user clicks on it twice?
//<p id='txt' onclick='test();'>20</p>
function test() {
    var x = document.getElementById('txt');
    var n = x.innerHTML;
    x.innerHTML = n / 2;
}

//Form Validation

/**
<form onsubmit="return validate()" method="post">
    Number: <input type="text" name="num1" id="num1" /><br />
    Repeat: <input type="text" name="num2" id="num2" /><br />
    <input type="submit" value="Submit" />
</form>
 */

function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}


