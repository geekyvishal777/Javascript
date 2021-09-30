//! if else loop

// the if statement executes a statement if a specified condition is truthy
// if the condition is falsy, another statement is exeuted

// if raining = raincoat
// else no raincoat
// var tomr = 'sunny';

// if (tomr == 'rain'){
//     console.log('take a raincoat');
// }
// else{
//     console.log('no need to take raincoat');
// }

// var vishal = 29;

// if (vishal >= 26){
//     console.log("allow him to marry and have a life");
// }else{
//     console.log("donot allow him to have a baby");
// }

// CHALLENGE TIME (TO FIND THE YEAR IS A LEAP YEAR OR NOT?)

// var year = 2016;
// debugger;

// if ( year % 4 === 0 ){
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("the year " + year + " is a leap year");
//         }else{
//             console.log("the year " + year + " is not a leap year");
//         }
//     }else{
//         console.log("the year " + year + " is a leap year");
//     }

// }else{
//     console.log("the year " + year + " is not a leap year");
// }

//! TRUTHY AND FALSY VALUES IN JAVASCRIPT (THERE ARE 5)
// 1> 0
// 2> " "
// 3> undefined
// 4> null
// 5> NaN
// 6> false

// if (score = 0){
//     console.log("yeah we won the match");
// }else{
//     console.log("yeah we loss the match");
// }

//! CONDITONAL TERINARY OPERATOR
// the conditonal terinary operator is the only js operator that takes theree operands

// var age = 22;
// if (age >= 18) {
//     console.log("you are eligible to vote");
// } else {
//     console.log('you are not eligible to vote');
// }

// var age = 19;
// console.log((age >= 18) ? "you can vote" : "you cant vote");

// SWITCH STATEMENT
// Evaluate an expression, matching the expression's value to a case clause, and executes statement associated
// with that case.

// BREAK
// IT TERMINATES THE CURRENT LOOP, switch or label statement and transfers program control to the
// statement following the terminated statement

// 1st without break statement
// Find the area of the parts?

// var area = 'rectangle';
// var PI = 3.142, r = 3, l=3, b=4;

// if (area == 'circle') {
//         console.log("the area of the circle " + PI*r**2);
// } else if (area == 'triangle') {
//         console.log("the area of the triangle " + (l*b)/2);
// }else if (area == 'rectangle') {
//         console.log("the area of the rectangle " + l*b);
// }else{
//         console.log("please enter valid data");
// }

// var area = 'rectangle';
// var PI = 3.142, r = 3, l=3, b=4;

// switch(area) {
//           case 'circle':
//                 console.log("the area of the circle " + PI*r**2);
//         break;

//         case 'triangle':
//                 console.log("the area of the triangle " + (l*b)/2);
//         break;

//         case 'rectangle':
//                 console.log("the area of the rectangle " + l*b);
//         break;
//         default:
//                 console.log('please enter the valid output');
// }

//! WHILE LOOP

// the while loop statement creates a loop that executes a specified statement
// as long as the test condition evaluates true

// var num = 0;
// while (num <= 10) {
// console.log(num);
// num++;
// }

// var num = 20;
// while (num <= 10) {
// console.log(num);
// num++;
// }

// DO WHILE LOOP

// var num = 20;

// do {
// console.log(num);
// num++;
// }while (num <= 10)

//! FOR LOOP

// for(var num = 0; num <= 10; num++ ){
//         console.log(num);
// }

// for(var num = 1; num <= 10; num++ ){
// var tableOf =8;
// console.log(tableOf + " * " + num + " = " +  (tableOf*num)  );
// }

//! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//! FUNTION AS A WHOLE

// FUCION DEFINATION
// CALLING A FUNCTION
// FUNCTION PARAMETER
// FUNCTION ARGUEMENT
// FUNCTION EXPRESSION
// RETURN KEYWORD
// ANNONYMOUS FUNCTION

//! FUNCTIONS IN JAVASCRIP

// A JS FUNCTION IS A BLOCK OF CODE DESIGNED TO PEFORM A PERTICULAR TASK

// fuction defination : before using a funcion we need to define it

// a function defination (also called as function declaration, function statement)
// consist of the function keyword, followed by

// the name of the function
// a list of parameters to the function, enclosed in parameters and seperated by commas.
// the js statements that define the function, enclosed in curly brackets, {...}

//! CALLING THE Function

// Defining the function does execute it.
// A javascript function is executed when "something" invokes it (call it)

// function sum(){
//         var a = 4, b = 5;
//         var total = a+b;
//         console.log(total);
// }
// sum();

//! Difference between Function parameters and Fuction Arguements

// Function parameters are the names listed in the fuctions defination
// Fuction Arguements are the real values passed to the fuctions

// function sum(a, b){
//         var total = a+b;
//         console.log(total);
// }
// sum(20,50);
// sum(40,50);

//! Function EXPRESSION

// Function EXPRESSION MEANS SIMPLY CREATE A FUNCTION AND PUT INTO A VARIABLE

// function sum(a, b){
//         var total = a+b;
//         console.log(total);
// }
// var funExp = sum(20,50);
// funExp;

//! RETURN KEYWORD

// WHEN JS REACHES A RETURN STATEMENT THE FUNCTION WILL STOP EXECUTING FUCTION OFTEN COMPUTE A RETURN VALUE
// THE RETURN VALUE IS 'RETURNED' BACK TO THE 'CALLER'

// function sum(a,b){
// return total = a+b;
// }
// var funExp = sum(62,55);
// console.log("the sum of two no is " + funExp);

//! ANNONYMOUS Function

// FUNCTIONS WITHOUT NAMES ARE CALLED ANNONYMOUS FUNCTIONS (SUM)

// var funExp = function(a,b){
// return total = a+b;
// }
// console.log(funExp(5,55));

// var funExp = function(a,b){
//  return total = a+b;
// }
// var sum = funExp(5,55);
// console.log("the sum of two no is " + sum);

// var funExp = function(a,b){
//         return total = a+b;
//        }
//        var sum1 = funExp(5,55);
//        var sum2 = funExp(20,55);

//        console.log(sum1 > sum2);

// function multi(a,b) {
// var a = 10, b = 15;
// return total = a+b;
// }
// var funExp = multi(20,55);
// console.log("the return value will be "+ funExp);

// var vishal = function (a,b) {
// return total = a+b;
// }

// var sum1 = vishal(20,66);
// console.log(sum1);

//! ***************************  Javascript (ecmascript) - 2016 ########################

// 1> Diff between VAR , LET AND CONST
// 2> Template litarals (strings)
// 3> Default arguements
// 4> Rest operators
// 5> Destructuring
// 6> Object Proprties
// 7> Arrow function
// 8> Spread Operator

// function bioData() {
//         var firstName = "vishal";
//         console.log(firstName);

//         if(true){
//           var lastName = "mudhale";
//           console.log("the inner " + lastName);
//           console.log("the inner " + firstName);
//         }
//           console.log(lastName);
// }
// bioData();

// function bioData() {
//         let firstName = "vishal";
//         console.log(firstName);

//         if(true){
//           let lastName = "mudhale";
//           console.log("the inner " + lastName);
//           console.log("the inner " + firstName);
//         }
//           console.log(lastName);
// }
// bioData();

//! #####################  TEMPLATE STRING %%%%%%%%%%%%%%%%%%%%

// for(var num = 0; num <= 10; num++ ){
//         console.log(num);
// }

// for(var num = 1; num <= 10; num++ ){
// var tableOf = 12;
// // console.log(tableOf + " * " + num + " = " +  (tableOf*num)  );
// console.log(`${tableOf} * ${num}  =  ${tableOf * num}` );
// }

//! #####################  default Arguement or parameter ************************

// DEFAULT FUNCTION PARAMETERS ALLOW NAMED PARAMETERS TO BE INITIATED WITH DEFAULT VALUES
// IF NO VALUE OR UNDEFIEND IS PASSED

// function mult(a, b=4) {
//         return a*b;
// }
// console.log(mult(3));

//!       %%%%%%%%%%%%%%%%%%%%%%%%%  FAT ARROW FUNCTION     (((((((((((((((())))))))))))))))

//? Traditional function

// console.log(sum());

// function sum(){
//         let a = 4; b = 5;
//         let sum = a+b;
//         return `the sum of two numnbers is ${sum}`
// }

//? Fat arrow fuction?\

// const sum = () =>  {
//         let a = 4; b = 5;
//         let sum = a+b;
//         return `the sum of two numnbers is ${sum}`;
// }
// console.log(sum());

//? simplifieng the fat arrow function

// const sum = () => { return `the sum of two numbers is ${(a=5)+(b=10)}`}
// console.log(sum());

//! ######################   INTRODUCTION TO ARRAYS &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// when you feel like storing multiple values(data types) in one variable then instead of var, we will use arrey

// in js we have an arrey class and arreys are the prototype of this class

//? WHAT WILL WE LEARN ARRAYS

// 1>TRAVERSAL OF AN Array
// 2>SEARCHING AND FILTER IN AN ARRAY
// 3>HOW TO SORT AND COMPARE AN ARRAY
// 4>HOW TO INSERT, ADD, REPLACE, AND DELETER IN ARRAY(CRUD)
// 5>Map(), REDUCE() FILTER()

//! ####################//  1>TRAVERSAL OF AN Array  &&&&&&&&&&&&&&&&&&&&&&&&

// NAVIGATE THROUGH AN ARRAY

// IF YOU WANT TO GET THE SINGLE DATA AT A TIME AND ALSO

// IF YOU WANT TO CHANGE THE DATA

// var myFriends = ["vishal", "rakesh", "Akash", "mallu"];

// console.log(myFriends[2]);

// IF YOU WANT TO CHECK THE LENGHT OF ELEMENTS OF AN ARRAY

// console.log(myFriends.length);                           // to get the total lenghth
// console.log(myFriends[myFriends.length-1]);              // to get the last elemtnt

//! ###################### For in LOOP and for OF loop with comaring For loop ******************

// we use loops to navigate

// var myFriends = ["vishal", "rakesh", "Akash", "mallu"];

// for (var i=0; i<myFriends.length; i++){
//         console.log(myFriends[i]);
// }

// var myFriends = ["vishal", "rakesh", "Akash", "mallu"];

// for(let elements in myFriends){             it shows the index number
// console.log(elements);
// }

// for(let elements of myFriends){
// console.log(elements);                  it shows the value or data
// }

//! ###################### For Each LOOP ******************

// Calls a function for each elements in th arrey
// Array.prototype.forEach()
// var myFriends = ["vishal", "rakesh", "Akash", "mallu"];

// myFriends.forEach(function(element,index,array){
//         console.log(element + " index : " + index + " " + array);
// });

// myFriends.forEach((element,index,array) => {
//         console.log(element + " index : " + index + " " + array);
// });

//! %%%%%%%%%%%%%%%// 2>SEARCHING AND FILTER IN AN ARRAY ))))))))))))))))))))))))))))))))))

// Array.prototype.indexOf()

// Returns the first (least) index of an element within the array equal
// to an element or -1, if none is found, it search the element from the "0th"  index number

// var myFriends = ["vishal", "rakesh", "Akash", "mallu","vishalmudhale", "krishna", "Akash"];
// console.log(myFriends.indexOf("Akash",3));

// Array.prototype.lastIndexOf()

// Returns the Last (greatest) index of an element within the array equal
// to an element or -1, if none is found, it search the element from the "Last"  index number

// var myFriends = ["vishal", "rakesh", "Akash", "mallu","vishalmudhale", "krishna", "Akash"];
// console.log(myFriends.lastIndexOf("Akash",3));

//! %%%%%%%%%%%%%%%%%%%%%%  Incledes in an Array (((((((((((((((((((((((())))))))))))))))))))))))

// Determine whether  the array contain the value,
// returning true or false as appropriate
// Array.prototype.includes()

// var myFriends = ["vishal", "rakesh", "Akash", "mallu","vishalmudhale", "krishna", "Akash"];
// console.log(myFriends.includes("Akash"));

//!        $%^&&^%$$$$%^%$%    Array Find &&&&&&&&&&&&&&&&&&&&&

// Returns the Found Element inthe array, if some Element in the array
// satisfies the testing function, or 'undefined' if not found
// only problem is that it returns the only one element

// const prices = [200, 300, 400, 500,600, 700,800, 900,250, 350]

// const findElem = prices.find((currVal) => {
//         return currVal < 400;
// });

// console.log(findElem);

// console.log( prices.find((currVal) => currVal < 400));

// Array find index

// Returns the found index inthe array, if an element inthe array satisfies the
// testing function, or '-1' if not found

//! %%%%%%%%%%%%%%%%%%%%%%  Filter in an Array (((((((((((((((((((((((())))))))))))))))))))))))

// Returns a new array containing all the elements of the calling array
// for which providing filtaring function
//  if you enter higer value than Or not containig in the array the output will be
//  an "EMPTY ARRY []"

// const prices = [200, 300, 400, 500,600, 700,800, 900,250, 350 ]

// const newPriceTag = prices.filter((elem, index) => {
//         return elem < 400;
// })

// console.log(newPriceTag);

//!       $$$$$##############//   3>HOW TO SORT AND COMPARE AN ARRAY &&&&&&&&&&&&&&&&&&&

// Array.prototype.sort()

// The sort method sorts the elements in an array in place and return the sorted array, the default sort order
// is ascending, buillt upon covering the elements into strings
// them comparing their sequence of UTF-16 code units values

// const months = [ "march", "jan", "Feb", "Dec", "Nov"];

// console.log(months.sort());

// const array1 = [ 1, 30, 4, 21, 100000, 99];

// console.log(array1.sort());

// However if numbers are sorted as strings,
// "25" is bigger then "100", because of "2" is bigger then "1"

// because of this sort() method produces the incorrect results when sorting the numbers

//! ******************** */ 4>HOW TO INSERT, ADD, REPLACE, AND DELETER IN ARRAY(CRUD) &&&&&&&&&&&&&&&&&&&&

// Array.prototype.push()

// The push() method adds one or more elements to the end of an array and
// returns the new lenght of the array

// const animals = ["pigs", "goats", "sheep"];

// animals.push("chickens");
// console.log(animals);

// const count = animals.push("chickens");
// console.log(count);

// Array.prototype.unshift()

// The unshift() method adds one or more elements to the biginning of an array and
// returns the new lenght of the array

// const animals = ["pigs", "goats", "sheep"];

// animals.unshift("chickens");
// console.log(animals);

// 2nd example (placing the elements according to us)

// const number = [1,2,3,5];

// number.unshift(4,6);
// console.log(number);

// Array.prototype.pop()

// the pop element removes the last element from an array and return the element
// this method changes the lenght of an array

// const plants = [ "brocli", "caulicflower", "kake", "tomato", "cabbage"];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift()

// the pop element removes the first element from an array and return the element
// this method changes the lenght of an array

// const plants = [ "brocli", "caulicflower", "kake", "tomato", "cabbage"];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

//! $$$$$$$$$$$$$$$$$$$$$$$$$$$ CHALLENGE TIME ARRAY ********************************

// Array.prototype.slice()
// Adds and/or removes element from an Array

// 1: Add Dec at the end of an Array?
// 2: what is the return value of the splice method?
// 3: update march to March update?
// 4: Delete june from an Array?

// 1: Add Dec at the end of an Array?

// const months = [ "Jan", "march", "April", "June", "July" ]

//    sol(1)
// const newMonth = months.splice(5,0, "Dec");
// console.log(months);

//    sol(2)
// const newMonth = months.splice(months.length,0, "Dec");
// console.log(months);

// 2: what is the return value of the splice method?

// console.log(newMonth);
// it shows the deleted array

// 3: update march to March update?

// const months = [ "Jan", "march", "April", "June", "July" ]

// const updateMonth = months.splice(1,1, "March")
// console.log(months);

// const indexOfMonth = months.indexOf("march");

// if (indexOfMonth != -1) {
//         const updateMonth = months.splice(indexOfMonth,1, "March")
//         console.log(months);
// } else {
//       console.log('data not found');
// };

// 4: Delete June from an Array?

// const months = [ "Jan", "march", "April", "June", "July" ]

// const indexOfMonth = months.indexOf("June");

// if (indexOfMonth != -1) {
//         const updateMonth = months.splice(indexOfMonth,1)
//         console.log(months);          // retun the output{remaining} array
//         console.log(updateMonth);     // retun the deleted array

// } else {
//       console.log('data not found');
// };

// by using Infinity we can delete the entire data after the selected element

// const indexOfMonth = months.indexOf("April");

// if (indexOfMonth != -1) {
//         const updateMonth = months.splice(indexOfMonth,Infinity)
//         console.log(months);          // retun the output{remaining} array
//         console.log(updateMonth);     // retun the deleted array

// } else {
//       console.log('data not found');
// };

//! ########################// 5>Map(), REDUCE() FILTER()%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Array.prototype.map();

// let newArray = arr.map(callback(currentValue[, index[, Array]]) {
//         return element for newArray, after executing something
// }[, thisArg]);

// return a new Array containing the results of calling a function
// on every Element inthis Array (containing true or false)

// const array1 = [1, 4, 9, 16, 25];
// num >9
// let newArr = array1.map((currEle, index, arr) =>{
//         return currEle > 9;
// });
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currEle, index, arr) =>{
// return `index no = ${index} and the value is ${currEle} belong to the ${arr}`
// });
// console.log(array1);
// console.log(newArr);

//! Differnce between the map and For each

// Map return the new array without mutating the original array

// Challenge time

// find the sqare root of the all each elements in the array

// let arr = [25,36,49,64,81];

// let arrSq = arr.map((currEle) => {
//         return Math.sqrt(currEle);
// })
// console.log(arrSq);

// multiply each Element by 2 and return only those Element which are greater than 10?

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((currEle) => {
//         return  currEle*2;
// }).filter((currEle) => {
//         return currEle > 10
// })
// console.log(arr2);

// or

// let arr2 = arr.map((currEle) => currEle*2 ).filter((currEle) => currEle > 10);
// console.log(arr2);

//! ADAVNCED BY USING REDUCE/

// let arr2 = arr.map((currEle) => currEle*2 ).filter((currEle) => currEle > 10).reduce((Accumulator,currEle) => Accumulator += currEle );
// console.log(arr2);

//? ################## Reduce method *********************

// flatten an Array means to convert  the 3d or 2d Array into a single dimesional array

// the reduce() method exeecutes a reducer function (that will prodvide)
// on each Element of the Array, resulting in single output value

// the reduc function takes four arguements

// Accumulator
// Current value
// Current index
// source Array

// let arr = [5,6,2];

// let sum = arr.reduce((Accumulator, currEle, index, arr) => {
//         return Accumulator += currEle
// })
// console.log(sum);

// to add additoional value (to add the marks shhet number 7)

// let arr = [5,6,2];

// let sum = arr.reduce((Accumulator, currEle, index, arr) => {
//         return Accumulator += currEle;
// },7)
// console.log(sum);

//!   How to flat an array by usin reduce

// flatten an Array means to convert  the 3d or 2d Array into a single dimesional array

// const arr = [
//         ["zone_1","zone_2"],
//         ["zone_3","zone_4"],
//         ["zone_5","zone_6"],
//         ["zone_7",["zone_7","zone_8"],],
//         ];

// let flatArr = arr.reduce((acc, currEle) => {
//         return acc.concat(currEle);
// })
// console.log(flatArr);

//! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    STRINGS  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ESCAPE CAHARECTER
// FINDING A STRING IN A STRING
// SEARCHING A STRING IN A STRING
// EXCTRACTING STRING PARTS
// REPLACING STRING CONTENT
// EXCTRACTING STRING CAHARECTER
// OTHER USEFUL METHODS

// javascript strings is a zero or more charecters written inside quotes

// Js strings are used for storing and maupulating the text
// you can use single or double quotes

// strings can be created primitive
// from string litarals, or an objects, using the strings() constructor

// let myName = "vishal mudhale";
// let myLast = 'mudhale';

// console.log(myName);
// console.log(myLast);

//! // creaing string using by "STRING CONSTRUCTOR"

// let lName = new String("kumar");
// console.log(lName);

//! $$$$$$$$$$$$$//    how to Find lenght of a String ********((((()))))
// String.prototype.length
// Reflect the length of the string

// let myName = "vinod kumar";
// console.log(myName.length);

//! $$$$$$$$$$$$$//    Escape charecter(\)    ********((((()))))

// let sentence = "india is the "largest" country in the world"

// correct will be (syntax error will be removed)

// let sentence = "india is the \"largest\" country in the world";
// console.log(sentence);

// you can also use alternate quotes to dont mess with

// let sentence = "india is the 'largest' country in the world";
// console.log(sentence);

//! $$$$$$$$$$$$$//   Finding String in a string    ********((((()))))

// String.prototype.indexOf(searhValue [, fromIndex])

// the indexOf() method return the index of (positin of )
// the first occurance of a specified text in a String

// const myBiodata = "I am the Vishal mudahale";
// console.log(myBiodata.indexOf("am"));

// to find the other then forst Element

// const myBiodata = "I am the Vishal mudahale";
// console.log(myBiodata.indexOf("a",3));

// JS counts position from zero
// 0 is the first position in a string, 1 is the second, 2 is the third
// if it does not find the data than it will return "-1" andit is case sensitive

// String.prototype.lastIndexOf(searhValue [, fromIndex])
// return the index within the calling string object of the last occarance of
// searchValue, or -1 if not found

// const myBiodata = "I am the Vishal mudahale";
// console.log(myBiodata.lastIndexOf("a", 2));

//! $$$$$$$$$$$$$// Searching for String in a string    ********((((()))))

// String.prototype.search(RegExp)

// the search method searches a string for a specified value
// and return the position of match "(-1)" i fnot found

// the  search method cant take a second start position arguement (diff between search and indexof)

// const myBiodata = "I am new vishal mudhale";
// let sData = myBiodata.search("vishal");
// console.log(sData);

//! $$$$$$$$$$$$$// Extracting string Parts    ********((((()))))

// there are theree methods for extracting the strings

// slice(start, end)
// substing(start, end)
// substr(start, end)

// the slice method

// the slice method exracts a part of the string and return the extracted part
// in a new string

// this method takes 2 parameters the start positon and end position (end not included)

// let str = "Apple, Banana, Kiwi";

// let res = str.slice(0,4);

// let res = str.slice(7,-2)
// console.log(res);

// Challenge time

// Display only 280 cahrecters of a string like the one used in the twitter?

// let tweet = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The pas print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De";

// let myTweet = tweet.slice(0,280);
// console.log(myTweet.length);

// console.log(myTweet);
// console.log(tweet.length);

// the substring() method

// substring() is similar to slice()
// the differenc is that substring() cant except "Negetve Indexes"

// let str = "Apple, Banana, Kiwi";

// let sub = str.substr(0,4);
// console.log(sub);

// if we get the negetive value than the charecters are counted from 0th position

// the difference is that the second parameter specifies the length of the extracted part

// let sub = str.substr(-4);
// console.log(sub);

//! $$$$$$$$$$$$$// Replacing string content   ********((((()))))

// String.prototype.replace(searchFor, replaceWith)

// the replace method replaces a specified value with another value in a string

// let myBiodata = "i am vishal kumar mudhale rakesh";

// let replaceData = myBiodata.replace("rakesh", "akash")
// console.log(replaceData);

// Points to remember

// 1> the replace method does not change the String
//      it is called on it returens a new String
// 2> by default the replace() method replaces itself
//      the first match
// 3> by default the replace() method Case sensitive
// //      writng VISHAL (wity upper case doesnot work)

//? Extracting string charecters

// there are there 3 methods for extracting string charecters

// charAt(position)
// charCodeAt(position)
// property access []

// charAt() method ************

// the charAt() method returens the charecter at the specified index (position) in a string

// let str = "Hello world";
// console.log(str.charAt(4));

//! charCodeAt() method ************

// the charCodeAt() method returens the unicode at the specified index (position) in a string
// the method return a UTF-16  code
// (an intiger between 0 and 65535)

// the unicode standard provides a unique Number for every charecter, no matter the
// platform device application or language UTF-8 is a popular unicode encoding which has 88 bit code units

// let str = "Hello world";
// console.log(str.charCodeAt(0));

// Challenge Time

// Return the unicode of the last charecter in the string

// let str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar));

//  Property Acces

// ECMASCRIPT 5 (2009) ALLOWS PROPERTY ACCESS []

// var str ="HELLO WORLD";
// console.log(str[0]);

//! OTHER USEFULL METHODS

// upper case and  toLowerCase

// var str ="HELLO WORLD";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// the concat() method

// concat() joins two or more strings

// let fName = "vishal";
// let lName = "mudhale";

// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// we used to the concatination by using (+)  and ``(backtick)

// console.log(fName + lName);
// console.log(`${fName} ${lName}`);

//! Trim method (very usefull in validating the form validation)

// it removes the white spaces from both sides of the string

// to remove the unnecessary spaces used while writing the mail or messsages we use trim

// var str = "                 Hello World!"
// console.log(str.trim());

//! SPLIT() METHOD  (very imprtant)

// converting string to an Array
// a string can be converted to an Array by using the split() method

// var txt = "a, b, c, d, e";      String
// console.log(txt.split(","));    Split on commas
// console.log(txt.split(" "));    Split on Spaces
// console.log(txt.split("|"));    Split on Pipe

//! 8th section Date and Time in Javascript

// what do we see
//         Date mathods(get and set)
//         Time mathods(get and set)

//? Date mathods(get and set)

// JAVASCRIPT date Object represent a single moment in time in a platform-independent format
// Date object contain a number that represent milliseconds since "1 january 1970 UTC"

// creating date Objects

// there ara 4 ways you can create

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// it takses 7 arguments
// new Date(milliseconds)
// we cannot avoid month section
// new Date(date String)

//? new Date()
// Date Objects are created with the new Date() constructor

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());       time as numbers        25/02/2021, 1:25:01 PM
// console.log(new Date().toString());             time as with text date wed sep 11 2021 13:25:01 GMT+0530

//? Date.now()
// return the numaric value currusponding to the current time the number of
// milliseconds elapsed since jan 1, 1970 00:00:00 UTC

// console.log(Date.now());

//? new Date(year, month, ....) (very imprtant while setting the dates for invitation)

//  7 Numbers specify (year, month, day, hours, minutes, seconds, milliseconds) in the same order

//  note - JAVASCRIPTS MONTS COUNTS FROM 0 TO 11 (january is 0)

// var d = new Date(2021, 1, 26, 11, 23, 52, 0);
// console.log(d.toLocaleString());

//? new Date(dateString)

// new Date(dateString) creates a new Date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d);
// console.log(d.toLocaleString());   very good

//?   new Date(milliseconds)

// new Date(milliseconds)   creates a new date object as zero time plus milliseconds

// var d = new Date(0);                 get the 1970 date
// var d = new Date(1614280430168);     get the currusponding date 2/26/2021. 12:43:50 AM

// var d = new Date(86400000*2);        get the tomorrow date 86400000
// console.log(d.toLocaleString());

//! How To GET the only DATE

// Dates method

// const curDate = new Date();

// how to get the individual date  (very important)

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());     0(jan) and 11 (dec)
// console.log(curDate.getDate());
// console.log(curDate.getDay());

//! HOW TO SET THE INDIVIDUAL DATE ONLY

// const curDate = new Date();

// how to get the individual date  (very important)

// console.log(curDate.setFullYear(2022));

// the setFullYear() method can be optionally set month and day

// console.log(curDate.setFullYear(2022, 10, 5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

//! TIME METHODS  ***********

// const curTime = new Date();

// how to get the individual time

// console.log(curTime.getTime());
// the getTime() returns the number in milliseconds since jan 1 1970

// console.log(curTime.getHours());
// the getHours() return the hours of date as a number (0-23)

// console.log(curTime.getMinutes());

// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

//? how to get the individual time

// const curTime = new Date();

// console.log(curTime.setTime());

// console.log(curTime.setHours(7));

// console.log(curTime.setMinutes(7));

// console.log(curTime.setSeconds(7));
// console.log(curTime.setMilliseconds(7));

//? PRACTICE TIME

// new Date().toLocaleTimeString(); 11:18:45 AM (to get the only time)

// new Date().toLocaleDateString();  02/26/2021  (to get the only Date)

// new Date().toLocaleString();        02/26/2021, 11:18:45 AM  Both

//! ############### 9th section math object ********************

// javascript math object allows you to perform mathamtical operations on numbers

// to get the value of PI
// console.log(Math.PI);

// Math.round()
// returns the value of X roundexd to its nearest integer

// let num = 10.2565;
// console.log(Math.round(num));  the output will be "10"(round figure)

// Math.pow()
// Math.pow(x,y) returens the value of x to the power of y

// console.log(Math.pow(2,3));
// or
// console.log(2**3);

// Math.sqrt()
// Math.sqrt() return the square root of the X

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// to get the absolute value (positive)

// Math.abs()
// Math.abs(x) return the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// Math.ceil()
// Math.ceil(x) return the value of x roundeed upto its nearest integer

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.01));

// diff between round and ceil (it return the value if 99.01 == 99 and also 98.99 =99)

// console.log(Math.round(4.4));
// console.log(Math.round(99.1));

// Math.floor()
// Math.Floor(x) return the value of x roundeed down to  its nearest integer

// console.log(Math.floor(4.4));
// console.log(Math.floor(99.01));

// diff between Floor round and ceil

// Floor (returens the least value)
// round (calculates and return medium)
// Ceil (return the next value)

// console.log(Math.floor(99.5));
// console.log(Math.round(99.5));
// console.log(Math.ceil(99.5));

// Math.min()
// Math.min() can be used to find the lowest value in the list of arguements

// console.log(Math.min(0,150, 30, 20, -8, -200));

// Math.max()
// Math.max() can be used to find the highest value in the list of arguements

// console.log(Math.max(0,150, 30, 20, -8, -200));

// Math.random()
// Math.random() return a random Number between 0 (inclusive), and 1

// console.log(Math.random());
// console.log(Math.random()*10);  to get the random number from 0 to 10

// console.log(Math.floor(Math.random()*10));  to get the full number (without decimal)

// Math.trunc()
// Math.trunc() it returens the intiger part of a number

// console.log(Math.trunc(4.6));           returns 4
// console.log(Math.trunc(-99.1));         returns -99

// Practice time

// if the number is Positive then (Math.trunc is EQUAVALENT to(=) Math.floor)
// otherwise (Math.trunc is EQUAVALENT to(=) Math.ceil)

//! ####################################   DOM IN JAVASCRIPT    ######################################################################

// window vs Document
// DOM vs BOM
// DOM Navigation
// Searching and Getting Elements Reference

// !       ************************* Window       VS      Document ((((((((((()))))))))))

// 1> Window is the main container or we can say the global object and any operation ralated to entire
// browser window can be part of window object

// For example - the History or to find the URL etc

// 1> Whereas DOM is the child of the window object

// 2> all the members like objects, methods or properties
//         if they are part of window object than we  do not refer the window object since window is the
//         global object so you dont have to write down window

// 2> where in the DOM we need to refer the document methods or properties

// 3> window has methods, properties and object, for example setTimeout() or setInterval() where as document is the
// object of the window and it also has a screen object with properties discribing the phtsical display

// 3> Document is just the object of the global object that is window which deals with the document
//         the HTML Elements themselves

// !       ************************* DOM      VS      BOM ((((((((((()))))))))))

// 1> the DOM is the Document object model, which deals with the document
//         the HTML elements themselves
//         for ex : document and all traversal you would do it in it, events etc

// For ex::
//         Change the backgroun color to red
//         document.body.style.background = "red";

// 1> the BOM is the brouser object model, which deals with browser componets
// aside from the document, like history location navigator and screen
// (as well as some  others that are vary by browsers) or
//         in simple meaning all the window operationa which comes under BOM are perfomed using BOM

// ?       *************************   Lets see More Practical on History object   ((((((((((()))))))))))

// Functions and alert/confirm/Prompt are also a part of BOM
// they are not directly related to the document
// but represent the pure browser methods of communication with the user

// alert.(location.href); shows the current URL
//  if (confirm("want to visit Gwiz academy?")) {
//      location.href = "https://gwizacademy.com/";    redirect to the browser to
//  }

//!        *************************   Navigate through the DOM   ((((((((((()))))))))))

// 1> document.documentElement
//         return the element that is the root element of the documet

// 2> document.head
// 3> document.body
// 4> document.body.childNodes (includes the tab enter and whitespace )
//         list out the direct childran only
// 5> document.children  (without the text nodes, only regular Elements)
// 6> document.childnodes.length

// Practice time
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// Practice Time
// How to find child in a DOM tree
// FirstChild vs FirstElementChild
// lastChild vs lastElementChild

// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"

//                         OR

// document.querySelector(".child-two").style.color = "yellow"

// )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

//? How to find the parent node

// document.body.parentNode
// document.body.parentElement

//? how to find or access the siblings

// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

//!  ******************* How to search the elements and the references    ((((((((((()))))))))))

//?  ******************* Javascript events    ((((((((((()))))))))))

// four ways of writing Events in JS
// what is events object?
// MouseEvent in  JS
// KeyboardEvent in JS
// InputEvent in JS

// HTML Events are things that happens to HTML Elments
// when javascript is used in HTML pages, JS can "react" on these events

// HTML events
// An HTML Event can be something the browser does, or something a user does

// Here are some examples of HTML events

// An HTML web page has finsihed loading
// An HTML input field was changed
// An HTML button was clicked
// often when events happen you may want to do something

// JS lets you execute code when events are detected

// HTML allows events handler attributes with JS code to be added to HTML elements

// Four ways of writing events in JS

// using alert();

// 1> using alert()
// 2> by calling a function (we already seen and most common way of writing)
// 3> using inline events (HTML ckicks = "priority and element.click")
// 4> using event listners (add event listnets and IE's attractive)

// check the events in HTML file

//! what is an event Object

// Event object is the parent object of the event object
// for example
// MouseEvent, focusEvent, KeyboardEvent etc

//         MouseEvent

//         the MouseEvent object
//         event that occurs when the mouse interacts with the HTML
//         document belongs to the MouseEvent Object

//         KeyboardEvent

//         the events that occurs when user presses a key on the Keyboard
//         belongs to the KeyboardEvent object
//         event object is the parent object of the parent object

// Input events in javascript
// the onchange events occurs when the value of an element changed,

// for radio buttons and checkboxes the onchange event occurs when the checked state has been changed`

// Diffence between the onclick() and addEventListener()

// !First way of using event listener

// const fortWay = document.querySelector('forWay');

// foryWay.addEventListener('click', () => {
//         console.log(`i am another way of using events 2`);
// })

//! second way of using event listener

// const callingFun = () => {
//         console.log("i am another way of using events 3");
// }

// fortWay.addEventListener('click', callingFun);

// this is because addEventListener does not overwrite event handlers,
// where as onclick overrides any existing onclick = fn event handlers

// the other significant difference of course is that onclick will always work
// where as add addEventListener does not work in INternet explorer before version 9

//! Timig based events in JS

// setTimeout
// setInterval
// clearTimeout
// clearInterval

// the window object allows execution of code at specified time intervel

// these time intervels are clled timing events

// the two key methods to use with JS are

// setTimeout(function, milliseconds)
//         executes a function, after waiting a specified number of milliseconds

// setInterval(function, milliseconds)
//         same as setTimeout(), but repeats the execution of the function continuosly

//? Difference betweeen the setTimeout() and setInterval()

//! ********************* OOPs(OBJECT ORIENTED PROGRAMIING IN JS) IN JAVASCRIPT %%%%%%%%%%%%%%%%%%%%%%%%%%

// what is object literals
// what is "this" object

// what is object literals?

// object literal is simply a key:value pair of data structure
// storing varibles and Fuctions together in one container
// we can refer this as an object

//! How to create an object?

//? 1st way to write
// let bioData = {
//         myName : 'vishal',
//         myAge : '25',
//         getData : function(){
//                 console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
// }
// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();

//? 2nd way no need to write function as well es6

// let bioData = {
//         myName : 'vishal',
//         myAge : '25',
//         getData (){
//                 console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
// }
// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();

//! What if want Object as a value inside an Object?

// let bioData = {
//         myName : {
//            fullName : 'vishal',
//            sirName : 'mudhale'
//         },
//         myAge : '25',
//         getData (){
//                 console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
// }
// console.log(bioData.myName.fullName);

//!   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  What is this object $$$$$$$$$$$$$$$$$$$

// the defination of "this"  object is that it contain the current context
// the this object can have different values depending on where it is placed

// For example 1

// console.log(this);
// it refers to the current context and that is window global object

// Example 2

// function myName() {
//    console.log(this);
// }
// myName();

// Example 3

// var myNames = 'vishal';
// function myName() {
//    console.log(this.myNames);
// }
// myName();

// Example 4

// const obj = {
//         myAge : 26,
//         myName() {
//                 console.log(this.myAge);
//         }
// }
// obj.myName()

// Example 5

// const obj = {
//         myAge : 26,
//         myName : () => {
//                 console.log(this);
//         }
// }
// obj.myName()

// Example 6

// let bioData = {
//                 myName : {
//                    fullName : 'vishal',
//                    sirName : 'mudhale'
//                 },
//                 myAge : '25',
//                 getData (){
//                         console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//                 }
//         }
// console.log(bioData.myName.fullName);
// bioData.getData()

//! %%%%%%%%%%%%%%%%%%%%% *****************************    ECMASCRIPT  &&&&&&&&&&&&&&&&&&&&&&

//? $$$$$$$$$$$$$$$$$  Destructuring in javascript  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//         the Destructuring assignment syntex is javascript expression
//         that makes it possible to unpack the values from arrays
//         or properties from Objects, into distinct variable

//         ARRAY DISRUCTURING

// const myBiodata = ['vishal', 'kumar', 26];

// let myFName = myBiodata[0]
// let myLName = myBiodata[1]
// let myAge = myBiodata[2]

// console.log(myAge);

// you write this also like this
// let [myFName, myLName, myAge] = myBiodata;
// console.log(myFName);

//! IN Array DISTRUCTURING THE POSITION MATTERS LOT, SO KEEP IN MIND

//  we can add values too

// let [myFName, myLName, myAge, myDegree = "B-Tech"] = myBiodata;
// console.log(myDegree);

//? $$$$$$$$$$$$$$$$$  OBJECT Destructuring  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//     const myBiodata = {
//             myFName : 'vishal',
//             myLName : 'kumar',
//             myAge : 26
//     };

//     let age = myBiodata.myAge
//     let myFName = myBiodata.myFName
//     console.log(age);
//     console.log(myFName);

//! we can write with the help of object distructuring

// let {myFName, myLName, myAge, myDegree = "B-Tech"} = myBiodata;
// console.log(myAge);

//? $$$$$$$$$$$$$$$$$  OBJECT Properties  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// we can use now dynamic Data(properties) - common one (below)

// let myName = 'vishal';
// const myBio = {
//         myName : "Hello how are you ?"
//         26 : "is my age"
// }

// console.log(myBio);

// we can add dynamic data by using [] in key; and also perform mathamatical operation too - (dynamic data one below)

// let myName = 'vishal';
// const myBio = {
//         [myName] : "Hello how are you ?",
//         [20 + 6] : "is my age"
// }

// console.log(myBio);

// if the both key and value are same than no need to enter key and value
// NO need to write key and value. if both are same

// let myName = 'vishal';
// let myAge = 26;
// const myBio = {
//         myName : myName,
//         myAge : myAge
// }

// console.log(myBio);

// so both are same than we can write below

// let myName = 'vishal';
// let myAge = 26;

// const myBio = { myName, myAge }

// console.log(myBio);

//? $$$$$$$$$$$$$$$$$  SPREAD OPERATOR  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const colors = ['red', 'green', 'blue', 'white' ];

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

// 2nd time add one more color on top and tell we need to write it again
// on myColors Array

// const myFavColors = [...colors, 'yellow', 'black']
// console.log(myFavColors);

// use 3 dots and than without any space the array you want to add (...colors)
// it is widly use DRY (do not repeat yourself)

//? $$$$$$$$$$$$$$$$$  ECMASCRIPT 2016/ES7 UPDATES  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ARRAY INCLUDE(array.prototype.includes) -
// EXPONENTIATION OPERATOR

// ARRAY INCLUDE (ARAY PROTOTYPE )

// const colors = ['red', 'green', 'blue', 'white' ];

// const isPresent = colors.includes("white")
// console.log(isPresent);

// EXPONENTIATION OPERATOR (**)

// console.log(2**3);

//? $$$$$$$$$$$$$$$$$  ECMASCRIPT 2017/ES8 UPDATES  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ASSYN Function
// string padding
// Object.values()
// Object.entries()
// Object.getOwnPropertyDescriptor()
// trailing commas in function parameter list and calls
// shared memory and atomics

// string padding

// let myAge = "26".padStart(10);
// console.log(myAge);

// Object.entries() and  Object.values()

// by using these two methods you can convert Objects into arrays

// by using values you can get values of the key pair
// and by useing entries you can make them into sepeate arrays and run a loop very easily

// const person = { name: 'vishal', age: 87};

// console.log(Object.entries(person));
// console.log(Object.values(person));

//? $$$$$$$$$$$$$$$$$  ECMASCRIPT 2018/ES9 UPDATES  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Rest and spread operator

// we can use it in also in the objects (like we used in the arrays )

// const person = { name: 'vishal', age: 87};

// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);

//? $$$$$$$$$$$$$$$$$  ECMASCRIPT 2018/ES9 UPDATES   and 2019/ Es10 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Array.prototype.(flat, flatMap)
// Object.fromEntries()
// String.prototype.{trimStart, trimEnd}
// Symbol, prototype, discription
// well found JSON.stringify()
// function.prototype.toString()
// JSON improvements

//! Array.prototype.(flat, flatMap)

// flatten an Array means to convert  the 3d or 2d Array into a single dimesional array

// const arr = [
//         ["zone_1","zone_2"],
//         ["zone_3","zone_4"],
//         ["zone_5","zone_6"],
//         ["zone_7",["zone_7","zone_8"],],
//         ];

// Old method

// let flatArr = arr.reduce((acc, currEle) => {
//         return acc.concat(currEle);
// })
// console.log(flatArr);

// by usin Flat ES8

// console.log(arr.flat());

// to make it further ( 2 dimesional level to more simply increse the number of "Infinity")

// console.log(arr.flat(2));

//! Object.fromEntries()

// we use object.entries() to convert object to array and
// and Object.fromEntries() to convert array to object

// const person = { name: 'vishal', age: 87};

// console.log(Object.entries(person));

// const arrObj = Object.entries(person);

// console.log(Object.fromEntries(arrObj));

//? $$$$$$$$$$$$$$$$$  ECMASCRIPT 2020/11 UPDATES  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// BIGINT

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

// just by adding n after any number it will consider bigint ( to the max numbers)
// console.log(9007199254740991n + 15n);

// let newNum = 9007199254740991n + 15n;
// console.log(newNum);
// console.log(typeof newNum);

// NULLISH

// const foo = null ?? "default string";
// console.log(foo);

// it is a new logical operator
// it will compare the rignt and left side and returen the "other then NULL values"

// 2014

// use strict mode
// by using you cant just tell x= 2; you have to use variables (let, var, const)

// "use strict";
// x = 3.14;
// console.log(x);

// let X= 3.14;
// console.log(X);

// %%%%%%%%%%%%%%%%%%%%% ***************************** ADVANCED JAVASCRIPT   &&&&&&&&&&&&&&&&&&&&&&

//         EVENT PROPAGATION(EVENT BUBBLING AND EVENT CAPTURUNG)
//         HIGHER ORDER Function
//         CALLBACK FUNCTION
//         FUNCTION CARRYNG
//         CALLBACK HELL
//         AJAX CALL USING XMLHttpRequest
//         BONUS SECTION JSON
//         fetch API
//         PROMISES
//         ASYNC-await
//         Error HANDLING IN js

//! EVENT PROPAGATION(EVENT BUBBLING AND EVENT CAPTURUNG)

// Event bubling and capturing are two ways of event propogation in the HTML DOM API,
// when an event occurs in an Element inside another Element and both Elements have registered
// a handle for that event

// the event propogation mode determines in which order the Element recive the Element

// propogation broadly catagarized into 3 main types

// the capture Phase - Going from window to the Event target Phase
// the target phase - it is the target phase
// the bubble phase - from the Event target parent back to the window

//! what is the Event bubbling

// with event bubling the event is first captured and handled by the innermost Element than propogated
// to the outer Elements

//! what is event capturing

// with Event capturing the event is captured by the outermost element and propogated to the inner element
// capturing is also called tricking which helps remember the propogation order

// watch the example in files

//! Higher order Function (HOF)

// function which takes another function as an arguements is called HOF
// wo function jo dusra function ko as an arguement accept krta hai use HOF kehte hai

//! CallBack function

// function which get passed as an arguement to another fuction is called CallBack function

// a callback function is a fuction that is passed as an arguement to another fuction to be 'called back'
// at a later time

// jis bhi fuction ko hum kisi aur fuction ke under as an arguement pass karte hai than usko
// hum callback fuction bolte hai

// we need to create an calculator

// const add = (a,b) => {
//         return a+b;
// };

// console.log(add(5,6));

// const sub = (a,b) => {
//         return Math.abs(a-b);
// };

// console.log(add(5,6));

// const mult = (a,b) => {
//         return a*b;
// };

// console.log(add(5,6));

// i have to do the hardcode for each operation which is bad
// we will use the callback and the HOF to make it simple to use

// const add = (a,b) => {
//         return a+b;
// };
// const subs = (a,b) => {
//         return Math.abs(a-b);
// };

// const mult = (a,b) => {
//         return a*b;
// };

// const calculator = (num1, num2, operator) => {
//         return operator(num1, num2);
// };

// console.log(calculator(5,2,subs));
// console.log(calculator(5,2,add));
// console.log(calculator(5,2,mult));

// in the above example calculator is the Higher order function
// which accepts three arguements the third one being the callback
// here the calculator is called the Higher order function because it takes another
// function as arguement

// and add, sub, mult are called the callback function because they are passed as an arguement
//  to another function

// Diffence betweeen HOF and callback function

//! Asynchronous Javascript

// Hoisting in JS
// Scope chain
// Lexical scoping in Javascript
// use Strict mode
// This keyword
// closures in JS
// what is Asynchronous Js programmming
// what is event loop

//! Hoisting in JS

// we have a creation and execution phase

// Hoisting in JS is a mechanism where varaibles and functions
// declarationa are moved to top of their scope before the code is executed

// for ex

// console.log(myName);
// var myName;
// myName = "vishal";

// how it will be in output during creation phase

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "vishal";

// IN ES2015 (a.k.a ES6), hoisting is avoided by using the let keyword
// insted of var (the other differece is that variables declared with let are local
// to the surrounding block, not the entire function)

//! What is scope chain and lexical scoping in JS

// the scope chain is used to resolve the value of variable names in js

// scope chain in JS is lexicalley defined which means that we can see what
// the scope chain will be by looking at the code

// at the top we have global scope which is the window object in the browser

// lexical scoping means now the inner function can get access to their parent
// functions variables but the vice-veresa is not true

// For ex

// let a = "Hello world";               //! Global scope

// const first = () => {
//         let b = " How are you";

//         const second = () => {
//                 let c = " Hi, I am fine thank you";
//                 console.log(a+b+c);
//         }
//         second()
//         console.log(a+b+c);          //! I cant use c

// }
// first()

// inner function bahar(outer) wale ka data access kar sakta hai but
// outer wala function cant access the data of inner function Because of lexical scoping

//! What is the CLOSURES IN JAVASCRIPT

// A Clsure is a combination of a function bundled together (enclosed) with refernce to its
// surrounding state (a lexical environment )

// in other words, a closure gives you
// access to an outer functions  scope from an inner function

// IN Javascript closures are created every time a function is created at function creation time

// For Example

// const outerFun = (a) => {
//         let b = 10;
//         const innerFun = () => {
//                 let sum = a+b;
//                 console.log(`the sum of the two numbers is ${sum}`);
//         }
//         innerFun();
// }
// outerFun(5);

// it is same like lexical scoping

// one more example

// const outerFun = (a) => {
//         let b = 10;
//         const innerFun = () => {
//                 let sum = a+b;
//                 console.log(`the sum of the two numbers is ${sum}`);
//         }
//         return innerFun;
// }
// let checkClosure = outerFun(5);
// console.log(checkClosure());

// or to check the closur

// console.dir(checkClosure);

//! Use strict mode

// in this you cant define varibles without using var, let, const

// x = "vishal";
// console.log(x);   not a good method

// "use strict"

// let x = vishal;
// console.log(x);

//! Synchronus JS programmming

// const fun2 = () => {
//         console.log(`function 2 is called`);
// }

// const fun1 = () => {
//         console.log(`function 1 is called`);
//         fun2();
//         console.log(`function 1 is called again`);
// };
// fun1();

// Asynchronous Js Prog

// const fun2 = () => {
//         setTimeout(() => {
//                 console.log(`function 2 is called`);
//         }, 2000);
// };

// const fun1 = () => {
//         console.log(`function 1 is called`);
//         fun2();
//         console.log(`function 1 is called again`);
// };
// fun1();

//! What is event loop in JS

//! Fuction currying

// Currting is technique of evaluating fuction with multiple arguments into sequence
// of function with single argument

// in other words when a function instead of taking all arguments at one time takes the first one
// and return a new function that takes the second one and returns a new function which takes the
// third one and so forth untill all the arguments have been fullfilled

// sum(5)(3)(8) === make sum of the all these numberes

// function sum(num1) {
//         // console.log(num1);
//         return function(num2){
//                 // console.log(num,num2);
//                 return function (num3) {
//                         console.log(num1+num2+num3);
//                 }
//         }
// }
// sum(5)(3)(8)

// or

// const sum = (num1) => (num2) =>(num3) => console.log(num1+num2+num3);

// sum(5)(3)(8)

//! Callback hell

// setTimeout(() => {
//         console.log("work is done 1");
//         setTimeout(() => {
//                 console.log("work is done 2");
//                 setTimeout(() => {
//                         console.log("work is done 3");
//                         setTimeout(() => {
//                                 console.log("work is done 4");
//                                 setTimeout(() => {
//                                         console.log("work is done 5");
//                                         setTimeout(() => {
//                                                 console.log("work is done 6");
//                                         }, 1000);
//                                 }, 1000);
//                         }, 1000);
//                 }, 1000);
//         }, 1000);
// }, 1000);

// as you can see it will take lot of time and work
// to save from it we use PROMISES
// Before that we need to leaern How to use Ajax and API

//! XMLHttpRequest

// XMLHttpRequest (XHR) Objects are used to interact with servers you can retrieve data from a URL without
// having to do a full page refresh, this enables a web page to update just part of a page without disrupting what
// the client is doing XMLHttpRequest is used heavily in AJAX programming

// {
//         what is AJAX......?

//         AJAX which initally stood for Asynchronous Javascript and XML is a programming practice of builidng
//         complex dynamic web pages by using a technology known as XMLHttpRequest
// }

// despite its name XMLHttpRequest can be used  to retrieve any type of data, not just XML

//! JSON

// JSON.stringify() turns a Javascript Object into JSON text and stores that JSON
// text in a string eg

// var my_object = {key_1: "some text", key_2: true, key_3: 5};

// var object_as_string = JSON.stringify(my_object);
// {"key_1": "some text", "key_2": true, "key_3": 5}     //output

// console.log(object_as_string);
// typeof(object_as_string);
// string

// JSON.parse() turns a string of JSON text into a javascript object eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
// {key_1: "some text", key_2: true, key_3: 5}          output

// console.log(object_as_string_as_object);
// typeof(object_as_string_as_object);
// object
