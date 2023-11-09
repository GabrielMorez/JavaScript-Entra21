const updatedTask = {
    id: 1,
    title: 'Tarefa Atualizada',
    completed: true
};

fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
})
    .then(response => response.json())
    .then(data => console.log('Tarefa Atualizada:', data))
    .catch(error => console.error('Erro ao atualizar tarefa:', error));