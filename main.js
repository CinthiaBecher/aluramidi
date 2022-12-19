function tocaSom( idElementoAudio ){
    document.querySelector(idElementoAudio).play();
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
    
    tecla.onkeydown =  function (){
        tecla.classList.add('ativa');
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