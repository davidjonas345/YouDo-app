const todosForm = document.querySelector(".todosform");
const addTodoBnt = document.querySelector(".addTodo");
const todoslist = document.querySelector(".todoslist");
const feedback = document.querySelector(".feedback");
const todosArr = [];
const priority = document.getElementById("priority");

//Add new element
const createNewElement = todo => {
    const newHtmlEl = `
    <li>${todo}</li>
    <button class="delete">Delete</button>`
    todoslist.innerHTML += newHtmlEl + " " + todosForm.formdate.value + " " + priority.value;
};

todosForm.addEventListener("submit", event => {
    event.preventDefault();
    const todo = todosForm.todoInput.value;
    createNewElement(todo);

    //Storing
    todosArr.push(todo);
    const todoStr = JSON.stringify(todosArr);
    localStorage.setItem("todosarray", todoStr);

});

// delete elements
todoslist.addEventListener("click", event => {
    if (event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
})

// validation
todosForm.todoInput.addEventListener("keyup", event => {
    const Pattern = /^[a-zA-z]{6,}$/;
    const todo = todosForm.todoInput.value;
    if (Pattern.test(event.target.value)){
      todosForm.todoInput.setAttribute("class", "validtext");
      addTodoBnt.removeAttribute("disabled");
    } else {
        todosForm.todoInput.setAttribute("class", "novalidtext");
    }
    if(todo.length >= 6){
        feedback.textContent = "Just do it bro!"
    }else {
        feedback.textContent = "The task description must be at least 6 characters long!";
    }

});







