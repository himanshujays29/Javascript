//For loop

//print 1 to 5

/* for( let i = 1; i <= 100; i++) {
    console.log("You are Himanshu");
}
*/

 //Example

//alert 10 times

/*
for(let a=1; a<= 10; a++){
    alert("hello mc");
}
*/

//Calclulate sum of frist n numbers

 /*  let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum+i; 
    console.log ("sum = ", sum)
}
console.log ("sum = ", sum)
console.log("Loop has ended");  */


/* for( let i = 1; i <= 10; i++) {
    console.log("hello");
 }
 console.log("Hii This Is Himanshu ");

 */

 //While loop

/*
let i = 1;
while(i <= 5){
    console.log("himanshu");
    i++;
}
*/

//Do While Loop

/*

let i = 1;
do{
    console.log("Apna Colege");
    i++;
} while(i<=10);

*/

//For Of loops 

/*
let str = "JavaScript";
let size = 0;
for(let val of str){
    //iterator -> charecters
    console.log("val =", val);
    size++;
}
console.log("string size =", size); //10

*/

//For in loop
/*
let student = {
    name: "Ram kumar",
    age: 20,
    cgpa: 7.5,
    ispass: true
};

for(let key in student) {
    console.log("key =", key, "value =", student[key]);
}
*/

//Practice Question no. 1

/* 
for(let num = 1; num<=100; num++){
    // console.log("num =", num)
    if (num% 2==0){
        console.log("odd num =", num);
    }
    else{
        console.log("even num =", num);
    }
    }
   */

    //practice Question no. 2
/*
    let gamenum = 25;
    let usernum = prompt("Guess the game number :");
   while(usernum != gamenum) { 
    usernum = prompt("You enterd wrong number Guess again :");
   }
console.log("Congratulation, you enterd a right number you win $10000 !Enjoy");
*/

// Break Statememnt to break loops 'break;'

// break use in while loop
/*
 let i =1;
while(i<=10){
    if(i== 7){
        break;
    }
    console.log(i)
    i++
}

// Break use in foor loop

for(let i =1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i)
   
}
*/