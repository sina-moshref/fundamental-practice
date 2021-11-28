/*
Show an alert
Create a page that shows a message “I’m JavaScript!”.
*/
alert("I'm JavaScript");

/*
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/
let admin, name;
name = "john";
admin = name;
alert(admin);


/* 
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let earth_planet, current_visitor;


//What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // ? hello Ilya


//Create a web-page that asks for a name and outputs it
let userName= prompt("inter your name: ");
alert(userName); 

/*
What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
*/

a = 2
b = 2
c = 2
d = 1


/* 
What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);
*/
a = 4
x = 5



//What are results of these expressions?

"" + 1 + 0 = 10
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = '-9 5'
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2



//Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12 => alert(+a + +b);

//What will be the result for these expressions?
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" //fasle
null === +"\n0\n" // false


//Will alert be shown? YES

if ("0") {
  alert( 'Hello' );
}


/*
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

let question = prompt("‘What is the “official” name of JavaScript?'");
if (question == "ECMAScript"){
alert("Right!");
}
else{
alert("You don’t know? ECMAScript!")
}


/*
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/
let x = prompt("enter a number","0");
if (x > 0) {
  alert( 1 );
} 
else if (x < 0) {
  alert( -1 );
} 
else {
  alert( 0 );
} 

/*
Rewrite this if using the conditional operator '?':

let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let result= (a + b < 4) ? 'Below' : 'Over';

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; 


///What is the code below going to output?
alert( null || 2 || undefined ); // 2


//What will the code below output?
alert( alert(1) || 2 || alert(3) ); // 1 & 2


//What is this code going to show?
alert( 1 && null && 2 ); // null


//What will this code show?
alert( alert(1) && alert(2) ); // 1 & null



//What will the result be?
alert( null || 2 && 3 || 4 ); // 3


/*
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
*/
if (age >= 14 && age <= 90)

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);


//Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' ); //executes
if (-1 && 0) alert( 'second' ); //doesn't worrk
if (null || -1 && 1) alert( 'third' ); //executes



//What is the last value alerted by this code? Why? // ==> 1 <==
let i = 3;
while (i) {
  alert( i-- );
}



//Which values does the while loop show?

let i = 0;
while (++i < 5) alert( i ); // 1,2,3,4

let i = 0;
while (i++ < 5) alert( i ); // 0,1,2,3,4


//Which values get shown by the "for" loop?

for (let i = 0; i < 5; i++) alert( i ); // 0,1,2,3,4

for (let i = 0; i < 5; ++i) alert( i ); // 0,1,2,3,4


/*
Output even numbers in the loop
Use the for loop to output even numbers from 2 to 10. */
for (let i = 2 ; i <= 10 ; i++)
    if((i % 2) == 0)
    alert(i); 

/* Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0;
while (i++ < 3) {
  alert( `number ${i}!` );
}


/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

let x = 1;
while (x){
    let y = prompt("inter a number greater than 100",100);
    if(y > 100 || y == undefined) break;
}


/*
Rewrite the "switch" into an "if"
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

let browser = prompt("inter ");
if (browser == 'Edge'){
    alert( "You've got the Edge!" );
}
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}


//Rewrite "if" into "switch"
/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = +prompt('a?', '');
switch (a){
        
    case 0:
    alert( 0 );
    break;
        
    case 1:
    alert( 1 );
    break; 
        
    case 2:
    case 3:
    alert( '2,3' );
    break; 
}


/*
Rewrite the function using '?' or '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

function checkAge(age){
   return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age){
   return (age > 18) || confirm('Did parents allow you?');
}


/*
Function min(a, b)
Write a function min(a,b) which returns the least of two numbers a and b.
P.S. In the case of an equality a == b it does not matter what to return.
*/

function findMin(a,b){
    return (a > b) ? b : a;
}


/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. 
*/

function(x,n){
    return Math.pow(x,n);
}


/* 
Rewrite with arrow functions

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

function ask(question){
    if (confirm(question)) () => alert("You agreed.");
  else () => alert("You canceled the execution.");
}