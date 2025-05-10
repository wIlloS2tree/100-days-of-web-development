age = 32;
let adultYears;

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