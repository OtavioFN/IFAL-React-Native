/* Let's set the elements we will change from now on */

let taskInput = document.querySelector("#todoApp input");
let taskList = document.querySelector("#todoApp ul");

/* 
taskInput gets the answers the user will put
taskList is the place the tasks will be
*/

let tasks = []

/* I had to create this array for the user store its tasks, and after be shown in the screen by the render's function */

function renderTasks(){
    taskList.innerHTML = '';
    tasks.map((task) => {
        
        /* Creating the task will be put on the screen*/

        let liElement = document.createElement("li")
        let taskText = document.createTextNode(task)
        let linkElement = document.createElement("a")
        linkElement.setAttribute('href','#')
        let linkText = document.createTextNode('Remove')
        linkElement.appendChild(linkText);

        /* setting the position of the deleted task */

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
        /* False made the task doesn't be sumbited */
    }else{
        let taskElement = `${taskInput.value} `
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

    /* splice function work with two parameters, the first one is the starting index will be deleted, the second param is how many indexes will be deleted from the first param*/
}

function saveData(){
    localStorage.setItem("@taskList", JSON.stringify(tasks))
}