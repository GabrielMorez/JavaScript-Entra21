fetch('https://jsonplaceholder.typicode.com/todos/201')
.then(response => response.json())
.then(data => console.log('Todas as Tarefas: ', data))
.catch(error => console.error('Erro ao ler tarefas: ', error));