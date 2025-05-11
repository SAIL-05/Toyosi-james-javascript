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

let age = parseInt(prompt("Enter your age"))
if(age < 12){
    alert(`${age} your ticket prce is 5`)
}
else if(age < 18){
    alert(`${age} your ticket price is 10`)
}
else if(age < 60){
    alert(`${age} your ticket price is 20`)
}
else if (age > 60){
    alert(`${age} your ticket price 15`)
}
else {
    alert("This is invalid")
}