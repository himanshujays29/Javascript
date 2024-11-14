
let toDo = [];
let req = prompt("plese enter your request :");
console.log(req);
while(true){
    if(req == "quit"){
        console.log("quiting app ");
        break;
    }
    if(req == "list"){
        console.log("-----------------");
        for(let i=0; i<toDo.length; i++){
            console.log(`${i+1} : ${toDo[i]}`);
        }
        console.log("-----------------");
    }
    else if(req == "add"){
        let task = prompt("plese enter the task you want to add");
        toDo.push(task);
        console.log("task added")
    }
    else if (req == "delete"){
        let idx = prompt("plese enter the task index");
        toDo.splice(idx, 1);
        console.log("task deleted")
    }else{
        console.log("invaild requst")
    }                   
     req = prompt("plese enter your request :");
}