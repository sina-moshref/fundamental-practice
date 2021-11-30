/* Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */
//answer
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; 

/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */
//answer
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    for(let num in obj){
            return false;
        } 
            return true;
}

/*We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */
//aswer

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
alert( sumOfSalaries(salaries) );


function sumOfSalaries(obj){
    sum = 0;
    for(let x in obj){
        sum += obj[x];
    }
    return sum;
} 

/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

// ansewr
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj){
    for (let num in obj){
        if( !(isNaN(obj[num])) ) {
            obj[num] = obj[num] * 2;
        }
    }
} 

/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
let calculator = {
  a : undefined,
  b : undefined,
  read : () => { 
     this.a = prompt("inter first value:");
     this.b =  prompt("inter second value:");
  },
  sum : () => (+(this.a) + +(this.b)),
  mul : () => (this.a * this.b),


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

/*Chaining
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Modify the code of up, down and showStep to make the calls chainable,  */

//answer
let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
} 

/* Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
If it is, then provide an example of their code. */

//answer
function A() { }
function B() { }

let a = new A;
let b = new B;
a = b;

alert( a == b ); // true 

/*Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties. */

//answer
function Calculator(){
    this.read = function() {
        this.a = prompt("enter the first value",0);
        this.b = prompt("enter the first value",0);
    }
    this.sum = function() {
        return +this.a + +this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); 

/*Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value. */

//answer
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);


