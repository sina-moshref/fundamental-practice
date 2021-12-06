/* Can I add a string property?
importance: 5
Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
How do you think, will it work? What will be shown? */
 
//answer = typeError


/* Create a script that prompts the visitor to enter two numbers and then shows their sum */

//answer
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b ); 

/* Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */

//answer
function readNumber(){
    while(true){
    let result = +prompt("inter a number",0);
        if ( !( isNaN(result) ) ){
            break;
        }
    }
}

readNumber() 

/*The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max) */

//answer
function random(a,b){
    return a + Math.random() * (b - a);
} 


/* Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values. */

//answer
 function randomInteger(a, b) {
return ( Math.floor((Math.random() * 10))  % b ) + a;
}
 

//string

/*Write a function ucFirst(str) that returns the string str with the uppercased first character */

//answer
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
} 

/*Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive: */

//answer
unction checkSpam(str){
    let str2 = str.toLocaleLowerCase();
    alert( str2.includes("viagra") || str2.includes("xxx") )
} 

/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength. */

//answer
function truncate(str, maxlength){
    return ( srt.length > maxlength ) ?
        str.slice(0,maxlength - 1) + "..." : str
    }
} 

/*We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */

//answer
 function extractCurrencyValue(str) {
  return +str.slice(1);
} 

/*Is array copied?
What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? */

//answer : arrays are object,they assign values by refrences;


/*Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. */

//answer
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length/2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap");
styles.unshift("Reggae"); 

/*Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

let i = 0;
let sum = 0;
let arr = [];
while(true){
   let result = +prompt("inter",0);
    if(isNaN(result)) { break ;}
    arr[i] = result;
    i++;
}

for (let num of arr){
    sum += num;
}
alert(sum); */

/* You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. 

//answer
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary 

/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
let str = "my-short-string";
alert(camelize(str)) 

/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array. */

//answer
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


function filterRange(arr, a, b){
    return arr.filter( item => item >= a && item <= b);
} 

/*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */

//answer
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1] 

//Sort in decreasing order

//answer
let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a)

alert( arr ); // 8, 5, 2, 1, -10 

/*Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy. 

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) */

//answer
function copySorted(arr){
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert ( sorted );
alert ( arr ); 

/* Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it. */

//answer
function Calculator(){
    
    this.methods = {
        "+" : (a , b) => a + b,
        "-" : (a , b) => a - b,
    }
    
    this.calculate = function(str) {
        
        let split = str.split(' ');
        a = +split[0];
        op = split[1];
        b = +split[2];
    
    if ( !this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return this.methods[op](a, b);
    }
    
    this.addMethods = function(name, func){
        this.methods[name] = func;
    };
} 

/* You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname. */

//answer
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( user => ({
    fullName: `${user.name} ${user.surname}`,
    id : user.id
}))

alert( usersMapped[0].id )
alert( usersMapped[0].fullName ) 

/*Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age. */

//answer
function sortByAge(arr){
    return arr.sort( (a, b) => a.age - b.age)
} 

/*Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.*/

function shuffle(arr){
    for (let x = 0 ; x < arr.length ; x++){
        let random = Math.floor( Math.random() * x + 1 );
        [arr[x], arr[random]] = [arr[random], arr[x]];

    }
    alert(arr);
}

let arr = [1, 2, 3];
shuffle(arr); 

/* Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age */

//answer
function getAverageAge(arr){
    let totall = arr.reduce( (total, value) => total + value.age,0);
    return totall / arr.length ;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); 

/* Create a function unique(arr) that should return an array with unique items of arr. */

//answer
function unique(arr) {
 let result = [];
    for (let str of arr){
        if (!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); 


/* Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

//answer
function groupById(arr){
    return arr.reduce( (obj,value) => {
                     obj[obj.id] = obj.value;
                     return obj
    }, {} )
} 

/* Create a function unique(arr) that should return an array with unique items of arr. */

//answer
function unique(arr) {
    return new Set(arr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let set = unique(values);

for (let name of set){
    alert(name);
} // Hare, Krishna, :-O 


/* Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams. */

//answer
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 


/*We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push. */

//answer
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more"); 


/* There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0. */

//answer
function sumSalaries(salary){
    let sum = 0;
    for (let value of Object.values(salary)) {
     sum += value;
}
    return sum;
}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); 

//Write a function count(obj) that returns the number of properties in the object

//answer
function count(obj) {
  return Object.keys(obj).length;
} 

/*Destructuring assignment
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property); */

//answer
let user = {
  name: "John",
  years: 30
};
let {name, years : age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false 

/*--There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs. */

//answer
function topSalary(salaries){
    let maxSalary = 0;
    let maxName = "";
    
    for(let [name, salary] of Object.entries(salaries)){
        if(maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
} 

/*Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
Show it using alert. */

//answer
let d = new Date("Feb 20,2012 03:12:00");
alert(d); 

/*Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’. */

//answer
function getWeekDay(d){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[d.getDay()];
    
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) ); 


/*Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th. */

//answer
function getDateAgo(date, i){
     date.setDate(date.getDate() - i);
    return date;
}

let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 365) ); 

/*Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb. */

//answer
function getLastDayOfMonth(year,month){
    let d = new Date(year,month + 1);
    d.setDate(d.getDate()  - 1);
    return d.getDate();
}

alert(getLastDayOfMonth(2012, 1)) 


/*Write a function getSecondsToday() that returns the number of seconds from the beginning of today. */

//answer
let d = new Date();
alert((((d.getHours() * 60) + (d. getMinutes())) * 60)+ d.getSeconds()) 


/*Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow. */

//answer
alert( getSecondsToTomorrow() )

function getSecondsToTomorrow(){
    let date = new Date();
    let d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(00);
    d.setMinutes(00);
    return (d - date) / 1000;
    
}


//Turn the user into JSON and then read it back into another variable.

//answer
let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);
let jsonBack = JSON.parse(json);

/*Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
})); */

//answer
return (value == "meetup") ? undefined : value; 
