const botaoEnviar = document.querySelector('.botao');

const msgCampoObrigatorio = document.getElementsByClassName('.texto-vermelho');

const nome = document.getElementById("nome").value;

botaoEnviar.addEventListener('click', function () {
        if (nome.value === "") {
           alert("oi");
    }
})


    