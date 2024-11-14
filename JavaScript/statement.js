// Conditional Statement
// IF

 /* let age = 25 ;
let mode = "dark"; //change 
let color;

if (mode === "dark") {
    color = "black"
}

if (mode === "light") {
    color = "white"
}
console.log(color) */

/*  if(age > 18) {
    console.log("Now you can vote ")
}

if (age < 18 ) {
    console.log("You can't vote ")
}
 */


// if-Elese
//mode
/*
let mode = "blue"; //change 
let color;

if (mode === "dark") {
    color = "black"
}
    else {
        color = "white"
    }

    console.log(color)

*/
//Age
/*
let age = 25;
if (age>=18) {
    console.log("vote")
}
else {
    console.log("Can't vote")
}
*/

//odd or even 

/* let num = 10;

if(num % 2 === 0) {
    console.log(num, "is Even")
} else {
    console.log(num, "is Odd")
} */


//  Elese If

/* let mode = "pink";
let color;

if (mode === "dark") {
    color = "black"
} else if (mode === "blue") {
    color = "blue";
}  else if (mode === "pink") {
    color = "pink";
} else {
    color = "white"
}
console.log(color) */

// Ternary Oprators

// let age = 10;

//  let result = 
//  age >= 18 ? "Adult" : "Not Adult" ;
//  console.log(result)

//Switch

/* const expr = "papayas";
switch (expr) {
    case "oranges":
    console.log("orenges are  150.0 Rupees.");
    break;
    case "papayas":
        console.log("papayas are  100.0 Rupees.");
    break;
    case "mangoes":
    console.log("mangoes are  200.0 Rupees.")
    break;
    default:
        console.log("Sorry, we are out of ${expr}.");

} 


let day = 14;

switch (day) {
    case 1:
        console.log(`${day} = Monday`);
        break;
    case 2:
        console.log(`${day} = Tuesday`);
        break;
    case 3:
        console.log(`${day} = Wednesday`);
        break;
    case 4:
        console.log(`${day} = Thursday`);
        break;
    case 5:
        console.log(`${day} = Friday`);
        break;
    case 6:
        console.log(`${day} = Saturday`);
        break;
    case 7:
        console.log(`${day} = Sunday`);
        break;
    default:
        console.log(`
        Day ${day} not exist`);
}

*/

//Practice Question


// Q1 = Get user to input a nunber using prompt("enter a number:"). check if the number is a multiple of 5 or not.

//Answer

 /* let number = prompt("Enter your number:" );
if (number % 5 === 0){
     console.log (number," is multiple of 5");
}

else{
     console.log (number," is not multiple of 5");
}
 */

//Q2 = Write acode witch can give grades to students according to thair scores:

//Answer

/* let scores = 69;
let grade
 
if (scores >= 90 && scores <= 100) {
    grade = "Grade A";
}
 else if (scores >= 70  && scores <= 89) {
    grade = "Grade B";
}
else if (scores >= 60  && scores <= 69) {
    grade = "Grade C";
}
else if (scores >= 50  && scores <= 59) {
    grade = "Grade D";
}
else if (scores >= 0  && scores <= 49) {
    grade = "Grade F";
}
console.log (grade); */ 
/*
let color = "green";

if (color==="red"){
    console.log("Stop");
}

if(color==="yellow"){
    console.log("Slow down");
}

if(color==="green"){
    console.log("You Can Go now");
}


let size = "M";
let price;
if(size==="XL"){
    price= 250; 
    console.log(`XL popcorn price is Rs.${price}`)
}else if (size==="L"){
    price= 200; 
    console.log(`L popcorn price is Rs.${price}`)
}else if(size==="M"){
    price= 100; 
    console.log(`M popcorn price is Rs.${price}`)
}else if(size==="S"){
    price= 50; 
    console.log(`S popcorn price is Rs.${price}`)
}else{
    console.log(`${size} size popcorn is not abilable`)
}
*/

/*
let str = "heppppl";

if ((str[0]==="a")&&(str.length > 3)){
        console.log(`${str} is a good string`);
    } else{
        console.log(`${str} is not a good string`);
    }
    


let num = 12;
if((num%3 === 0) &&((num+1 == 15) || (num-1 == 11))){
    console.log("Safe");
}else{
    console.log("Unsafe");
}

*/


/*

let num1 = 138;
let num2 = 68;

if((num1%10) == (num2%10)){
    console.log("numbers have the same last digit which is ", num1%10);
    
}else{
    console.log("numbers don't have same tast digit ");
}


let a = 12;
let b = 45;
let c = 6;


if(a > b) {
    if(a>c){
        console.log(`${a} is largest`);
    }else{
        console.log(`${c} is largest`);
    }
}else{
    if(b > c){
        console.log(`${b} is largest`);
    }else{
        console.log(`${c} is largest`);
    }
}


*/

/*
// Q1

let num = 1;

if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Not Good");
}


//Q3 

let quarter = 1;

switch (quarter) {
    case 1:
        console.log(`Months in Quarter 1 : January, Ferbuary, March`);
        break;
    case 2:
        console.log(`Months in Quarter 2 : April, May, June`);
        break;
    case 3:
        console.log(`Months in Quarter 3 : July, August, September`);
        break;
    case 4:
        console.log(`Months in Quarter 4 : October, November, December`);
        break;
    default:
        console.log("Not a Quarter");
}

//Q4 

let str = "hprail";

if((str.length>5) && (str[0] === "A") || (str[0] === "a")){
    console.log(`${str} is a Golden String`);
}
else{
    console.log(`${str} is not a Golden String`);
}
*/

