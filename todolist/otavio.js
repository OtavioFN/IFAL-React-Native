let taskInput = document.querySelector("#todoApp input");
let taskList = document.querySelector("#todoApp ul");

let tasks = []

function renderTasks(){
    taskList.innerHTML = '';
    tasks.map((task) => {

        let liElement = document.createElement("li")
        let taskText = document.createTextNode(task)
        let linkElement = document.createElement("a")
        linkElement.setAttribute('href','#')
        let linkText = document.createTextNode('Remove')
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(task)

        linkElement.setAttribute('onclick',`removeTask(${position})`)

            liElement.appendChild(taskText);
            liElement.appendChild(linkElement);
            taskList.appendChild(liElement);

    })
}

function taskSubmit(){
    if(taskInput.value == ''){
        alert("Type something");
        return false;
    }else{
        let taskElement = `${taskInput.value}`
        tasks.push(taskElement);
        taskInput.value = ''
        renderTasks();
        saveData();
    }
}

function removeTask(position){
    tasks.splice(position, 1)
    renderTasks();
    saveData();
}

function saveData(){
    localStorage.setItem("@taskList", JSON.stringify(tasks))
}