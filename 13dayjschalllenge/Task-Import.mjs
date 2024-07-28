import {addNumber,person,muliplication,remainder,divison} from './Task_export_file.mjs'  
  


// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

addNumber(4,5)


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

console.log("Object:",person.getDeatils())


// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.


console.log("Remainder",remainder(20,100))

console.log("Multiplication",muliplication(34,8))

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.


console.log("Division:",divison(140,30))


// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as obj from './Task_export_file.mjs'
console.log("Name,course and grade",obj.Name,obj.course)
obj.getAddress()


