// DOM(Document Object Model)
//    When the browser first loads and reads Html code 
//    it creates DOM, a tree like structure representing 
//    html code as a family tree. Then each HTML element 
//    is converted to dom node via brower.

//    Using the Dom nodes properties and methods(id,classname,tags), we 
//    can manipulate Dom nodes using javascript.

    //  Image: refer to dom1.jpeg 


// Selectors in Javascript:
//    Write after the Body the <script> tags in order to use Javascript. 

//   1. ById/className/TagName:
   
//         document.getElementById(idname); //By id
//         document.getElementsByClassName(className); //By classname, selects  elements having same classname in tempClasslist format(does not have a foreach atleast)
//         document.getElementsByTagName(TagName); //By Tagname, selects  elements having same Tagname in tempClasslist format(does not have a foreach atleast)
//         document.getElementById(idname).id;
//         document.getElementById(idname).className; //Behind the scenes browers potray it as classname
//         document.getElementById(idname).getAttribute(attributename); //attribute: id,class,etc.
//         document.getElementById(idname).setAttribute(attribute,newattributename); //always rewrites the attribute by new attributename
//         const idElement = document.getElementById(idname);
//         idElement.style.background='green'; // styling in css with js
//         idElement.textContent; // Returns the entire textcontent even if some texts are hidden by css properties
//         idElement.innerText; // Returns the entire inner text which is visible 
//         idElement.innerHTML; // returns the innerhtml along with innerText        
  
//   2. Byquerselector:
//         document.querySelector(htmlTag/'.classname','.idname'); //selects the 1st occurence of class and htmltags 
//         document.querySelectorAll(htmlTag/'.classname','.idname')// selects all elements having same Tagname,classnames in Nodelist(Has a foreach atleast) format 
//         const newIdElement = document.querySelectorAll(htmlTag/'.classname','.idname');
//         newIdElement[0].style.color='red'; //changing styles

// Convert Nodelist and tempClasslist into Array:
//         Array.from(Nodelist/tempClasslist); //converts them into array.
        

// Hierchy of Elememts:
//        const parents = document.querySelector('.heading');
//        parents.children; //returns a HtmlCollection(same like array) of child element
//        parents.firstElementChild; //returns first child element.
//        parents.lastElementChild; //returns last child element.
//        parents.parentElement //return the parent element.
//        parents.nextElementSibling // return sibbling Elements.
//        parents.childNodes // return Nodelist all elements

    //    Note: 
    //    <div class="Parent"> 1
    //      <div class="child1">child1</div> 2
    //      <div class="child2">child2</div> 2
    //      <div class="child3">child3</div> 2
    //    </div>
    //    childNodes = 7, 1 for element and 1 for linebreak


// Creating a Dom Element:
//     const divElement = document.createElement('div');
//     divElement.className = 'main';
//     divElement.id = 12;
//     divElement.setAttribute("title","generatedtitle"); 
//     divElement.innerText="Welcome Rohit";  
//     document.createTextNode('Rohit'); // Creates a Text 
//     document.body.appendChild(divElement);//attach element newly created element to HTMl body. 

// Optimizations:
//         const language = (langName)=>{
//             const langBody = document.querySelector('.language');
//             const newLang = document.createElement('li');
//             newLang.className = "newLang";
//             newLang.innerText = langName; // Here we have to parse through entire dom tree
//             langBody.appendChild(newLang);
//         }

//         const language2 = (langName)=>{
//             const langBody = document.querySelector('.language');
//             const newLang = document.createElement('li');
//             newLang.appendChild(document.createTextNode(langName)); // Here we don't have to parse the entire dom tree
//             langBody.appendChild(newLang);
//         }


// Editing and Removing Elements
//    const Element = document.querySelector('.home');
//    Edit:
//         1. Element.outerHTML = '<h1>Rohan</h1>';
//         2. const newElement = document.createElement('h1');
//             newElement.innerHTML="<h1>Rohan</h1>";
//             Element.replaceWith(newElement);//replace current element from the newElement
//    Remove:
//         Element.remove();//remove the selected Element



//    Getting values:
    //   const value = parseInt(document.querySelector('input').value) //to get input values in integer    



// Events:
//    TargetElement.addEventListener('event','callbackFunction');
    //   const Elements = document.querySelector('.button');
    //   Elements.addEventListener('event',(e)=>{
    //     console.log(e);
    //     console.log(e.target.id); //e is basically the event, e.target tells us about the origin of the event where its coming from. 
    //   })

