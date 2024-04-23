//Strings
/*
let str = "himanshujayswal"; //Create
console.log(str.length); //Length
console.log(str[11]); //Indices


//Tamplate Literals

let sentence = `This is a tamplate litrel` ;
console.log(sentence);

//Example

let object = {
    item: "pen",
    price: 10,
};
let output = `The cost of ${object.item} is ${object.price} rupees`;//tamplate litrels
console.log(output);
console.log("The cost of", object.item, "is", object.price ,"rupees"); //Normal

//Escape

console.log("Himanshu\njayswal"); // \n next line
console.log("Himanshu\tjayswal"); // \t tab


*/

//String Mathods 

// To uppercase
/*


let para = "this is paragraph";
    para = para.toUpperCase();//to store a output of string 
    console.log(para);

    //To lowercase

    let sen = "THIS IS PARAGRAPH";
    sen = sen.toLowerCase();//to store a output of string 
    console.log(sen);

    //Trim to remove a white space left or right 

    let a = "                  this is paragraph            ";
    a = a.trim(); //to store a output of string 
    console.log(a);

    // Slice returns part of string

    let b = "Himanshu";
    console.log(b.slice(2,4));

    // concat (concatination) join two and more then two strings

    let str1 = "Himanshu";
    let str2 = "Jayswal";
    let result = str1.concat(str2);
    console.log(result);

    // Replace to replace value of string

    let str = "Hello";
    console.log(str.replace("H","A")); //Aello

    //charAt Returns words (indexs) on strings 

    let str3 = "IloveJS";
    console.log(str3.charAt(3));//v
*/

    //Pracice question 

   // Q1= Prompt the user to enter their full name. Genrate a userename for them on the input start username eith @, followed their full name ending with the fullname lenth.
    //eg: user name = "himanshujayswal" , username should be "@himanshujayswal15"

    //Answer
/*
    let input = prompt("Enter your name :")
    let result = "@"+input.concat(input.length);
    console.log("Your user name is :" , result); 
    document.write("Your user name is :" , result);
   
    */