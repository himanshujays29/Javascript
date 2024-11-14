// js program to delete all occurrence of element 'num' in a given array.

/*
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
console.log(arr);
//1
// while(arr.includes(num)==true){
//     arr.splice(arr.indexOf(num), 1);
//       console.log("removed");
// }
//2
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i, 1);
        console.log("removed")
    }
}
console.log(arr);

*/

// Qs:  JS program to find the no of digits in a number.

/*
let num = 26677587;
let count = 0;
let copy = num;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);
*/

//Qs : JS program to find the sum of digits in number.

/*
let num = 657476;
console.log(num);
let sum = 0;

let copy = num;

while(copy > 0){
    digit = copy % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
}

console.log(sum);
*/

// JS program to fing factorial of a number.
/*
let n = 5;
let fecto = 1;
for(let i=1; i<=n; i++){
    fecto *= i;
}
console.log(`Factorial of ${n} is ${fecto}`);
*/

// JS program to find lagest number in a array.
/*
let arr = [2, 6, 2, 3, 9, 14, 1, 0, 8, 5];
let largest = 0;
for(let i=0; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}

console.log(largest);
*/   