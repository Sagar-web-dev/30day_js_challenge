// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the comele 

const promise = new Promise((resolve,reject)=>{
setTimeout(()=>{
        resolve ("Task 1 Promise resolve in 2 second")
} , 2000)
})

promise.then((message)=>{
console.log(message);
});


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the errer using ratch
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       reject("Something bad happen")
    }, 2000)
})
promise2.catch((error)=>{
    console.log(error);
})


// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific arder

function fetchdata1(){
    return new Promise((res,rej)=> {
      setTimeout(()=>{
        console.log("Fetching data from server 1...");
        res("Data from server 1")
      },2000);
    })
  }
  
  function fetchdata2(){
    return new Promise((res,rej)=> {
      setTimeout(()=>{
        console.log("Fetching data from server 2...");
        res("Data from server 2")
      },2000);
    })
  }
  
  fetchdata1()
  .then(data1=>{
    console.log(data1);
    return fetchdata2();
  })
  .catch(error=>{
    console.log("Error",error);
  })

// another ex

const fetchData = (message, delay) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(message);
        resolve();
    }, delay);
})

fetchData("Fetching user data...", 1000)
    .then(() => fetchData("Fetching posts...", 1000))
    .then(() => fetchData("Fetching comments...", 1000))
    .then(() => console.log("All data fetched !"))


    // Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function logResolvedValue() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is the resolved message after 2 seconds.");
      }, 2000);
    });
  
    try {
      const resolvedValue = await myPromise;
      console.log(resolvedValue);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  logResolvedValue();

//   Another example
async function asyncFunction1() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 4: Promise resolved");
      }, 2000);
    });
  
    const result = await promise;
    console.log(result);
}
  
asyncFunction1();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function asyncFunction2() {
    const promise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 5: Promise rejected");
      }, 2000);
});
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}
  
asyncFunction2();

//  Another example

async function handleRejectedPromise() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("This is the error message after 2 seconds.");
      }, 2000);
    });
  
    try {
      const resolvedValue = await myPromise;
      console.log(resolvedValue);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  handleRejectedPromise();




//   Activity 4: Fetching Data from an API

//   Task 6: Use the fetch API to get data from a public API and log the responce data to the console using promises. 

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log("Task 6: Data fetched using promises", data);
})
  .catch(error => {
    console.error(error);
});

//  another way only syntax differ

// const apiUrl = 'https://api.publicapis.org/entries';
// function fetchData1(){
//   fetch(apiUrl)
//   .then(response=>{
//     if(!response.ok){
//       throw new Error(`HTTP error! status:: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data=>{
//     console.log('Response Data',data);

//   })
//   .catch(error=>{
//     console.log('Error',error);
//   })
// }

// fetchData1()




//   • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await

async function fetchData2() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log("Task 7: Data fetched using async/await", data);
    } catch (error) {
      console.error(error);
    }
}
  
fetchData2();


// Activity 5: Concurrent Promises

// Task 8: Use Promisecall to wait for multiple promises to resolve and then log all their values.

let first_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will be resolved first")
    }, 4000);
})


let second_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will be resolved last")
    }, 5000);
})


let third_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will surely be resolved")
    }, 6000);
})

Promise.all([first_promise, second_promise, third_promise])   // here we send multiple promises 
    .then(values => console.log(values))
    .catch(error => console.log(error))








// Task 9: Use Promise race to log the value of the first promise that resolves among multiple promises.


Promise.race([first_promise, second_promise, third_promise])
    .then(value => console.error(value))


    
const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log("Task 9: First promise resolved", value);
});



