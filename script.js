
console.log(200);

let myAge = 34;
myAge = 65;

console.log(myAge);

const yourAge = 67;

const ourAge = 45;
console.log(ourAge);

// // let age;

// // age = 45;
// // console.log(age);

// //Primitive data types

// // string '' ""

let kezaya = "today is kezaya's birthday";
console.log(kezaya)
// // number

let myNum = 63;
console.log(myNum)

// //boolean
const me = true;
const you = false;
console.log(me)
console.log(you)

// //undefined
let test;
console.log(test);

// //null
let test2 = null;
console.log(test2)

test3 = 56;
console.log(test3);

// // Non-primitive data types
// // objects

const student = {
  name: "kezaya",
  age: 21,
  isPregnant: true,
};
student.name="Toyosi"
student.age=25
console.log(student);

// // arrays

const myArray = ["Amaka", "James", 354, true, { name: "John" }, [2, 4, 6]];
console.log(myArray[2]);

const students = [
   {
    name:"kezaya",
    age: 21,
    isPregnant:true
   },
   {
    name:"Toyosi",
    age: 25,
    isPregnant:false
   },
   {
    name:"joy",
    age: 22,
    isPregnant:false
   }
]
console.log(students)
students[0].name="aisha"
console.log(students[0])

// // functions

//Arithemetic Operator

let a = 34;
let b = 56;

// // Addition
const sum = a + b;
console.log(sum);

// //Subtraction
const subb = a - b;
console.log(subb);

// //Division
const div = b / a;
console.log(div);

// //Mutiply
const mut = a * b;
console.log(mut);

// //Modulus
const modul = b % a;
console.log(modul);

// //Assignment Operators
// let c = 39
// // +=
// // -=

//Comparism Operators
const d = "jane";
const e = "jane";
//Equals To
console.log(d == e);
// //Greater Than
const g = 99;
const h = 75
console.log(g > h);
// //Less Than
console.log(g < h);
// //Greater than equals to
const i = 33

console.log(g >= i);
// //Less than equals to
console.log(g <= i);
// //Not Equals To
console.log(g != i);
//Strictly Equals To
const k = 50;
const m = "50";
console.log(k===m)
const n ="50";
const o ="50";
console.log(n === o)

//Logical Operator
// Logical OR ||
// Logical NOT !
// Logiacl AND &

// //Ayo's Admission Details
const fee = true;
const uniform = false;
const textbooks = false;
const idCard = false;

const checkOR = fee || !textbooks || uniform || idCard;
const checkAND = fee && textbooks && uniform && idCard;
const checkAyo = fee && textbooks;
const checkAyoAgain = (fee && idCard) || (fee && uniform);
console.log(checkAyoAgain);
console.log("from idcard", !idCard);

// //Unary Operator
// // Increment ++
// // Decrement --

// let k = 3;
// k++;
// console.log(k);
// k--;
// console.log(k);

// //Tenary Operator
// // (contition) ? "" : ""

const tenTest = 76 > 45 ? "Yes This is correct" : "No, That is wrong";

// console.log(tenTest);

//Write a program that tells if a user is legible to vote

let age = -65;

// let voting = age < 18 ? "You cannot vote" : "You can vote";
// console.log(voting);

let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
console.log(voting);

//  Functions

function myName (){
  console.log("Tgirl");
}
myName("Tgirl")

function introduce (name,age){
  console.log("my name is " + name + ".I am "+ age + " years old ")
}
introduce("Toyosi", 25)

function myBestFood (food){
  console.log("My best food is " + food)
}
myBestFood("Rice")

function num (){
  console.log(50+100)
}
num()
function myHobby(first,second){
  console.log("I love " + first + " and " + second)
} 
myHobby("singing","dancing")