# Habilidades 

Nesse projeto, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.

Primeiro, você irá criar uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de Categorias para seus Posts e por fim a tabela de Posts será seu foco, guardando todas as informações dos posts realizados na plataforma. Essa é apenas uma recomendação!

## Desenvolvimento

Você deve desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.

### ANTES DE COMEÇAR A DESENVOLVER:


**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

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

**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variáveis no arquivo acima:**

#### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

#### Variável JWT (opcional):

`JWT_SECRET`

**Também poderá ser utilizada esta variável de ambiente para o SECRET do JWT**

#### Os seguintes pontos serão avaliados:

- O seu projeto deverá usar um `ORM` para criar e atualizar o seu banco. A clonagem do projeto seguida de um comando de migrate deve deixá-lo em sua forma esperada.

- Deve conter uma tabela chamada **Users**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 1,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com", // tem quer ser único
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- Deve conter uma tabela chamada **Categories**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 18,
    "name": "News"
  }
  ```

- Deve conter uma tabela chamada **PostsCategories**, contendo dados com a seguinte estrutura:

  ```json
  {
    "postId": 50,
    "categoryId": 20
  }
  ```

- Deve conter uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura::

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
