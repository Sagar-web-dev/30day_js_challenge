// Tasks/Activities:

// Activity 1: For Loop

// Task 1: White a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

// Task 2: White a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <=10; i++) {
    const element = i*5;
    // console.log(` table of ${i}* 5 : ${element}`);
    
}

// Activity 2: While Loop

// Task 3: White a program to calculate the sum of numbers from 1 to 10 using a while loop. 

let num = 1;
let sum = 0;
while(num <= 10){
    sum += num;
    num ++;
}
console.log(sum);


// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let number = 10;
while (number >= 1) {
//    console.log(number);
    number--
}

// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let i = 1
do {
    console.log(i);
    i++
} while (i<=5);



// Task 6: White a program to calculate the factorial of a number using a do...while loop.

let num1 = 5

let factorial = 1
do{
    if(num1==0){
        break
    }
    factorial*=num1
    num1-=1
}while(num1>0)

console.log("Factorial:",factorial)


// Activity 4: Nested Loops

// Task 7: White a program to print a pattern using nested for loops:


let sagar = 5;
for (let i = 0; i < sagar; i++) {
   let star = "*";
   for(let j = 1; j <= i; j++){
    star += '*';
}
console.log(star)
    
}



// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.


for (let i = 1; i <= 10; i++) {
  if(i == 5){
    continue
  }
  console.log(i);
    
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
   if(i == 7){
    break
   }
   console.log(i);
    
}