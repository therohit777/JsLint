// // Strings
//    const name = "Rohit";
//    const Name = new String("Rohit"); 
//    make character object of String.
//    {
//     0:'R',
//     1:'o',
//     2:'h',
//     3:'i',
//     4:'t',
//    }

// // String Interpolation
//    const names = "Rohit";
//    console.log(`${names} is a good boy`); 

// // String Methods
//    const Name = new String("Rohit"); 

//    1. Access character: Name[0]
//    2. String length:    Name.length 
//    3. uppercase:        Name.toUpperCase()
//    4. lowercase:        Name.toLowerCase()
//    5. character index:  Name.charAt(index)
//    6. add string:       Name.concat('Pandey');
//    7. find position of 
//       character:        Name.indexOf('R')
//    8. Substring:        Name.substring(startindex, endindex); //end index is not inclusive
//                         Name.slice(start,end); // Same as substring but we can also use negative values here
//    9. Trim:             Name.trim() //Removes starting or ending spaces or newline only
//    10. Replace:          Name.Replace('substring insdie name', 'new string as it replacer')
//    11.check whether:    Name.includes("hit")
//       substring is 
//       present or not

//    12. Conversion of:   Name.split(spilliting charater) 
//        String into      const address = "I am from india"
//        array of         console.log(address.split(' ')); => ['I', 'am', 'from', 'india']
//        substrings


// // Number
//    const id1 = 120;
//    const id2 = new Number(120); =>[Numer: 120] output

// // Number Methods
//    const num = 10;

//    1. string conversion: num.toString();
//    2. precision valueL:  num.toFixed(2); => 10.00
//    3. conversion to:     num.toLocaleString('en-IN')
//       India format

// // Maths Methods
//    1. Conersion to:     Math.abs(-10) => 10
//       positive values
//    2. Round off:        Math.round(4.6) => 5
//    3. upper bound:      Math.ceil(4.2) =>5
//    4. lower bound:      Math.floor(4.2) =>4
//    5. square root:      Math.sqrt(25) =>5
//    6. max value:        Math.max(1,2,3,4,5) =>5
//    6. min value:        Math.min(1,2,3,4,5) =>1
//    7. random values:    Math.random() // gives random values between 0 to 1

//    //Note: To get random values within a range:
//      const min = 10;
//      const max = 30;
//      consol.log(Math.floor(Math.random()*(max-min+1))+min);
//      Math.floor( Math.random() * (max - min + 1)) + min => gives random values within a Range.END_TO_END






// // Date and Time
//    let myDate = new Date() //declaration
//    let myDates = new Date('01-12-2023') //declaration
//    typeof myDate //Object, In js month starts from 0

// // Date and  Time methods
//    1. Get timestamp:  myDate.getTime() //gives time in millisecond values
//    2. Get current:    Date.now()
//       timestamp
//    3. Get timestamp:  Date.now()/1000
//       in seconds
//    4. Get month:      myDate.getMonth() + 1;
//    5. Get Day:        myDate.getDay()

//    Note:
//    Date in milliseconds is used to know in 
//    fastest fingerfast in Kbc or at time of 
//    booking stays at Airbnb.
   



   

// // Arrays
//    1. collection of items of different datatypes
//    2. resizable by its own in javascript.
//    3. does shallow copy 
//    4. 0 based indexing
//    5. Accessing: arrayname[indexvalue] 
//    const arr = [1, 2, 3, 4, 5, true, 'Rohit']; //Declaration
//    const arr2 = new Array(1, 2, 3, 4, 5); //Declaration

// // Array Methods:
//    1. Add items at end:   arr.push(10);
//    2. delete last item:   arr.pop();
//    3. Add items start:    arr.unshift(10);
//    4. Del first item:     arr.shift();
//    5. check items 
//       present or not:     arr.includes(4); //true
//    6. Get index:          arr.indexOf(3); //2, -1 if not exists
//    7. Convert to string:  arr.join(); // "1,2,3,4,5" => String
//    8. Get subarray:       arr.slice(start,endindex); //here end index is not included
//    9. Get subarray        arr.splice(start,endindex); //end index is inclusive
//       and remove its
//       subarray part from 
//       original array.
//    10.merge two arrays:   arr1.concat(arr2);
//       and return new
//       array


//    Note:
//      Slice                      vs    Splice
//      1.Last index exclusive           1.Inclusive
//      2.Original array is not          2.Original arrays subarray/splice  
//        modified.                        part is removed.
//
//      arr1.push(arr2) => [1,2,3,[4,5,6]] //as array in js can store different datatypes together
     

// //Spread Operator    
//    It opens the existing Array (...)
//    example:
//    const arr1 = [1,2,3];
//    const arr2 = [4,5,6];
//    const arr3 = [...arr1,...arr2]; // => [1,2,3, 4,5,6];

// // Want to remove arrays inside arrays.
//    const arr4  = [1,2,3,[4,5,6,[7.8,9]],[10]];
//    arr4.flat(Infinity); //Infinity is the depth of subarrays inside array => [1,2,3,4,5,6,7,8,9]

// // Array check and creation
//    1. Array check:     Array.isArray(arr1) //true
//    2. array create:    I Array.of(100,200,300); //[100,200,300]
//                       II Array.from(10,20);
                      
//    Note: Array.of({socre1:100}); // Gives empty array as we have define that we have to create keys a array.


    



