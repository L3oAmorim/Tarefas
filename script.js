// Função para adicionar uma nova tarefa
function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Por favor, insira uma tarefa");
        return;
    }
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = input + '<span class="edit-btn" onclick="editTask(this)">Editar</span><span class="delete-btn" onclick="deleteTask(this)">Excluir</span><span class="complete-btn" onclick="completeTask(this)">Concluir</span>';
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}

// Função para editar uma tarefa
function editTask(span) {
    var newTask = prompt("Editar Tarefa", span.parentNode.firstChild.textContent);
    if (newTask !== null) {
        span.parentNode.firstChild.textContent = newTask;
    }
}

// Função para deletar uma tarefa
function deleteTask(span) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(span.parentNode);
}

// Função para concluir uma tarefa
function completeTask(span) {
    span.parentNode.firstChild.style.textDecoration = "line-through";
    span.parentNode.removeChild(span);
}
