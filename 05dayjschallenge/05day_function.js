// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console. 


let num = 7;
function checkEvenOdd(num) {
    if (num%2 === 0) {
        console.log(`Number ${num} is even `);
    }else{
        console.log(`Number ${num} is odd `);

    }
}

console.log(checkEvenOdd(3));
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(num));


// Task 2: Write a function to calculate the square of a number and return the result.

function findSquare(num1) {
    let square = num1 * num1;
    return square;
    
}

console.log(findSquare(2));
console.log(findSquare(11));


// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// /*
// A function expression is something like:

// const functionName = function(parameters) {
//     // Function body
// };


const findMaxAndMin = (num1,num2) =>{
  if (num1>num2) {
    console.log(`${num1} maximum than number ${num2}`);
  } else {
    console.log(`${num1} minimum than number ${num2}`);
    
  }
}
console.log(findMaxAndMin(44,88));
console.log(findMaxAndMin(99,33));

// Task 4: Write a function expression to concatenate two strings and return the result.

function concateString(str1, str2) {
     return `The concated string after concatenation of ${str1} and ${str2} is ${str1.concat(str2)}`
}


console.log(concateString("Sagar","Rahangdale"));



// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.


let fatArrow = (num1,num2)=>{
     let sum = num1 + num2;
     return `Sum of number ${num1} and ${num2} is ${sum}`
}

console.log(fatArrow(44,44));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let checkChar = (str,char)=>{

    return `${str.includes(char)}`
}

console.log(checkChar("Sagar" , "s"));
console.log(checkChar("Sagar" , "S"));

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.


function prod(num1, num2 = 10) {
    return num1 * num2
}
console.log(prod(9))


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.


function greet(name, age = 20) {
    return `Hello, Mr. ${name}. I'm  ${age} year old .`
}
console.log(greet("Yaman"))

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const higerOrderFunction = (funct, number) => {
    for (let i = 0; i < number; i++) {
      console.log(funct());
    }
  };
  
  const printName = () => {
    return "Sagar Rahangdale";
  };
  
  higerOrderFunction(printName, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const higherOrderFunction = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
  };
  
  const addFive = (num) => num + 5;
  const multiplyByTwo = (num) => num * 2;
  
  const initialValue = 10;
  console.log(higherOrderFunction(addFive, multiplyByTwo, initialValue));

