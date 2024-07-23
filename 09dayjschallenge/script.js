let task1 = document.getElementById("one");

task1.innerText = "sagar";

// let task2 = document.getElementsByClassName("two");
let task2 = document.querySelector(".two")

task2.style.backgroundColor = "blue";

let task3 = document.querySelector("#three");

//  let task31 = task3.innerText = "Welcome to the world of js";  // not a right method 
//   task3 += task31

  let sagar=document.createElement("div");
  let sagar1=document.createElement("h1");
  sagar1.innerText="Creating new element using JS and appending it to the body";
  sagar.appendChild(sagar1)
  document.body.appendChild(sagar);

// Task 4 
let sr = document.querySelector("#four");

let sr1 = document.createElement('li');
sr1.innerText = "Apple";

let sr2 = document.createElement("li");
sr2.innerHTML = "Banana";

sr.appendChild(sr1);
sr.appendChild(sr2);

// Task 5

let task5 = document.querySelector("#five");
task5.remove();

//task 6 

let task6 = document.querySelector("#six");

task6.lastElementChild.remove()  

// task 7 

let task7 = document.querySelector("#img");
task7.setAttribute("src","https://images.unsplash.com/photo-1721048149858-139c52892fc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8")

//  Task 8
console.log(document.getElementById("task8").classList.remove("task81"));

// Select the element to add and remove the class from
const element = document.querySelector('.classElement');

// Add a CSS class to the element
element.classList.add('newClass');

// Remove the CSS class from the element
element.classList.remove('oldClass');


//  Task 9

let task9 = document.querySelector("#task9");
let btn = document.querySelector("#task9Change");

btn.addEventListener('click', ()=>{
    console.log("sagar");
    task9.innerHTML = "Content Change AAyela jadu";
})

// task 10

let task10 = document.querySelector("#task10");
task10.addEventListener("mouseover", ()=>{
    console.log("change")
    task10.style.borderColor = "black"
})



