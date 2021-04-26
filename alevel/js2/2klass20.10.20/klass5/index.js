// let body = document.body;
// let newDiv = document.createElement('div')
// newDiv.innerText ='vbvbvbvbbvbv'
// // newDiv.innerHTML = '<div'
// body.appendChild(newDiv)

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"