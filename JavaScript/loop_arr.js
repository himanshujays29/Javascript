//loops with arrays.
/*
let arr = ["mango", "apple", "charry", "banana", "orange", "kiwi"];
 for(let i=0; i<arr.length; i++){
         console.log("index",i,":" ,arr[i])
}

for(let i=arr.length-1; i>=0; i--){
        console.log(i, arr[i])
}

*/

// loop with nested arrays


/*
let hero = [["ironman", "spiderman", "thor", "hulk"], ["superman", "wonder woman", "flash"]];

for(let i=0; i<hero.length; i++){
        console.log(`List #${i}`);
        for(let j=0; j<hero[i].length; j++){
                console.log(hero[i][j])
        }
}

*/

// Second  example of for nested loop

/*
let student=[["aman", 95], ["karan", 94.4], ["shraddha", 100]];
for(let i=0; i<student.length; i++){
        console.log(`Info of Student No.${i+1} : `);
        for(let j=0; j<student[i].length; j++){
                console.log(student[i][j])
        };
}
*/

//for double nested loop

/*
let sInfo = [[["name", "Atul"], ["Marks", 90], ["City", "Rewa"]], [["name", "Himanshu"], ["Marks", 95], ["City", "Sidhi"]], [["name", "Ikrar"], ["Marks", 70], ["City", "Satna"]]]

for(let i=0; i<sInfo.length; i++){
        console.log("")
        for(let j=0; j<sInfo[i].length; j++){
                for(let f=0; f<sInfo[i][j].length; f++){
                 console.log(sInfo[i][j][f])
                }
        }
}
*/
/*

// For of loop
// for(eleement of collection){}

let fruits = ["mango", "banana", "lichi", "kiwi", "avacado", "papaya", "orange"];
for(fruit of fruits ){
        console.log(fruit);
}

//For of loop in string to print all charecternof string.

for(char of "apnacollege"){
        console.log(char);
}

// For of loop to print all element of nested array.

let heros = [["ironman", "spiderman", "thor", "hulk"], ["superman", "wonder woman", "flash"]];
for(list of heros){
        for(hero of list){
                console.log(hero);
        }
}

*/


let heros = [["superman", "spiderman", "thor", "Dr. strange"],[ "Ironman", "hulk", "captain america"],["superman", "batman", "wonder woman", "flash"]];
for (hero of heros){
        console.log(hero);
        for(he of hero){
                console.log(he);
        }
}
