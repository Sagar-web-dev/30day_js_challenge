// DAY 7: OBJECTS

// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

let obj = {
    username :"Sagar",
    email : "sagar@gmail.com",
    phno : 9094321,
}
console.log(obj);
console.log(typeof obj.phno);
console.log(`Person ${obj.username} an his ${obj.email} and phone nuber ${obj.phno}`);


// ctivity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book={
    title:"Attitude is Everything.",
    author:"Jeff Keller",
    year:"2021"
}
book.details  = function () {
     return `title name of book is ${book.title} and Author name is ${book.author}`
}
console.log(book.details());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const book1={
    title:"Attitude is Everything.",
    author:"Jeff Keller",
    year:"2021",
    
}
book1.get_update_year = (year)=>{
    this.year = year
    console.log(`the updated year of the book ${book1.title} is ${year}`);
   }

console.log(book1);
book1.get_update_year(2015);


// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
 

let library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
      },
      {
        title: "1984",
        author: "George Orwell",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
      },
    ],
  };
  
  console.log(library);

//  Task 6: Access and log the name of the library and the titles of all the books in the library.
// 1st method
console.log(library.name);
library.books.forEach(element => {
    console.log(element.title);
});


// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let book3 = {
    title: "Harry Potter",
    author: "J.K Rowling",
    year: 1997,
  };
  
  book3.get_title_year = function () {
    return `the name of the title is ${this.title} and the year is ${this.year}`;
  };
  
  console.log(book3.get_title_year());


//   Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.


for (const key in book3) {
   console.log(`${key}: ${book3[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

let keys = Object.keys(book3);

let values = Object.values(book3);

for (let i = 0; i < keys.length; i++) {
  console.log(`the value of key${i} is ${keys[i]} `);
}

for (let i = 0; i < values.length; i++) {
  console.log(`the value of value${i} is ${values[i]} `);
}



