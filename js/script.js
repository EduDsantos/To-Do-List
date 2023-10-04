//Seleçao de emelentos
const allform = document.querySelector("#AllForm");
const allinput = document.querySelector("#AllInput");
const editform = document.querySelector("#edit-form");
const todoList = document.querySelector("#todo-list");
const done = document.querySelector("#todo done");
const cancelEdit = document.querySelector("#cancel-edit-btn")

let oldvalue;

//funçoes
const savetodo = (text) => {
    
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    

    const donebtn = document.createElement("button");
    donebtn.classList.add("finish-todo");
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(donebtn);

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit-todo");
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editbtn);

    const delbtn = document.createElement("button");
    delbtn.classList.add("remove-todo");
    delbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(delbtn);

    todoList.appendChild(todo);

    allinput.value = "";
    allinput.focus();
}



const toggleform = () =>{
    editform.classList.toggle("hide");
    allform.classList.toggle("hide");
    todoList.classList.toggle("hide");

}

const updatetodo = (text) =>{
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        console.log(todoTitle, text);
        if(todoTitle.innerText === oldvalue){
            todoTitle.innerText = text;
        };
        
       
    });

};

//eventos
allform.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputs = allinput.value;

    if(inputs){
        savetodo(inputs)
    }

});

document.addEventListener("click", (e) =>{
    
    const target = e.target;
    const parent = target.closest("div");
    let todoTitle;

    if(parent && parent.querySelector("h3")){
        todoTitle = parent.querySelector("h3").innerText;
    }



    if(target.classList.contains("finish-todo")){
        parent.classList.toggle("done");
    }

    if(target.classList.contains("remove-todo")){
        parent.remove();
    }

    if(target.classList.contains("edit-todo")){
        toggleform()

        editform.value = todoTitle;
        oldvalue = todoTitle;
    }
})

cancelEdit.addEventListener("click", (e) =>{
   e.preventDefault();
   toggleform() ;
})

editform.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editvalue = document.querySelector("#edit-input").value;

    if(editvalue){
        updatetodo(editvalue)
    }

    toggleform()
})
