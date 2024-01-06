// Print Statement
 console.log("Hello world")

// Execute Node js in local system.
  1. Uses node V8 engine
  2. command: nodex filename.js

// Variables in Javascript(const,Let,var)
   const: value once assigned cannot be changed
   let: value once assigned can pe changed
   var: value once assigned can be changed and 
        redeclared (Prefer not to use because Of
        issue of of block and functional scope.) 
   Example:
   const name = "Rohit";
   let id = 12310;
   let city; //value is undefined as nothing is assigned to it.

// Comments
   1. singleline: //
   2. multiline : /**/

// To use newer version of JS:
   "use strict";

// Alert statement: Renders stuff through popup
   alert("Rohit is a good boy");


// Datatypes
   Based on type of data storage and way to access 
   it is of 2types:

   1. Primitive:  
        i.  Call by value(changes done in copy)
        ii. Stack memory
         String
         Number
         Boolean
         BigInt: Very big Number
         NULL: standalone value
         undefined: means value not assigned
         symbol: uniqnueness of a component or value
         NaN: Not a number

      Example: 
      const id1 = Symbol('123');
      const id2 = Symbol('123'); //Symbol
      const bigNumber = 1234567890000n; // add n at end to make it a BigInt number
      const arr = [1,2,3,4,5]; //array
      const myObj = { //object
         name:'Rohit',
         roll: '1234',
      }
      const print = function(){ //Function
         console.log("Hello world")
      }
      console.log(id1===id2); False


   2. Non-Primitive/Reference:
        i.  Call by Reference(changes done in original memory reference)
        ii. Heap memory
            Array 
            Objects
            Functions      



// To know datatype of variable(typeof).
   typeof 
   Note:
   typeof Null => Object
   typeof undefined => undefined
   typeof NaN => Number
   typeof 100.3 => Number
   typeof myfunc => Object Function.


// Conversion of datatypes
  Number conversion: Number()
      "10" => 10
      "10abc" => NaN
      "true" => 1
      Example:  let a = '10'
                let ab = Number(a);
  Boolean conversion:
      1 => true
      0 => false
      "Rohit" => true
      "" => False
  String conversion:
      33 => '33'


// Operations
    1. Add: +
    2. Sub: -
    3. Divide: /
    4. Multiply: *
    5. remainder: %
    6. power: **
    7. ++a => increments in same statement
    8. a++ => increments in next statement

    console.log('Hello' + 'Rohit') => Hello Rohit
    console.log("1" + "2") => 12
    console.log("1" + 2 + 2) => 122 
    console.log(1 + 2 + "2") => 32

    
// Comparison
   1. >
   2. <
   3. ==
   4. !=
   5. >=
   6. <=
   console.log(null > 0); false
   console.log(null == 0); false
   console.log(null >= 0); true

   console.log(undefined > 0); false
   console.log(undefined == 0); false
   console.log(undefined >= 0); false


// strict checking: 
   1. ===
   2. !== 
   (It checks value and datatypes both unlike ==,!=)


// Javascript is Dynamic or Statically typed ?
    Dynamically typed as datatype of variable are determind
    by the value it holds in runtime. Typescript is statically 
    typed.


// Memory allocation
   2 types of memory:
      1. Stack => 
         i.  Primitive variables uses it.
         ii. If assign primitive variable value
             to others variable here copy of 
             primitive variables value is made and 
             assigned to other variable.
      2. Heap => 
         i.  Non-Primitive variable uses it.
         ii. If assign primitive variable value
             to others variable here memory 
             reference of primitive variable 
             original value is made and assigned 
             to other variable.