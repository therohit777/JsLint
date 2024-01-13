// // Functions:
//     Closure: when there is a nested functions then the children function
//                 can access the values of parent function.
//                 Example:
//                     function first(){
//                         const firstName = "Rohit";
//                         function last(){
//                             const lastName = "Pandey";
//                             console.log(firstName+lastName);
//                         }
//                     }
   
//     Function:
//     //Declaration1
//         function add(num1,num2){ 
//             return num1+num2;
//         }
//         add(10,20);

//     //Declaration2
//         const add = function(num1,num2){ 
//             return num1+num2;
//         }
//         add(10,20);


//     //Declaration3 (Arrow function)
//         const add = (num1,num2)=>{ 
//             return num1+num2;
//         }
//         add(10,20);

//         const add = (num1,num2)=> num1+num2; //Way1
//         const add = (num1,num2)=> (num1+num2); //Way2
//         //if no {}, no need to write return statement
//         //can be used for functions having 1 statement
    
    
// // Special case
//     Case1:
//         add(10,20);
//         const add = function(num1,num2){ //Declaration
//                 return num1+num2;
//         }

//     case2:
//         add(10,20);
//         function add(num1,num2){ //Declaration
//                 return num1+num2;
//         }

//     case2 allowed but not case1.


// //This keyword
//     This keyword refers to the context/values of current object.
    
//     const user = {
//         name:'Rohit',
//         welcomemessage: function(){
//             console.log(`${this.name},welcome buddy`);
//         }
//     }

//   Case1:
//     this keyword(inside obj) => 
//     {
//         name:'Rohit',
//         welcomemessage: [Function: welcomemessage]
//     }

//   Case2:
//     this keyword(globally inside file) =>
//     {}, empty object

//   Case3:
//     this keyword(inside browser)=>
//     window{} => windows global object is printed.




// // IIFE(Immediately Invoked Function Expressions)
//    1. Immediately invokes a Function.
//    2. To remove the problems/pollution caused by global scope variables/declarations.Case1

//    Syntax:
//     //Named IIFE
//     // (function declartaion)() 
//     (function add(num1,num2){
//         return num1+num2; 
//     })(10,20);  //Please write ; to stop execution of current IIFF
   
//     //Unnamed IFFE
//     ((num1,num2)=>{
//         return num1+num2; 
//     })(10,20);  




// Javascript Code Execution Context
// Check Javascript Execution folder.


// Control Flow:
   
//    IfElse:
//       if(condition){
//         statement;
//       }
//       else if(condition){
//         statement;
//       }
//       else{
//         statement;
//       }

//     Switch: //cannot be used with comparison operators.
//         Switch(condition){
//             case value1: //value: number,string
//                 statement1;
//                 break;
//             case value2:
//                 statement2;
//                 break;
//             default:
//                 statement;
//         }

//     TerniaryOperator:
//        (condition)? True statement : false statement;


//  false value: 0, -venumber, null, NaN, false, BigInt On, "", undefined.  
//  true value: [],{},function(){}

// Logical operators:
//    1. &&:  T+T->T, T+F->F, F+F->F
//    2. ||:  T+F->T, T+T->T, F+F->F
//    3. !:   T->F, F->T

// Nullish Coalescing operator(??)
//    used to handle null and undefined 
//    values coming from API.
//    Example:
//    let data = response ?? flag value to identify data is not coming;


// Loops:
    // 1. For:
    //         for(initialisation; condition; reinitialisation){
    //             statement;
    //         }
    //         Example: 
    //             for (let index = 0; index < 10; index++) {
    //                 const element = index;
    //                 console.log(element);
    //             }

    // 2. While:
    //         initialisation;
    //         while(condition){
    //             statement;
    //             reinitialisation;
    //         }
           

    // 3. doWhile:
    //       Even if the condition is wrong loop executes atleast 1 time.
    //       initialisation;
    //       do{
    //         statement;
    //         reinitialisation;
    //       }while(condition);

    //       Example:
    //         int i=0;
    //         do{
    //             console.log(i);
    //             i++;
    //         }while(i<10);

// Higher Order Loops: (Array specific)

    // 1. Forof: //return values, cannot be used for object
    //       const arr = [1,2,3,4,5];
    //       const str = "rohit";
    //       for (const i of arr/str) {
    //         console.log(i);
    //       }

    // 2. Forin: //returns keys
    //      const arr = [1,2,3,4,5]; //index are its keys
    //      const myobj = {
    //         'name1': 'Rohit',
    //         'name2' : 'Mohit',
    //      };
    //      for(cont i in myobj){ // i=>keys
    //         console.log(i,myobj[i]);
    //      }

    // 3. ForEach: //Mostly used.
    //     const arr1 = [1,2,3,4,5];
    //     const arr2 = [
    //         {
    //             "name":"Rohit",
    //             "age": 50,
    //         },
    //         {
    //             "name":"Rohan",
    //             "age": 40,
    //         },
    //         {
    //             "name":"Mohit",
    //             "age": 25,
    //         }
    //     ]

    //     arr2.forEach((value,index,fullarray) => {
    //         console.log(value,index,fullarray);
    //         console.log("name: ",value.name);
    //         console.log("age: ",value.age);
    //     });

    //     ForEach loops makes used of callback functions.
    //     Callback functions do not have any name and are called
    //     inside other functions to perform specific task.


// Break and Continue:
//    break: breaks the loop and moves to next statement after the loop.
//    continue: skips the current iteration and move to next iteration of the loop .

    
// Map Data Structure:
//  collection of unique key value pairs.
    // Example:
        // let  map1 = new Map();
        // map1.set('name1','Rohit');
        // map1.set('name2','Rohan');
        // map1.set('name3','Mohit');

        // for (const [key,value] of map1) {
        //     console.log(key,value);
        // }
    // Maps are not iterable as they don't have keys


// Filter, Map and Reduce.

//  1.  Filter: // filters a arrays by returning a condition statement
        // const books = [
        //     {title:'Book1',genre:'history',price:'$350'},
        //     {title:'Book2',genre:'action',price:'$150'},
        //     {title:'Book3',genre:'Geography',price:'$450'},
        //     {title:'Book4',genre:'adventure',price:'$550'},
        //     {title:'Book5',genre:'history',price:'$650'},
        //     {title:'Book6',genre:'history',price:'$250'},
        //     {title:'Book7',genre:'action',price:'$850'},
        // ];
        // const actionBooks = books.filter((bookitems,index,booksarray)=>{
        //     return bookitems.genre==="action";
        // })
        // console.log(actionBooks);

//  2. Map: // iterates over the entire array and may return new values
        //   const arr = [10,20,30,40,50,60,70,80,90];
        //   const newarr = arr.map((items,index,arrfull)=>{
        //     return items+10;
        //   })
        //   console.log(newarr);


//  3. Reduce: 
    //    const arr = [10,20,30,40,50,60,70,80,90];
    //    initialval = 0; 
    //    const newarr = arr.reduce((accumulatorval,currentval)=>{
    //       return accumulatorval + currentval;
    //    },initialval)

    //    console.log(newarr); //450 => Sum of all cart values + initial value
       
       //currentval => arr values;
       //accumulatorval => 1. First go => initialval
       //                  2. For rest => previous(accumulatorval + currentval) 



// chaining of Maps and filters.
    //   const arr = [1,2,3,4,5,6,7,8,9];
    //   const newarr = arr
    //                  .map((item)=>{return item*10}) //[10,20,30,40,50,60,70,80,90]
    //                  .map((item)=>{return item+10}) //[20,30,40,50,60,70,80,90,100]
    //                  .filter((item)=>{return item>50}) // [60,70,80,90,100]
   


   
   
