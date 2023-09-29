var body = document.querySelector('body')
var h1 = document.getElementsByTagName('h1')

body.style.background = 'black'

for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = 'white'
}

cgMyLovers.addEventListener('click',playPause)
eu.addEventListener('click',playPause)
filhoProdigo.addEventListener('click',playPause)
whatWonderfulWorld.addEventListener('click',playPause)
theEnd.addEventListener('click',playPause)
hotelBlues.addEventListener('click',playPause)
outraVida.addEventListener('click',playPause)
thisLove.addEventListener('click',playPause)
bigMountain.addEventListener('click',playPause)


function playPause(){
    if(this.innerHTML === 'Ouça Agora'){
        this.innerHTML = 'Ouvindo'
    } else
    {
        this.innerHTML = 'Ouça Agora'
    }
}