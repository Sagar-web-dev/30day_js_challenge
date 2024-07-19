// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 


let arr = [1,2,3,4,5];
// console.log(arr);



// • Task 2: Access the first and last elements of the array and log them to the console.


// console.log(arr[0]);
// console.log(arr[4]);
// let firstElement = arr.length-4;
// let lastElement = arr.length-0;
// console.log(firstElement);
// console.log(lastElement);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.


let arr1 = [1,2,3,4,5,6]
let pushArr = arr1.push(9);

// console.log(pushArr);
// console.log(arr1);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.


let popArr = arr1.pop();
// console.log(popArr);
// console.log(arr1);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
 

let arr2 = ['Chai', 'ginger tea', 'coffe', 'green tea']
let shift = arr2.shift()
// console.log(shift);
// console.log(arr2);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.


let unShift = arr2.unshift('Sagar like Chai');
// console.log(unShift);
// console.log(arr2);


// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.


let myArr = [2,4,6,7,8]
let newArr = myArr.map((e)=>{
    return e * 2;
})

// console.log(newArr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.


let evenNumber = [2,3,4,5,6,7,8,9,10]
let numberEven = evenNumber.filter((even) => even %2 === 0)


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let arr4 = [2,44,5,6,7,10]
let sumArray = arr4.reduce((acc, cc)=>{
    return acc + cc


})

// console.log(sumArray);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

let superHeros = [55,99,66,44,1,45]
for (let i = 0; i < superHeros.length; i++) {
    const element = superHeros[i];
    
    // console.log(element);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

let forLoop = ["Sagar","RAM","CP"]
forLoop.forEach(element => {
    console.log( ` length of each element ${element} =`, element.length);
    // console.log(element.indexOf("Sagar"));
});



// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDiarr = [
    [10, 20, 30, 40, 50],
    [11, 12, 13, 14, 15]
]
console.log(twoDiarr);

let twod = [["Sagar",'ME'], ["Cp","MY friend"],["Abhi","My Chunk Friend"]]
console.log(twod);
console.table(twod)
console.table(twod.push(["Aman","My School Friend"]))
console.table(twod);

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(twod[1][1]);
console.log(twod[1]);









