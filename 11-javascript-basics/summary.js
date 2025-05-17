// Practiced basic JavaScript syntax and fundamental concepts
// Declared and reassigned variables using let
// Created and accessed arrays and objects
// Defined and invoked functions and methods
// Used console.log() for debugging and output
// Learned and practiced arithmetic operations and compound assignment operators
// Understood string concatenation and type coercion (implicit & explicit)
// Differentiated between properties (e.g. .length) and methods (e.g. .toUpperCase())
// Used .split() to convert a string to an array
// Added comments explaining how to include JavaScript in HTML
// (inline <script> vs external .js file, location in <head> or <body>)


////////////////////////////////////////////////////////////////////////////////////////



// 1️⃣ Basic JavaScript
// JavaScript can be written directly in HTML or linked as an external file.
// JavaScript code can be placed inside <script> tags in HTML.
// if you want to link an external JavaScript file, use the <script src="path/to/file.js"></script> tag.
// Also, JavaScript can be placed inside <head> or <body> tags.
// But, inside <body> is recommended.


// 2️⃣ array-object
// Variable declaration 변수 정의
let name = "Willo"; // String 텍스트는 "큰따옴표", '작은따옴표'로 감싸야 함
let age = 34; // Number 정수는 따옴표 없이 숫자만 사용

alert(name); // Display the value of name
alert(age); // Display the value of age
alert("Hi, I'm Willo!"); // Display a string with an apostrophe. String에 포함된 작은 따옴표는 \(back slash)로 이스케이프 처리

// Variable reassignment 변수 재정의
name = 'Willo Ryu'; // Reassign the name variable to a new string
age = 35; // Reassign the age variable to a new number
alert(name); // Display the new value of name
alert(age); // Display the new value of age


// array and object declaration 배열과 객체 정의
let hobbies = ['Running', 'Reading', 'Cooking']; // Array 배열은 []로 감싸고, 각 요소는 ,(comma)로 구분
let job = { // Object 객체는 {}로 감싸고, 각 요소는 ,(comma)로 구분
    title: 'Software Engineer',
    place: 'Seoul',
    salary: 1000000,
    hobbies: ['Running', 'Reading', 'Cooking']
};

alert(hobbies[0]); // Display the first element of the hobbies array, Arrays are zero-indexed
alert(job.title); // Display the title property of the job object
alert(job['place']); // Display the place property of the job object using bracket notation




// 3️⃣-function
// Function declaration 함수 정의
function calculateAdultYears() {
  let adultYears = age - 18; // Calculate the number of adult years
}

calculateAdultYears(); // Call the function to execute it
alert(adultYears); // Display the number of adult years


// 함수 안(local scope)에서 선언된 변수는 함수 밖(global scope)에서 접근할 수 없음
// alert(adultYears); // This will throw an error because adultYears is not defined outside the function
// 함수 안에서 let을 붙이면 지역 변수(local variable)로 선언됨

function calculateAdultYears() {
    return age - 18; // return을 사용하면 함수의 결과를 밖으로 반환할 수 있음
}

adultYears = calculateAdultYears(); // Call the function and assign the result to adultYears
alert(result); 


// Parameter and argument 매개변수와 인자
function calculateAdultYears(age) { // age is a parameter
    return age - 18; // return the number of adult years
}

adultYears = calculateAdultYears(32); // Call the function with an argument of 32
alert(adultYears); // Display the number of adult years


// Function with multiple parameters 여러 개의 매개변수
function greet(name, age) { // name and age are parameters
    alert("Hi, " + name + ". You are " + age + " years old.");
  } 
  
  greet("Willo", 32); // Call the function with two arguments: "Willo" and 32


  // 4️⃣-Method
  // A method is a function that belongs to an object.

  let person = {
    name: 'Willo', // Property
    greet() { // Method
        alert('Hello!');
    }
};

person.greet(); 


// 5️⃣-Console.log
// console.log() is a function that prints messages to the console.
// It is useful for debugging and checking the values of variables.

let person = {
    name: 'Willo', // Property
    greet() { // Method
        console.log('Hello!'); // Shows the result in the developer console
    }
};

person.greet(); 

console.log(person.name); // Willo
console.log(person.greet()); // Hello!


// 6️⃣-Operations

// Math operations with variables

console.log(10 + 4); // integer addition
console.log(10 - 4); // integer subtraction
console.log(10 * 4); // integer multiplication
console.log(10 / 4); // floats division
console.log(10 % 4); // modulus % gives the remainder after division

// Integers are whole numbers, floats have decimals
// Decimals are numbers with a dot (.)

// let result = 10 / 3;
console.log(result); // 👉 3.333...

let quotient = Math.floor(10 / 3); // 몫 (정수 부분만) quotient
let remainder = 10 % 3; // 나머지 remainder

console.log("Quotient:", quotient); // 3
console.log("Remainder:", remainder); // 1

// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result = result + 1;

result++; // result = result + 1;
result--; // result = result - 1;

result += 5; // result = result + 5;
result -= 5; // result = result - 5;
result *= 5; // result = result * 5;
result /= 5; // result = result / 5;
result %= 5; // result = result % 5;

// +=, -=, *=, etc. are compound assignment operators
// Compound assignment operators require a variable to be declared first

console.log("Willo" + " " + "Moonchi"); // string concatenation
// Only + can be used for string concatenation; other operators return NaN

let a = "hi" + " there"; // 'hi there' => a string
let b = "the number" + " 2"; // 'the number 2' => a string
let c = "the number" + 2; // 'the number2' => a string
let d = 2 + 2; // 4 => a number
let e = 2 + "2"; // '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let f = "2" + "2"; // '22' => a string! ('2' and '2' concatenated)
let g = "2" * 3; // 6 => a number

// Type coercion: JavaScript automatically converts between types (Implicit coercion)
// Type coercion happens when you use a number and a string together

'2' * 3     // '2'가 자동으로 숫자 2로 바뀜 → 결과는 6
2 + '2'     // 숫자 2가 문자열 '2'로 바뀜 → 결과는 '22'

// Explicit coercion: You can convert between types manually

Number('2')  // => 2
String(123)  // => '123'


// String Operations & Methods

let userName = "Willo";
console.log(userName.length); // 5, property
console.log(userName.toUpperCase()); // Willo -> WILLO, method
let hobbies = ["reading, writing, coding"];
console.log(hobbies.length); // 3
