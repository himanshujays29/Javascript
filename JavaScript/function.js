// Functions in JS
// to print a poem
/*
function poem(){
    console.log("Twincle twincle, tittle star");
    console.log("How are wonder what you are");
};
poem();


function diceRool(){
    const dice = Math.floor(Math.random()*6)+1 ;
    console.log(`Your Dice number is : ${dice}`);
};

diceRool();



function numAvg(a, b, c) {
    console.log(`Avrage of given number is : ${Math.floor((a + b + c) / 3)}`);
};

numAvg(2, 4, 7);
numAvg(6, 2, 8);

function mulTable(num) {
    console.log(`multiplication of : ${num}`)
    for (let i = 1; i <= 10; i++) {
        console.log(num * i)
    };
};

mulTable(11);

function num(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(num(500));


let strs = ["Hello", "i", "am", "Himanshu", "!"];

function concat(strs) {
    let allstr = "";
    for (let i = 0; i < strs.length; i++) {
        allstr += strs[i];
    };
    return allstr;
};

console.log(concat(strs));

let greet = "Hello"; //Global scope

function changeGreet() {
    let greet = "Namaste"; // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);// lexical scope
    };
};

console.log(greet); //Hello
changeGreet() //Namaste


function multipuleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }; 
}

let gritting = function () {
    console.log("Namaste Bhai Log");
};

multipuleGreet(gritting, 10);



function oddEvenTest(request){
    if(request == "odd"){
        let odd =  function(nam){
            console.log(!(nam%2 == 0));
        };

        return odd;

    } else if(request == "even"){
        let even = function(nam){
            console.log(nam%2 == 0);
        }

        return even;

    }else{
        console.log("Wrong Request");
    }
}

let request = "even";

*/

// const calc = {
//     sum: function(a, b){
//         return a+b ;
//     },
//     sub: function(a, b){
//         return a-b ;
//     },
//     mul: function(a, b){
//         return a*b ;
//     },
//     div: function(a, b){
//         return a/b ;
//     }
// };