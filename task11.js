var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/maam");
var a = ("We are sorry. "  + input + " is not available in our bakery");
var found = false;
for(i = 0; i < A.length; i++) {
if (input === A[i]) {
    document.write(A[i] + " is available at index " + i + " in our bakery");
    found = true;
    break;
}
else {
 document.write(a);
    break;
    }
}