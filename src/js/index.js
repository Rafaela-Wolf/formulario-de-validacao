const botaoEnviar = document.querySelector('.botao');

const msgSpan = document.getElementsByTagName('span');

const inputs = document.querySelectorAll(".campos");

botaoEnviar.addEventListener('click', () => {
    inputs.forEach(function (campos, index) {
        if (campos.value !== "") {
            campos.classList.add("validado");
        } else {
            campos.classList.remove("validado")
            campos.classList.add("invalidado");
            msgSpan[index].classList.add("texto-vermelho");
        }
    });
})

