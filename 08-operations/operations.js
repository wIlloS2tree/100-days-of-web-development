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
