// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).
// Underweight (below 18.5), Healthy Weight (18.5 to 24.9), Overweight (25 to 29.9), and Obese (30 or greater)

// let weight = parseFloat(prompt("Enter your weight"));
// let height = parseFloat(prompt("Enter your height"));

//     let bmi =weight/ (height*height);

// if(bmi < 18.5){
//     alert(`${bmi} you are underweight`)
// }
// else if(bmi <24.9 ){
//     alert(`${bmi} you are healthy`)
// }
// else if (bmi < 29.9 ){
//     alert(`${bmi} you are overweight`)
// }
// else if (bmi > 30){
//     alert(`${bmi} you are obese`)
// }
// else{
//     alert("This is Invalid")
// }


// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// let age = parseInt(prompt("Enter your age"))
// if(age < 12){
//     alert(`${age} your ticket prce is 5`)
// }
// else if(age < 18){
//     alert(`${age} your ticket price is 10`)
// }
// else if(age < 60){
//     alert(`${age} your ticket price is 20`)
// }
// else if (age > 60){
//     alert(`${age} your ticket price 15`)
// }
// else {
//     alert("This is invalid")
// }

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
 
// let prices = parseInt(prompt("Enter your Purchase Price"))

// if (prices >= 100){
//     alert("you have a discount of 20%")
// }
// else if(prices >= 50){
//     alert("you have a discount of 10%")
// }
// else(
//     alert("your discount is 0")
// )

// .Create a function that takes age and alerts:
// 	•	“Child” if age is below 13
// 	•	“Teenager” if age is 13–19
//       . “Adult” if age is 20+

//   Write a function that takes a password and checks:
// 	•	If it’s empty → “Password is required”
// 	•	If it’s less than 6 characters → “Password is too short”
// 	•	Else → “Password is strong”
// Write a function that takes a temperature value and:
// 	•	Says “It’s cold” if it’s below 15
// 	•	“It’s warm” if it’s between 15 and 30
// 	•	“It’s hot” if it’s above 30 Write a function that takes a temperature value and:
// 	•	Says “It’s cold” if it’s below 15
// 	•	“It’s warm” if it’s between 15 and 30
// 	•	“It’s hot” if it’s above 30
// Create a function that takes a username and password.
// 	•	If either one is empty → show “Please fill all fields”
// 	•	If username is “admin” and password is “1234” → show “Login successful”
// 	•	Else → “Invalid credentials”


        //    Answers

// let userAge =()=>{
//     let aUserAge=parseInt(prompt("Enter your Age"))
//     if(aUserAge<=13){
//         console.log("This user is a child ")
//     }
//     else if(aUserAge >=13 && aUserAge <=19){

//         console.log("This user is a Teenager")
//     }
//    else if(aUserAge >= 20){
//     console.log("This user is an Adult")
//    }
//    else{
//     console.log("Enter a valid Age")
//    }
// }
// userAge()

// let passWord=()=>{
//     let userPassWord=(prompt("Enter Your Password"))

//     if(userPassWord === ""){
//         console.log("password is required")
//     }
//     else if(userPassWord.length < 6){
//         console.log("password is too short")
//     }
//     else{
//         console.log("Password is strong")
//     }

// }
// passWord()

// const Weather =()=>{
//     let checkWeather = parseInt(prompt("check weather"))

// if(checkWeather <15 ){
//     console.log("The Weather is cold")
// }
// else if(checkWeather >= 15 && checkWeather <=30 ){
//     console.log("The Weather is Warm")
// }
// else if(checkWeather > 30){
//     console.log("The weather is Hot")
// }
// else(
//     console.log("Invalid")
// )
// }

// Weather()

const login=()=>{
    let userName= prompt("Enter your username")
    let password=prompt("Enter your password")

   if(userName=== "" && password ===""){
    console.log("Please fill all fields")
   }
   else if(userName==="Admin" && password==="1234"){
    console.log("Login Successful")
   }
   else{
    console.log("Invalid Credentials")
   }
}
login()