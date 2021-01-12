var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
document.write("Sample array: " + arr1);
arr1 = arr1.filter((value,index,arr1)=> arr1.indexOf(value) == index);
document.write("<br/>Sample Output: " + arr1);