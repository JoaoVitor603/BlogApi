<p align="center">
  <img src="https://softdesign.com.br/wp-content/themes/bones/library/images/logotipo.svg" alt="Softdesign logo" />
</p>

# :rocket: Quickstart NodeJS + Typescript

Esse projeto foi criado utilizando o framework [express]('https://expressjs.com/pt-br/').

Esse projeto contém todos os scripts do [express]('https://expressjs.com/pt-br/') com configurações adicionais de [typescript]('https://www.typescriptlang.org/'), [eslint](https://eslint.org/), [prettier](https://prettier.io/), e [husky](https://typicode.github.io/husky/#/).

### :wink: Antes de iniciar o projeto

Verifique se o NodeJS instalado em sua máquina está na versão 14 ou superior. Digite no terminal o seguinte comando:

`$ node -v`

Caso não tenha ou esteja desatualizado, navegue até o site do nodeJS e baixe a versão mais recente.

Mais informações: [site oficial](https://nodejs.org/en/).

### :fire: Iniciando o projeto

`$ npm install`

Quando concluir a instalação das dependências, abra o projeto no seu editor, crie um arquivo `.env` com as mesmas informações do `.env.example` e peça as infomações com alguém da sua equipe para popular as variáveis.

Rode no terminal os comandos `npm typeorm migration:run` e `npm seed:run` para criar as tabelas e popular com as seeds.
