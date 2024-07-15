// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1

// let num = 22;
let num = -22;

if (num > 0) {
    console.log(`${num} is positive :  `);
} else if (num === 0) {
    console.log(`${num} is positive :  `)
}
else {
    console.log(`${num} is negative :  `)
}

// Task 2

let age = 24;
if (age > 18) {
    console.log(`Eligible for the voting`);
}
else {
    console.log(` Not Eligible for the voting`);

}
// Activity 2: Nested If-Else Statements
// Task 3

let a = 44;
let b = 303;
let c = 99;

if (a > b && a > c) {
    console.log(`a: ${a} is largest number than b : ${b} and c: ${c} `);
} else if (b > c && b > a) {
    console.log(`b: ${b} is largest number than a : ${a} and c: ${c} `);
} else {
    console.log(`c: ${c} is largest number than a : ${a} and b: ${b} `);
}

// Activity 3: Switch Case

// Task 4:

let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;


    default:
        console.log("All days covered here");
        break;
}

// Task 5:

let grade = "C";
switch (grade) {
    case "A":
        console.log("Passed with grade A");
        break;
        case "B":
        console.log("Passed with grade B");
        break;
        case "C":
        console.log("Passed with grade C");
        break;
        case "D":
        console.log("Passed with grade D");
        break;
        case "E":
        console.log("Passed with grade E");
        break;


    default:
        console.log("All number or the grade covered here");
        break;
}

// Task 5 with the help of function

function checkGrade(grade) {
    switch (true) {
        case (grade>= 85 && grade <= 100):
             console.log(`${grade} you obtained SO you passed with the grade A`);
            break;
            case (grade>= 75 && grade < 85):
             console.log(`${grade} you obtained SO you passed with the grade B`);
            break;
            case (grade>= 65 && grade < 75):
             console.log(`${grade} you obtained SO you passed with the grade C`);
            break;
            case (grade>= 53 && grade < 65):
             console.log(`${grade} you obtained SO you passed with the grade D`);
            break;
            case (grade>= 40 && grade < 53):
             console.log(`${grade} you obtained SO you passed with the grade E`);
            break;
    
        default:
            console.log("Student Failed in exam ");
            break;
    }
}

checkGrade(89);
checkGrade(59);
checkGrade(79);
checkGrade(39);
checkGrade(309);


// Activity 4: Conditional (Ternary) Operator

// Task 6:

function checkEvenorOdd(num){
    return ( num %2 ===0)? console.log("Number is even"): console.log("Number is Odd")
}

checkEvenorOdd(34);
checkEvenorOdd(31);
checkEvenorOdd(99);
checkEvenorOdd(100);

// Activity 5: Combining Conditions


// Task 7
function checkYearLeap(year){

    
    if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
      console.log(`The Year ${year}  You Chose is a LEAP YEAR`);
    } else {
      console.log(`The Year ${year} You Chose is NOT a LEAP YEAR`);
    }
}

checkYearLeap(2024)
checkYearLeap(2025)
checkYearLeap(2026)
checkYearLeap(2027)
checkYearLeap(2028)
  
