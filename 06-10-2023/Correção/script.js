// Objeto de tarefa
function Task(description, completed) {
    this.description = description;
    this.completed = completed;
}
 
 
// Array para armazenar as tarefas
let taskList = [];
 
// Verificar o armazenamento local para carregar tarefas existentes
if (localStorage.getItem('tasks')) {
    taskList = JSON.parse(localStorage.getItem('tasks'));
    updateTaskList();
}
 
// Função para adicionar uma tarefa
function addOrUpdateTask() {
    const taskInput = document.getElementById('taskInput');
    const errorElement = document.getElementById('error');
 
    // Validar se o campo de entrada não está vazio
    if (taskInput.value.trim() === '') {
        errorElement.textContent = 'Por favor, digite uma tarefa.';
        return;
    }
 
    const newTask = new Task(taskInput.value, false);
 
    // Adicionar a tarefa à lista
    taskList.push(newTask);
 
    // Atualizar a lista de tarefas na página
    updateTaskList();
 
    // Limpar o campo de entrada
    taskInput.value = '';
 
    // Limpar mensagens de erro
    errorElement.textContent = '';
 
    // Salvar no armazenamento local
    localStorage.setItem('tasks', JSON.stringify(taskList));
}
 
// Função para atualizar a lista de tarefas na página
function updateTaskList() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
 
    // Percorrer o array de tarefas e adicionar cada uma à lista
    taskList.forEach((task, index) => {
        const taskItem = document.createElement('li');
 
        // Adicionar um botão de checkbox para marcar a tarefa como concluída/não concluída
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => completedTask(index);
 
        taskItem.appendChild(checkbox);
 
        // Adicionar a classe 'completed' se a tarefa estiver concluída
        if (task.completed) {
            taskItem.classList.add('completed');
        }
 
        // Adicionar o texto da tarefa
        const taskText = document.createElement('span');
        taskText.textContent = task.description;
        taskItem.appendChild(taskText);
 
        // Adicionar um botão para editar a tarefa
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editTask(index, taskText);
 
        taskItem.appendChild(editButton);
 
        // Adicionar um botão para remover a tarefa
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeTask(index);
 
        taskItem.appendChild(removeButton);
 
        taskListElement.appendChild(taskItem);
    });
}
 
// Função para editar uma tarefa
function editTask(index, taskTextElement) {
    const newDescription = prompt('Digite a nova descrição da tarefa:', taskList[index].description);
    if (newDescription !== null) {
        taskList[index].description = newDescription;
        taskTextElement.textContent = newDescription;
        // Salvar no armazenamento local após a edição
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
}
 
// Função para remover uma tarefa
function removeTask(index) {
    taskList.splice(index, 1);
    updateTaskList();
    // Salvar no armazenamento local após a remoção
    localStorage.setItem('tasks', JSON.stringify(taskList));
}
 
// Função para marcar/desmarcar uma tarefa como concluída
function completedTask(index) {
    taskList[index].completed = !taskList[index].completed;
    updateTaskList();
    // Salvar no armazenamento local após a alteração de conclusão
    localStorage.setItem('tasks', JSON.stringify(taskList));
}