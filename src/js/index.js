const botaoEnviar = document.querySelector('.botao');

const inputs = ["nome", "email", "celular", "mensagem"];

//const nome = document.getElementById('nome');

//const email = document.getElementById('email');

//const celular = document.getElementById('celular');

//const mensagem = document.getElementById('mensagem');

botaoEnviar.addEventListener('click', () => {
    inputs.forEach(function (input) {
        if (input.value === "") {
            input.classList.add("invalidado");
        } else {
            input.classList.add("validado");
        }
    });
})

// botaoEnviar.addEventListener('click', () => {
//     if (nome.value === "") {
//         nome.classList.add("invalidado");
//     } else {
//         nome.classList.add("validado");
//     }
// })

// botaoEnviar.addEventListener('click', () => {
//     if (email.value === "") {
//         email.classList.add("invalidado");
//     } else {
//         email.classList.add("validado");
//     }
// })

// botaoEnviar.addEventListener('click', () => {
//     if (celular.value === "") {
//         celular.classList.add("invalidado");
//     } else {
//         celular.classList.add("validado");
//     }
// })

// botaoEnviar.addEventListener('click', () => {
//     if (mensagem.value === "") {
//         mensagem.classList.add("invalidado");
//     } else {
//         mensagem.classList.add("validado");
//     }
// })
    