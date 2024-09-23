// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3. Print, [7, 9, 0]
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);

console.log(ans);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3. Print, [9, 0, -2]
let array = [7, 9, 0, -2];
let num = 3;
let answer = array.slice(array.length - num);

console.log(answer);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("please enter a string");

if (str.length == 0) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let string = "AtIfZAFar"; 
let idx = 3; 

if (string[idx] == string[idx].toLowerCase()) { 
    console.log("character is lowercase");
 } else { 
    console.log("character is not lowercase");
 }

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let strr = prompt ("please enter a string"); 
console.log(`original string = ${str}`); 
console.log(`string without spaces = ${str.trim()}`);

//     Qs6. Write a JavaScript program to check if an element exists in an array or not.
let ar = ["hello", "a", 23, 64, 99, -6]; 
let item = 64; 
if(ar.indexOf (item) != -1) { 
    console.log("element exists in array"); 
} else { 
    console.log("element doesn't exist in array");
}