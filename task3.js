var color = ["Red ","Green ","Yellow "];
document.write(color);
//A.
var updatedA = color.unshift(prompt("Please select first color "));
document.write("<br/>A. = " + color);
//B.
var updatedA = color.push(prompt("Please select last color "));
document.write("<br/>B. = " + color);
//C.
color.unshift("Pink ","Blue ");
document.write("<br/>C. = " + color);
//D.
color.shift();
document.write("<br/>D. = " + color);
//E.
color.pop();
document.write("<br/>E. = " + color);

//F.
var userInput = parseInt(prompt("Add Index at which you want add colour?"));
var updateF = prompt("Add a color name? ");
color.splice(userInput, 0, updateF);
document.write("<br/>F. = " + color);

//G.
var del = parseInt(prompt("Which Index colour you want to delet? "));
var numDel = parseInt(prompt("How many colours you want to delet from selected Index?"));
color.splice(del, numDel,);
document.write("<br/>G. = " + color);