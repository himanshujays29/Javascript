/*
// Dice roll 

let roll =  Math.floor(Math.random(1)*6+1);
console.log(`Dice no : ${roll}`);

// Print car name 

const car = {
    name : "Ford",
    model : "Mustang",
    color :  "black",
};

console.log(car.name)

// Add and update values in objectn

let person = {
    name : "Will smith",
    age : 25,
    city : "barbados"
};

console.log(person);

person.city = "New york";
person.country = "united kingdom";

console.log(person)


// Guessing game 

const maxNum = prompt("Enter Max number :");
const num = Math.floor(Math.random()*maxNum)+1;
let guess = prompt("Guess the right genreted number :");

while(guess != num) {
    if(guess == "quit"){
        console.log("You Quited....!");
        break;
    }
    else{
        if(guess<num){
             guess = prompt("your guess is too small. please try again :");
        }
        if(guess>num){
            guess = prompt("your guess is too large. please try again :");
       }
    }
};

if(guess == num){
    console.log(`congats!! your guess is right your random number is ${num}`);
}

*/