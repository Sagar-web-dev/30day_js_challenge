// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.


let task1 = function sagar1(){
    let a = 5;
    let b = 6;

    try {
        if (typeof a !== 'number') {
            throw new Error(`${a} is not a number. It is of type: ${typeof a}`);
        } else if (typeof b !== 'number') {
            throw new Error(`${b} is not a number. It is of type: ${typeof b}`);

        } else {
            // Perform the operation if both a and b are numbers
            console.log(a + b * x); // This will still throw an error because 'x' is not defined
        }
    } catch (error) {
        console.log("An Error Occured:", error.message);
    }
}
task1();

// Task 2
// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

let task2 = function sagar2(a , b) {
    // let a = 12;
    // let b = 12;

    
    try{
        if (b === 0) {
            throw new  Error( `${b} is smaller or less tha 0`)

        }else{
           return a / b;
        }
    }
    catch(error){
        console.log(error);
    }
    
}

// task2(12,0);
task2(12,0);


// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log("In the Try block");
    let error = true;
    if (error) {
      throw "Error!";
    }
  } catch (e) {
    console.log("In the Catch block");
    console.log(e);
  } finally {
    console.log("In the Finally block");
  }



//   Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// Define a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent Error class constructor with the message
        this.name = "CustomError"; // Set the name property to the name of the custom error class
    }
}

// Function that throws an instance of the custom error
function riskyFunction() {
    try {
        // Simulate a condition that causes an error
        let condition = true; // Set this to true to trigger the error

        if (condition) {
            throw new CustomError("Something went wrong in the risky function!");
        }

        console.log("Function executed without errors.");
    } catch (error) {
        if (error instanceof CustomError) {
            console.log(`Caught a CustomError: ${error.message}`);
        } else {
            console.log(`An unexpected error occurred: ${error.message}`);
        }
    }
}

riskyFunction();

// 2nd example
class myCustomError extends Error {
    constructor(msg) {
      let errMsg = "";
  
      switch (msg) {
        case "1":
          errMsg = "Database not found.";
          break;
  
        case "2":
          errMsg = "Database cannot open.";
          break;
  
        default:
          errMsg = msg;
          break;
      }
  
      super(msg);
      this.name = "Custom Error";
      this.message = errMsg;
    }
  }
  
  function showCustomError() {
    try {
      console.log("Custom Error Handling:");
      throw new myCustomError("1");
    } catch (err) {
      console.error(err.name, err.message);
    }
  }
  
  showCustomError();


// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block


function ValidateUserInput(inputVal) {
    try {
      if (!inputVal || inputVal.trim() === "") {
        throw new myCustomError("Input cannot be empty.");
      } else {
        console.log("Valid input.");
      }
    } catch (err) {
      console.error(err.name, err.message);
    }
  }
  
//   ValidateUserInput(" ");
ValidateUserInput("1");



// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. •

function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 11 + 1);
            if (randomNum >= 5) {
                resolve("Promise resolved.");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000);
    });
}

randomPromise()
.then((resolution) => console.log(resolution))
.catch((error) => console.error(error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function randomPromiseAsync() {
    try {
      const response = await randomPromise();
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  randomPromiseAsync();

//   another example
// Function that returns a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("The promise was resolved successfully!");
            } else {
                reject(new Error("The promise was rejected."));
            }
        }, 1000);
    });
}

// Async function to handle the promise
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}

// Call the async function
handleRandomPromise();



// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.
fetch("https://apii.github.com/users/Sagar-web-dev")
  .then((response) => {
    console.log(
      "Error Handling using .catch(): fetch api to request data from an invalid URL"
    );
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));



  // Function to fetch data from an invalid URL
function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data";

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                // If the response is not OK, throw an error
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
        })
        .catch(error => {
            // Handle any errors that occurred during fetch
            console.error("Fetch error:", error.message);
        });
}

// Call the function to initiate the fetch request
fetchData();


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.


async function fetchDataAsync() {
    try {
      console.log(
        "Error Handling in asunc function using try-catch block: fetch api to request data from an invalid URL"
      );
  
      const response = await fetch(
        "https://apii.github.com/users/Sagar-web-dev"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAsync();



  async function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data";

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            // If the response is not OK, throw an error
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON data
        console.log("Data fetched successfully:", data);
    } catch (error) {
        // Handle any errors that occurred during fetch
        console.error("Fetch error:", error.message);
    }
}

// Call the function to initiate the fetch request
fetchData();