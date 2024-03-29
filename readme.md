<h1 align="center">Club_burguer_Api</h1>


>## 💻 Projeto

<p>Sistema de hamburgueria. Nesta aplicação os clientes podem inserir seus dados para se cadastrar e fazer pedidos. Os administradores podem ver os pedidos, adicionar e editar informações dos produtos, pedidos e adicionar novas categorias.</p>

>## Rodando a aplicação
Para rodar o projeto será necessário instalar as seguintes aplicações:
* [Docker](https://www.docker.com/)
* [Postgres](https://www.postgresql.org/)
* [Node](https://nodejs.org/en/)
* [Mongodb](https://www.mongodb.com/)
* [Yarn](https://yarnpkg.com/getting-started/install)


### Pré-requisitos
Subindo a base de dados:

Subindo container postegres
```bash
docker run --name codeburger-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

Subindo container mongodb
```bash
docker run --name mongo -p 27017:27017 -d -t mongo
```
Obs: Vocé pode escolher qualquer nome para a base de dados, devendo somente alterar no arquivo database.js dentro da pasta config, assim como valores referente ao ambiente (usuario, host, etc).

É necessário rodar as migrations para que o Sequelize crie as tabelas necessárias no banco de dados, através do comando:

```bash
yarn sequelize db:migrate
```

Instalando as dependências.
```bash
yarn install 
```

Execute a aplicação em modo de desenvolvimento
```bash
yarn dev
```

>## 🚀 Tecnologias e ferramentas 
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [Express](https://expressjs.com/pt-br/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Sucrase](https://www.npmjs.com/package/sucrase)
* [Insomnia](https://insomnia.rest/products/insomnia)
* [Sequelize](https://sequelize.org/master/manual/getting-started.html)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Jwt](https://jwt.io/)
* [Yup](https://www.npmjs.com/package/yup)
* [Postgres](https://www.postgresql.org/)
* [Mongodb](https://www.mongodb.com/)
* [Multer](https://www.npmjs.com/package/multer)
* [Uuid](https://www.npmjs.com/package/uuid)
* [Prettier](https://prettier.io/)
* [Eslint](https://eslint.org/)


<h1 align="center">Feito com muita dedicação!</h1>
