const taskIdToDelete = 251;

fetch(`https://jsonplaceholder.typicode.com/todos/${taskIdToDelete}`,{
    method: 'DELETE'
})
    .then(
        response => {
            if(response.ok){
                console.log('Tarefa excluída com sucesso:', response.status);
            } else {
                throw new Error(`Erro ao excluir tarefa: ${response.status}`);
            }
        })
        .catch(error => console.error(`Erro ao excluir tarefa: ${error}`));