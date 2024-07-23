// Task 1

let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    btn.innerHTML = "EXPLORE ME"
})


//  TAsk 2

let img = document.querySelector("#img");
img.addEventListener("dblclick", ()=>{
    // img.style.display = img.style.display === 'none' ? 'block' : 'none';
    if(img.style.display==="none"){
        img.style.display='block'
    }else{
        img.style.display='none'
    }
})

// TAsk 3

let bgColor = document.querySelector("#bgChange");

bgColor.addEventListener("mouseover",()=>{
    console.log("sagar");
    bgColor.style.backgroundColor = "red"
})

//  Task 4
bgColor.addEventListener("mouseout",()=>{
    console.log("ram");
    bgColor.style.backgroundColor = "aquamarine"
})

// Task 5t
const fullname=document.querySelector('#text-input')
fullname.addEventListener('keydown', function(e){
    console.log(`Key Pressed: ${e.key}`);
})

//  task 6

let textInput=document.querySelector('#up-input')
let paragraph=document.querySelector('#para')
textInput.addEventListener('keyup', function(){
    paragraph.textContent=textInput.value
})

// Task 7
let data = document.querySelector('#form');
data.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    let changedata = new FormData(e.target);
    const finaldata = Object.fromEntries(changedata.entries());
    console.log(finaldata);
});


// task 8
const item=document.querySelector('#items')
const displaypara=document.querySelector('#para')
item.addEventListener('change', function(e){
    // const value=e.target.value
    displaypara.textContent=`you have Selected value ${e.target.value}`
})

// Task 9
const items=document.querySelector('#listItem')
items.addEventListener('click', function(e){
    console.log(`your click item is ${e.target.textContent}`)
})


// Task 10

const parent=document.querySelector('.parent')
const addChild=document.querySelector('#childAdd')
parent.addEventListener('click',function(e){
    console.log('clicked child element text content',e.target.textContent);
})

addChild.addEventListener('click', function(){
    const newChild=document.createElement('div')
    newChild.classList.add("childEle")
    newChild.textContent='This is new child element'
    parent.appendChild(newChild)
})