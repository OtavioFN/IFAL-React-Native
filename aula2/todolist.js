let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function rendertarefas(){
    listElement.innerHTML= '';

        tarefas.map((todo)=>{
            let liElement = document.createElement("li");
            let tarefaText = document.createTextNode(todo);

                liElement.appendChild(tarefaText);
                listElement.appendChild(liElement);
    
        })
}

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert('digite alguma coisa seu animal...');
        return false;
    }else{
        let novatarefa = inputElement.value;

        tarefas.push(novatarefa);
        inputElement.value = '';
        rendertarefas();

    }
}


buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    
}