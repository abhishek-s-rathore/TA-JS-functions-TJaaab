/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name) {
  alert(`Helo ${name}`);
}

sayHello("John");
sayHello("Abhishek");

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName, lastName) {
  let fullName = firstName + "  " + lastName;
  return alert(fullName);
}

getFullName("John", "Snow");
getFullName("Nelson", "Mendela");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers() {
  let firstNum = +prompt(`Enter first Number : `);
  let secondNum = +prompt(`Enter second Number : `);

  if (isNaN(firstNum) === false && isNaN(secondNum) === false) {
    return alert(firstNum + secondNum);
  } else {
    return alert(`Enter a valid Input`);
  }
}

addTwoNumbers();

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc() {
  let numA = +prompt(`Enter first Number : `);
  let numB = +prompt(`Enter second Number : `);
  let operation = prompt(`Enter the Operation(add / sub / mul / div) : `);

  if (isNaN(numA) === false && isNaN(numB) === false) {
    switch (operation) {
      case "add":
        return alert(`Sum is ${numA + numB}`);
        break;

      case "sub":
        return alert(`Difference is ${numA - numB}`);
        break;

      case "mul":
        return alert(`Multiplication is ${numA * numB}`);
        break;

      case "div":
        return alert(`Division is ${numA / numB}`);
        break;
    }
  } else {
    return alert(`Enter a valid Input`);
  }
}

calc();

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isleapYear() {
  let year = +prompt(`Enter Year : `);

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

let print = isleapYear();

alert(print);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial() {
  let numb = +prompt(`Enter Number : `);

  let factorial = 1;
  for (var i = numb; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

let print = getFactorial();

alert(print);
