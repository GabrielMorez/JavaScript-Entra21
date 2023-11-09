const newTask = {
    title: 'Nova Tarefa',
    completed: false
};

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
})
    .then(response => response.json())
    .then(data => console.log('Tarefa Criada:', data))
    .catch(error => console.error('Erro ao criar tarefa:', error));