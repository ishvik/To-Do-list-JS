let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");
let allli = document.querySelectorAll(".task-list li");
function taskDeleter(e){
    e.currentTarget.remove();
}

for(let i=0;i<allli.length;i++){
    allli[i].addEventListener("dblclick",taskDeleter);
}

input.addEventListener("keypress",function(e){ //trigger when any key pressed
    if(e.key == "Enter"){
        let task = input.value;
        if(task == ""){
            alert("Error!!! Adding empty item list");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick",taskDeleter);
        ul.insertBefore(li,ul.firstChild); //behave like stack
        //ul.appendChild(li);  //behave like queue
    }
})