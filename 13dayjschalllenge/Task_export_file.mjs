// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

function addNumber(a,b){
    console.log("The sum",a+b)
}

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

let person = {
    'name':"Dhayasankar",
    'age':45,
    'city':"Mumbai",
    getDeatils: function(){
        return this.name+","+this.age+","+this.city
    }
}


// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function remainder(a,b){
    return a%b
}

function muliplication(a,b){
    return a*b
}

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

function divison(a,b){
    return a/b
}

// export default divison


// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const Name = "Krishna"

const course = "BCA"

function getAddress(){
    console.log(`Address is:ShantiNagar Kolata`)
}

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.


import lodash from 'lodash'
let arr = [1,2,3,4,5]

console.log("using chunk method",lodash.chunk(arr,1))

arr = [0,false,2,5,7,8]

console.log("using compact method",lodash.compact(arr))

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios  from 'axios'

axios.get("htps://dog.ceo/api/breeds/image/random").then((res)=>{
    console.log("Result",res.data)
}).catch((err)=>{
    console.log("Error:",err.message)
})




export {
    addNumber,
    person,
    remainder,
    muliplication,
    divison,
    Name,course,getAddress
}