// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
//      string interpolation with embedded expressions, and special constructs called tagged templates.

// `string text ${expression} string text`

let pName = "Sagar";
let age = 22;
let person = `Tne name of person is ${pName} and his age is ${age}`
console.log(person);


// Task 2: Create a multi-line string using template literals and log it to the console.
let sciece = "Science"
let multiLiner = `It is the age of ${sciece} 
and there is many wonders of ${sciece}`
console.log(multiLiner);

// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 
let arr=[1,2,3,4,5]
let [a , b] = arr   // this is [a,b] is array destructuring
console.log(`a : ${a} , b : ${b}`);

const [num1, num2] = [1, 2, 3, 4, 5];
console.log(num1, num2);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title:"The story of TATA",
    author:"Peter Casey"
   }
   const {title,author} = book   // like this {title,author we do object destructuriing}
   console.log(`Book's title : ${title} , Book's author : ${author}`);

//    Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of fan existing array plus additional elements, and 


let arr1 = [1,2,3,4,5,6]
let spreadOp = ["Sagar","Ram" , ...arr1]
console.log(spreadOp);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. log the new array to the console.
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//  providing a way to represent variadic functions in JavaScript.

let rest = (...arg)=>{
    return arg.reduce((acc,cv)=> acc + cv , 0)
}
console.log(rest(1,4,5,6));


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


const product = (num1, num2=1) => {
    return num1 * num2;
}

const result = product(10);
console.log(result);

const newResult = product(10, 20);
console.log(newResult);


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.


const myObject = {
    property1: 'value 1',
    property2: 'value 2',
    method1() {
        console.log('This is method 1')
    },
    method2() {
        console.log(`this is method 2`);
    }
};

console.log(myObject);

// • Task 9: Create an object with computed property names based on variables and log the object to the console.

// Using Computed Property Names
// To use a computed property name, wrap the variable or expression in square brackets [] within the object literal:

const propName1 = 'name';
const propName2 = 'age';

// Create an object with computed property names
const personJo = {
  [propName1]: 'John Doe',
  [propName2]: 30
};

// Log the object to the console
console.log(personJo);
