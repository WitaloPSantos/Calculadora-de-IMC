
function meuEscopo() {

    const form = document.querySelector('.formulario');
    const peso = document.querySelector('#input_peso');
    const altura = document.querySelector('#input_altura');
    const resultadoDoCalculo = document.querySelector('.valor_imc_numero');
    const exibiMensagemPeso = document.querySelector('.texto_resultado');
    const nome_seuIMc = document.querySelector('.nome_seuImc');


    function calculoImc() {
        const resultado = Number(peso.value) / (Number((altura.value * altura.value)));
        resultadoDoCalculo.innerHTML = resultado.toFixed(2);
        nome_seuIMc.innerHTML = `Seu Imc`


        if (resultado < 18.5) {
            exibiMensagemPeso.innerHTML = 'Voce esta abaixo do peso';
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            exibiMensagemPeso.innerHTML = 'Seu peso está normal';
        } else if (resultado >= 25 && resultado <= 29.9) {
            exibiMensagemPeso.innerHTML = 'Voçê está com sobrepeso';
        } else if (resultado >= 30 && resultado <= 34.9) {
            exibiMensagemPeso.innerHTML = 'Voçê está com obesidade Grau I';
        } else if (resultado >= 35 && resultado <= 39.9) {
            exibiMensagemPeso.innerHTML = 'Voçê está com obesidade Grau II';
        } else if (resultado == 40) {
            exibiMensagemPeso.innerHTML = 'Voçê está com obesidade Grau III';
        } else {
            exibiMensagemPeso.innerHTML = 'Tente Novamente';
            resultadoDoCalculo.innerHTML = '';
            nome_seuIMc.innerHTML = '';
        }
    }


    function recebeEventoForm(evento) {
        evento.preventDefault();
        //console.log(peso.value);
        calculoImc();
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
