function tocaSom( idElementoAudio ){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento === null){
        console.log('Elemento não encontrado');
    }else if (elemento.localName === 'audio'){
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento= tecla.classList[1];
    //#som_{} - template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown =  function (evento){
        console.log(evento)        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/*
let i = 0;
while (i < listaDeTeclas.length){

    const tecla = listaDeTeclas[i];
    const instrumento= tecla.classList[1];

    //#som_{} - template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    i = i +1;
}*/