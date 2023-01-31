function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');
/*'.tecla está trazendo a classe tecla_pom, tecla_slpash e as demais*/




/* classlist retorna dois elementos a tecla e a tecla_som
o elemento 1 sempre vai ser o som a ser tocado*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}` //passando a string para a constante
    tecla.onclick = function() {
        tocaSom(idAudio)
    }


    tecla.onkeydown = function(evento) {
        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}