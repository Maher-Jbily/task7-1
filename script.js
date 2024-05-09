// -------1-------
var n1 =7
var n2 =8
var n3 =5
function findMaxAndMin(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  
  console.log("Max = " + max);
  console.log("Min = " + min);
}
findMaxAndMin(n1,n2,n3);







function findMaxMin(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  
  console.log("Max = " + max);
  console.log("Min = " + min);
}

let number1 = parseInt(prompt(" Insert first number:"));
let number2 = parseInt(prompt(" Insert second number:"));
let number3 = parseInt(prompt(" Insert third number: "));
findMaxMin(number1, number2, number3);
  
// -------2------

function checkIfVowel(character) {
  let vowels = 'aeiouAEIOU';
  if(vowels.indexOf(character) !== -1) {
    console.log(character + ' is vowel');
  } else {
    console.log(character + ' is consonant');
  }
}
let character1 = prompt("Insert character:");
checkIfVowel(character1)

// ------3-------

let number = parseInt(prompt("Enter an integer:"));

console.log("Multiplication table for: " + number);
for(let i = 1; i <= 12; i++) {
  console.log(number + " * " + i + " = " + (number * i));
}

// -------4------

let userNumber = parseInt(prompt("Please enter a number:"));

console.log("Even numbers between 1 and " + userNumber + ":");
for(let i = 1; i <= userNumber; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

// -------5------

let subject1 = parseInt(prompt("Enter marks for Subject 1: "));
let subject2 = parseInt(prompt("Enter marks for Subject 2: "));
let subject3 = parseInt(prompt("Enter marks for Subject 3: "));
let subject4 = parseInt(prompt("Enter marks for Subject 4: "));
let subject5 = parseInt(prompt("Enter marks for Subject 5: "));

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let averageMarks = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;

console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + '%')

// ---------6------

let physics = parseInt(prompt("Enter marks for Physics: "));
let chemistry = parseInt(prompt("Enter marks for Chemistry: "));
let biology = parseInt(prompt("Enter marks for Biology: "));
let mathematics = parseInt(prompt("Enter marks for Mathematics: "));
let computer = parseInt(prompt("Enter marks for Computer: "));

let totalMarks1 = physics + chemistry + biology + mathematics + computer;
let percentage1 = (totalMarks1 / (5 * 100)) * 100;
let grade;
if (percentage >= 90) {
  grade = 'A';
} else if (percentage1 >= 80) {
  grade = 'B';
} else if (percentage1 >= 70) {
  grade = 'C';
} else if (percentage1 >= 60) {
  grade = 'D';
} else if (percentage1 >= 40) {
  grade = 'E';
} else {
  grade = 'F';
}

console.log("Total Marks: " + totalMarks1);
console.log("Percentage: " + percentage1.toFixed(2) + '%');
console.log("Grade: " + grade);

//  ملاحظة نستطيع الاستفادة من السؤال  5 السابق في لحل السؤال 6