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
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var el = document.getElementsByTagName('a');
    el[0].href= 'http://www.sololearn.com';
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};