// let inputTask = "Task 1";

// string
// numbers
//arrays
//objects

/*----------------------------<<<<<<<<<>>>>>>>>>>>--------*/

//string

let str = "SOME STRING";
console.log(str);  // SOME STRING
//lower case
str = str.toLowerCase();
console.log(str); // some string

//upper case

str = str.toUpperCase();
console.log(str); // SOME STRING

//index character

console.log(str.charAt(1));   // O
console.log(str.charAt(5));   // S
console.log(str.charAt(7));   // R

//position finder

console.log(str.indexOf("M"));  // 2
console.log(str.indexOf("T"));  // 6

// last poistion
console.log(str.lastIndexOf("S")); // 5

// unmatched length
console.log(str.charAt(15));  // str length is 11 when we give unmatched length the console shows empty

// unmatched character
console.log(str.indexOf("r")); // o/p shows -1 which means it is not available

// verify the character with position
console.log(str.indexOf("R", 8));  // o/p shows 7. It checks if 8th character is R; if yes returns position else -1 
console.log(str.indexOf("R", 7));  // o/p shows 7. It checks if 8th character is R; if yes returns position else -1 

// str += "example"
console.log(str += " example"); //SOME STRING example

//String concatenation
str = str.concat(" example2");
console.log(str); // SOME STring example example2

//substring...
console.log(str.substr(0, 4)); // SOME    it display from 0 to 3
console.log(str.substr(0, 7)); // SOME ST it displays from 0 to 6

// substring with start and end
console.log(str.substring(0, 4)); // SOME
console.log(str.substring(0, 7)); // SOME ST

//taking string
console.log(str.substr(5,9)); // STRING ex

let strNum = "10";
console.log(strNum); // 10
console.log(strNum+10); // 10
console.log(parseInt(strNum)); // 10
console.log(parseInt(strNum)+10); // 20

/*----------------------------<<<<<<<<<>>>>>>>>>>>--------*/


//Numbers

let num = 10;

console.log(num); // 10

//converts to string
console.log(num + ""); // converts as string
console.log(num.toString()); // converts as string

let num1 = 17;

console.log( num1 / 10); // 1.7

console.log( Math.round(num1 / 10)); // 2

let value = num1 % 10;
console.log(parseInt(value)); // 7
console.log(Math.floor(num1 / 10)); // 1


/*----------------------------<<<<<<<<<>>>>>>>>>>>--------*/

// Arrays



let arr = [1,2];
arr.push(3); // [1,2,3]
arr.push(4); // [1,2,3,4]
arr.push(5); // [1,2,3,4,5]
console.log(arr); //(5) [1, 2, 3, 4, 5]

let len = arr.length;
console.log(len); // 5

arr.pop(); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]

console.log(arr); //(3) [1, 2, 3]

let len1 = arr.length;
console.log(len1); // 3

arr.unshift(0);
console.log(arr); // (4) [0, 1, 2, 3]

arr.shift();
console.log(arr) // (3) [1, 2, 3]
arr.shift();
console.log(arr) // (2) [2, 3]

// indexOf

arr.push(2);
arr.push(5);
arr.push(6);
arr.push(3);
console.log(arr) //(6) [2, 3, 2, 5, 6, 3]
console.log(arr.indexOf(2)); // 0
console.log(arr.indexOf(6)); // 4
console.log(arr.lastIndexOf(3)); // 5
console.log(arr.lastIndexOf(5)); // 3

let array = [1, 2, 5, 3, 6, 8, 2, 9, 3, 4, 7];
console.log(array) //(11) [1, 2, 5, 3, 6, 8, 2, 9, 3, 4, 7]

array.sort();
console.log(array); // (11) [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9]

array.reverse();
console.log(array); // (11) [9, 8, 7, 6, 5, 4, 3, 3, 2, 2, 1]

let array1 = [1, 2, 5, 3, 6, 2, 9, 3, 4, 7];
array1.reverse();
console.log(array1); //(11) [7, 4, 3, 9, 2, 6, 3, 5, 2, 1]

console.log(array1.includes(4)) // true  it has vale 4 in array
console.log(array1.includes(8)) // false it doesnot have 8 in array


/*----------------------------<<<<<<<<<>>>>>>>>>>>--------*/

//  Objects

let obj = {
        name: "Rahul",
        age: 25,
        gender: "Male"
};

function consoleObj(parameter) {
    console.log(parameter);
}

consoleObj(); // displays key value pair -> {name: 'Rahul', age: 25, gender: 'Male'}

console.log(Object.keys(obj)); // displays the keys of obj -> (3) ['name', 'age', 'gender']

const keys = Object.keys(obj);

consoleObj(keys);  // (3) ['name', 'age', 'gender']

const length = keys.length;

consoleObj(length); // 3 -> length of keys

const values = Object.values(obj);

consoleObj(values); // displays the values of obj -> (3) ['Rahul', 25, 'Male']

const pair = Object.entries(obj);

consoleObj(pair); /* (3) [Array(2), Array(2), Array(2)]
                        0: (2) ['name', 'Rahul']
                        1: (2) ['age', 25]
                        2: (2) ['gender', 'Male']
                         the key value pair is converted as arrays
                        */
obj.rollNo = 57;
consoleObj(obj); // {name: 'Rahul', age: 25, gender: 'Male', rollNo: 57} -> roll num added

Object.preventExtensions(obj); // used for stopping addition of new key value to obj but can modify existing

obj.state = "Tamilnadu"
obj.age = 24

consoleObj(obj); // {name: 'Rahul', age: 24, gender: 'Male', rollNo: 57} -> state not added and age modified

Object.seal(obj); // Cannot Add & delete but can modify

Object.freeze(obj); // modification cannot be done to the object as well as add & delete

// Global pre defined functions....
// Date
console.log(new Date());
console.log(new Date().getDate())
console.log(new Date().getMonth())
console.log(new Date().getSeconds())

console.log(new Date().toString())
console.log(new Date().toDateString())

// Math
console.log(Math.random())
console.log(Math.min(17, 57, 69, 12, 50))

// isNaN()

let fn = "1q01qq256";
let sn = "20"

const firstNum = isNaN(fn);  // true
const  secNum = isNaN(sn);  // false

if(firstNum || secNum ) { // if condition true
    console.log("Enter Valid Number") 
}
else {
    fn = parseInt(fn);
    sn = parseInt(sn);
    console.log( fn+sn);
}
// output is Enter Valid Number

let fn1 = "10";
let sn1 = "20"

const firstNum1 = isNaN(fn1);  // false
const  secNum1 = isNaN(sn1);  // false

if(firstNum1 || secNum1 ) { // if condition false
    console.log("Enter Valid Number") 
}
else { // else executes
    fn1 = parseInt(fn1);
    sn1 = parseInt(sn1);
    console.log( fn1+sn1);
}
// output is 30

/*----------------------------<<<<<<<<<>>>>>>>>>>>--------*/
