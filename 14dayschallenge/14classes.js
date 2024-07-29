// Day 14: Classes

// Tasks/Activities:

// Activity 1: Class Definition:

// Task 1: Define a class Person with properties new and e, and a method to return a greeting message. Create an instance of the class and lng the geeting message.


class Person{
  constructor(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email
  }

  greet(){
    console.log(`name of the username ${this.name}`);
  }
  static greetMssg() {
    return `Good evening friends! Want some coffee?`;
}
  static email(){
    console.log(`email of the usernmae : ${this.email}`);
  }
}

const p = new Person("sagar",88,"Sagar@gmail.com");
console.log(p.greet());
// console.log(p.email());



//  Task 2: Add a method to the Person class that updates the age property and logs the u updated age.

console.log(`the current age of the username is ${p.age}`);  // here the age was 88

Person.prototype.updateAge = function (){
    this.age += 5;
    return `My updated age is ${this.age}`
}
console.log(p.updateAge());

// here mujhe fat arrow me error aa aa rahi thi 

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student 

class Student extends Person {
    static studentCount = 0;

    constructor(name,age , studentId){
        super(name,age);
        this.studentId = studentId;
        Student.studentCount++
    }

    getStudentId() {
        return `The id of student is ${this.studentId}`;
    }

    greet() {
        return `Hello ${this.name}, your id is ${this.studentId}. Good to see you again!!`;
    }
}

const student = new Student('John', 20, '123');
console.log(student.getStudentId()); //The id of student is 123



// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

const person = new Person('Ankit', 25);
console.log(person.greet()); //Hello Ankit, Good Morning dear!!

const stu = new Student('Amar', 23, '100');
console.log(stu.greet()); //Hello Amar, your id is 100. Good to see you again!! (Overriden method)

/* 

Note : 

- When greet is called on an instance of Person, it uses the Person class's greet method.

- When greet is called on an instance of Student, it uses the Student class's greet method, which overrides the one from Person.

*/


// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

const mssg = Person.greetMssg();
console.log(mssg); //Good evening friends! Want some coffee?




//  Task 6: Add a static property to the Stuaint class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.


const student1 = new Student('Karan', 28, '4352');
const student2 = new Student('Nijjar', 23, '8331');
const student3 = new Student('Hargun', 30, '7065');

const totalStudents = Student.studentCount;
console.log(`The total number of students are ${totalStudents}`); //The total number of students are 5



// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firsttons and lastane property). Create an instance and log the full name using the getter.


class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [ firstName, lastName ] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const per = new Person2("Sandeep", "Wadhawan");
console.log(`The full name is ${per.fullName}`); //The full name is Sandeep Wadhawan





//  Task 8: Add a setter method to the Person class to update the name properties (firsthare and lasthase). Update the name using the setter and lng the updated full name,

class Person3 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter method for full name
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter method to update the name properties
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  // Create an instance of the Person class
  const person3 = new Person3('John', 'Doe');
  
  // Log the full name using the getter
  console.log(person3.fullName);  // Output: John Doe
  
  // Update the name using the setter
  person3.fullName = 'Jane Smith';
  
  // Log the updated full name using the getter
  console.log(person3.fullName);  // Output: Jane Smith
  

//   In this example:

// The Person class has a constructor that initializes firstName and lastName.
// A getter method fullName is defined to return the full name.
// A setter method fullName is defined to update firstName and lastName based on the provided full name string.
// An instance of the Person class is created with initial values 'John' and 'Doe'.
// The full name is logged to the console.
// The setter is used to update the name to 'Jane Smith'.
// The updated full name is logged to the console.




// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    // Private field named 'balance'
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.error(`Deposit amount must be positive`);
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                console.error(`Insufficient Withdrawal amount`);
            }
        } else {
            console.error(`Withdrawal amount must be positive`);
        }
    }

    getBalance() {
        return `The total balance is ${this.#balance}`;
    }
}

// Task 10 : Create an instance of Amount class and test the deposit and withdraw methods.

const acc = new Account(180);

acc.deposit(50);
console.log(acc.getBalance()); // The total balance is 230

acc.withdraw(40);
console.log(acc.getBalance()); // The total balance is 190

acc.withdraw(300); // Insufficient Withdrawal amount
console.log(acc.getBalance()); // The total balance is 190







// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, ingging the balance after each operation.
