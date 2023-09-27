var area = document.querySelector('#area');

area.addEventListener('click',clicar);
area.addEventListener('mouseenter',aoEntrar);
area.addEventListener('mouseout',aoSair);

function aoEntrar(){
    area.innerHTML = 'Entrou!'
}

function aoSair(){
    area.innerHTML = 'Saiu!'
    area.style.background = 'grey'
}

function clicar(){
    if(area.innerHTML === 'Clicou!'){
        area.innerHTML = 'Clique!';
        area.style.background = 'grey';
    } else{
        area.innerHTML = 'Clicou!';
        area.style.background = 'red';
    }
}