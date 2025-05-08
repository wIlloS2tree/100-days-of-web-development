
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