# Blogs API Project

# Contexto
Neste projeto construi um backend usando ORM com o pacote sequelize do npm!

Trata-se do desenvolvimento e criação da arquitetura de uma API de um CRUD posts de blog (com Sequelize). Os endpoints da API estão conectados com o banco de dados e seguem os princípios REST. Primeiro criei uma tabela para os usuários que desejam se cadastrar na aplicação, após isso há a tabela de Categorias para seus Posts e por fim a tabela de Posts que guarda todas as informações dos posts realizados na plataforma.

Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`. Também foi necessária a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.

## Tecnologias usadas

Back-end:
> Desenvolvido usando: Node.js, Express, Sequelize, JsonWebToken, ORM

Requisições:
> Realizadas usando: Thunder Client

# Habilidades treinadas

 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Desenvolver um `CRUD` com o `ORM`

## Clonando o repositório:

1. Clone o repositório
  * `git clone git@github.com:juan-formoso/blogs-api-project.git`.
  * Entre na pasta do repositório clonado:
    * `cd blogs-api-project`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `main`
  * `git checkout -b my-new-branch`

4. Se divirta para fazer o que quiser :)

### Observações:

**Este projeto utiliza dotenv para configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência para melhor compreensão.

**Você pode encontrar as configurações das variáveis de ambiente no arquivo abaixo:**

`sd-014-b-project-blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

#### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Elas tornam possível a conexão com o banco de dados**

#### Variável JWT:

`JWT_SECRET`

#### Estrutura do Model:

- Tabela **Users**::

  ```json
  {
    "id": 1,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com", // tem quer ser único
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- Tabela **Categories**::

  ```json
  {
    "id": 18,
    "name": "News"
  }
  ```

- Tabela **PostsCategories**::

  ```json
  {
    "postId": 50,
    "categoryId": 20
  }
  ```

- Tabela **BlogPosts**::

  ```json
  {
    "id": 21,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 14, // esse é o id que referência usuário que é o autor do post
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.947Z",
  }
  ```
  
  **Os dados acima são fictícios, e estão aqui apenas como exemplo**  

**Nota**: Recomendo a criação do arquivo `.env` para realizar a conexão com o servidor e utilizar a aplicação corretamente.
