// Activity 1: Arithmetic Operations
// Task 1

let num1 = 99;
let num2 = 101;
let total = num1 + num2;
console.log('Sum of num1 and num2', total);
// Task 2:

let sub1 = 30;
let sub2 = 20;
let subtract = sub1 - sub2;
console.log(`Subtraction of ${sub1} and ${sub2} is : ` , subtract);
// Task 3:

let multi1 = 11;
let multi2 = 23;
let multiply = multi1 * multi2;
console.log(`Multiplication of ${multi1} and ${multi2} is : ` , multiply);
// Task 4:

let divi1 = 34;
let divi2 = 3;
let division = divi1 / divi2;
console.log(`division of ${divi1} and ${divi2} is : ` , division);

// Task 5:

let remain1 = 34;
let remain2 = 3;
let reminder = remain1 % remain2;
console.log(`reminder of ${remain1} and ${remain2} is : ` , reminder);
// Activity 2: Assignment Operators

// Task 6:

let addnum = 55;
addnum += 30;
console.log( addnum);

// Task 7:

let subtNum = 55;
subtNum -= 30;
console.log( subtNum);
// Activity 3: Comparison Operators

// Task 8:

let comNUm1 = 34;
let comNUm2 = 36;
console.log(` ${comNUm1} less than  ${comNUm2}   : ` , comNUm1 < comNUm2 );
console.log(` ${comNUm1} less than  ${comNUm2}   : ` , comNUm1 > comNUm2 );

// Task 9:

let number1 = 34;
let number2 = 36;
console.log(` ${number1} less than equal to   ${number2}   : ` , number1 >= number2 );
console.log(` ${number1} less than  ${number2}   : ` , number1 <= number2 );


// Task 10:

let newnum1 = 34;
let newnum2 = "36";
console.log(` ${newnum1} ==  is check only value   ${newnum2}   : ` , newnum1 == newnum2 );
console.log(` ${newnum1} === its check datatype and value  ${newnum2}   : ` , newnum1 === newnum2 );

// Activity 4: Logical Operators

// Task 11
let isLoggedIN = true;
let isLoggedOut = false;

console.log("here both the condition should be true condition", isLoggedIN && isLoggedOut);

// Task 12  or (||) operator

console.log(" here only one condition be true", isLoggedIN || isLoggedOut);

//  Task 13

console.log( `IT change the value or negate the of isLoggedIN which is  ${isLoggedIN} :`,!isLoggedIN);

// Activity 5: Ternary Operator

//  Task 14:

let gameCoins = 3000;
console.log(gameCoins>=2500 ? "You unlock the level" : "IF not than u can not unlock the level");

// Feature Request:

// No 1:

let a = 55;
let b = 33;
let c = "44";
let d = 44;
console.log(`Additon of a : ${a} and b : ${b} = `, a + b);
console.log(`Subtraction of a : ${a} and b : ${b} = `, a - b);
console.log(`Division of a : ${a} and b : ${b} = `, a / b);
console.log(` Multiplication of a : ${a} and b : ${b} = `, a * b);
console.log(` Reminder of a : ${a} and b : ${b} = `, a % b);

// No 2:

console.log("a += b: " + (a += b));
console.log(" a is greater than b  = " , a > b);
console.log(" a is greater than b  = " , a < b);
console.log(" a is greater than b  = " , a == b);
console.log(" it check value only   = " , c == d);
console.log(" ${c} is greater than or equalto ${d}  = " , c >= d);
console.log(" ${d} is greater than or equalto ${c}  = " , c <= d);

//  No 3:
let num = 2;
const result = (num > 0) ? "positive": (num == 0) ? "zero" : "negative"
    console.log(`Number ${num} is ${result}`);







