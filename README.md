# Formulário com Validação de Dados

Este é um projeto simples de um formulário para contato, que valida os campos obrigatórios usando JavaScript. A interface do formulário foi desenvolvida com HTML e CSS, e o layout é responsivo para diferentes tamanhos de tela.

## Funcionalidades

- Formulário de contato com os campos: nome, e-mail, celular e mensagem.
- Validação de campos obrigatórios em tempo real.
- Feedback visual de campos validados e inválidos.
- Mensagem de erro para campos não preenchidos.
- Layout responsivo para desktop e mobile.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do formulário e semântica.
- **CSS3**: Estilização do formulário, com foco em responsividade.
- **JavaScript**: Validação de campos obrigatórios e manipulação de classes CSS.

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo a estrutura do formulário.
- `src/css/reset.css`: Reset de estilos padrão dos navegadores.
- `src/css/style.css`: Estilos personalizados do formulário e layout.
- `src/css/responsive.css`: Estilos responsivos para dispositivos móveis.
- `src/imagens/bg.repeat.jpg`: Imagem utilizada.
- `src/js/index.js`: Script de validação de formulário.

## Como Usar

1. Clone este repositório em seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até a pasta do projeto:

    ```bash
    cd seu-repositorio

3. Abra o arquivo index.html no navegador para visualizar o formulário.

## Estilos Responsivos

O layout do formulário foi desenvolvido para se adaptar a diferentes resoluções de tela, com ajustes automáticos para dispositivos móveis e tablets. Utilizamos @media queries para realizar ajustes de layout conforme as seguintes resoluções:

- 1024px e abaixo: Flex-wrap e ajustes de tamanho de fontes.
- 768px e abaixo: Redução no tamanho de fontes e elementos.
- 500px e abaixo: Maior compactação do layout para telas menores.

## Scripts de Validação

A validação dos campos do formulário é realizada no arquivo index.js, onde:

- Campos obrigatórios (nome, e-mail, celular e mensagem) são verificados ao clicar no botão "Enviar".
- Se o campo estiver vazio, ele recebe uma borda vermelha e uma mensagem de erro é exibida.
- Se o campo estiver preenchido, a borda fica verde e a mensagem de erro desaparece.