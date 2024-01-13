// // Objects
//    const studentdata = { // declaration of object literals,non singleton
//         name: "Rohit",
//         age:  18,
//         gmail: "rohit123@gmail.com",
//    } 
//    const studentdatas = new Object(); //singleton

//   Note:i.  whenever an object is created using
//            constructor(Object.create()) then 
//            sigleton object is created.

//       ii.  Add symbols in objects
//            const mysym = symbol('123'); //creating symbol values
//            const studentdata = {
//                 name: "Rohit",
//                 age:  18,
//                 gmail: "rohit123@gmail.com",
//                 [mysym]: 'rohit1', // using symbol key inside object
//            }
//            console.log(studentdata[mysym]); //printing symbol values 



// // Methods in objects
//    1. Access values:      a. studentdata.name
//                           b. studentdata['name'] //mostly used in symbol or exceptional cases
//    2. change values:      studentdata.name = 'Rohit Pandey'
//    3. prevent changes:    Object.freeze(objectname);
//       to object values
//    4. Add objects:        {...obj1,...obj2};
//    5. Access nested:      studentdata?.name?.value; // ?. If that values exist only then display
//       objects in api 
//       call
//    6. To get all object keys:  Object.keys(objectname) //['name','age','gmail']
//    7. To get all object values:  Object.values(objectname) //['Rohit',18,'rohit123@gmail.com']
//    8. To get all object entries:  Object.entries(objectname) //[['name','Rohit'],['age',18],['email','rohit123@gmail.com]]
//    9. To check property is present inside object or not: Object.hasOwnProperty('name'); //true


// // Creating a Function inside object:
//    Example:
//           studentdata.location = function(){
//             console.log(`${this.name} stays in kolkata `); //this is used to refer to othe properties of the current object which we use.
//           }

//           console.log(studentdata.location()); //as its a function call it like a function


// // Destructuring of Objects
//    const bankdata = {
//       bankname: "SBI",
//       account_holder: 'Rohit Pandey',
//       amount: 100000,
//    } 
//         // property: alias    Objectname
//    const { bankname: bank } = bankdata;
//    console.log(bank) // SBI


// // APIs (Application Programming Interface) 
//    Data is nowadays stored as Json(Javascript Object Notation) instead of XML.






// // Functions
//      A block of code that can be used again and again.
// //   Example:
//         function addUp(num1,num2){   //num1,num2 parameters 
//             return num1 + num2;      // return statement
//         }
//         const result = addUp(10,20); //10,20 is arguments and addUp() is function call

//    Note: If we donot pass a value as arguement when asked by parameters
//          then parameters are undefined. 



// // Rest and Spread operator(...)
//    Both are same (...) just dependson usecases where to use.

//    Example: Rest operator
//           function shoppingCart(val1,...items){
//             return items;//items = ['apple','banana','guava], val1='mango'
//           }
//           shoppingCart('mango','apple','banana','guava')


// // Scopes in Javascript
//    Two types:
//         1. global scope: scope outside all the {}
//         2. block/local/function scope: scope within {}
        
//    Let, const are scope dependent unlike var which is not.













    

          
   
      
