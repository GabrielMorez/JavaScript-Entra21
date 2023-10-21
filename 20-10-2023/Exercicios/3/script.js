const elementoHora = document.getElementById('hora');
var data = new Date();
var hora = data.getHours().toString().padStart(2,'0');
var minutos = data.getMinutes().toString().padStart(2,'0');
var segundos = data.getSeconds().toString().padStart(2,'0');

elementoHora.innerHTML = `${hora}:${minutos}:${segundos}`;

setInterval(() => {
    dataAtualizada = new Date();
    hora = dataAtualizada.getHours().toString().padStart(2,'0');
    minutos = dataAtualizada.getMinutes().toString().padStart(2,'0');
    segundos = dataAtualizada.getSeconds().toString().padStart(2,'0');

    elementoHora.innerHTML = `${hora}:${minutos}:${segundos}`;
}, 1000)