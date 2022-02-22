# Boas vindas ao repositório do API de Blogs!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Execução de testes unitários](#execução-de-testes-unitários)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Antes de começar](#antes-de-começar)
  - [Observações importantes](#-observações-importantes)
    - [Dicas](#dicas)
  - [Lista de Requisitos](#lista-de-requisitos)
    - [1 - Sua aplicação deve ter o endpoint POST `/user`](#1---sua-aplicação-deve-ter-o-endpoint-post-user)
    - [2 - Sua aplicação deve ter o endpoint POST `/login`](#2---sua-aplicação-deve-ter-o-endpoint-post-login)
    - [3 - Sua aplicação deve ter o endpoint GET `/user`](#3---sua-aplicação-deve-ter-o-endpoint-get-user)
    - [4 - Sua aplicação deve ter o endpoint GET `/user/:id`](#4---sua-aplicação-deve-ter-o-endpoint-get-userid)
    - [5 - Sua aplicação deve ter o endpoint POST `/categories`](#5---sua-aplicação-deve-ter-o-endpoint-post-categories)
    - [6 - Sua aplicação deve ter o endpoint GET `/categories`](#6---sua-aplicação-deve-ter-o-endpoint-get-categories)
    - [7 - Sua aplicação deve ter o endpoint POST `/post`](#7---sua-aplicação-deve-ter-o-endpoint-post-post)
    - [8 - Sua aplicação deve ter o endpoint GET `/post`](#8---sua-aplicação-deve-ter-o-endpoint-get-post)
    - [9 - Sua aplicação deve ter o endpoint GET `post/:id`](#9---sua-aplicação-deve-ter-o-endpoint-get-postid)
    - [10 - Sua aplicação deve ter o endpoint PUT `/post/:id`](#10---sua-aplicação-deve-ter-o-endpoint-put-postid)
    - [Requisitos Bônus](#requisitos-bônus)
    - [11 - Sua aplicação deve ter o endpoint DELETE `post/:id`](#11---sua-aplicação-deve-ter-o-endpoint-delete-postid)
    - [12 - Sua aplicação deve ter o endpoint DELETE `/user/me`](#12---sua-aplicação-deve-ter-o-endpoint-delete-userme)
    - [13 - Sua aplicação deve ter o endpoint GET `post/search?q=:searchTerm`](#13---sua-aplicação-deve-ter-o-endpoint-get-postsearchqsearchterm)
- [Avisos Finais](#avisos-finais)

# Habilidades 

Nesse projeto, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.

Primeiro, você irá criar uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de Categorias para seus Posts e por fim a tabela de Posts será seu foco, guardando todas as informações dos posts realizados na plataforma. Essa é apenas uma recomendação!

---

## Desenvolvimento

Você deve desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
 
### Data de Entrega

  - Projeto individual.

  - Serão `3` dias de projeto.

  - Data de entrega para avaliação final do projeto: `15/02/2020 - 14:00h`.

---

# Instruções para entregar seu projeto:


### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-014-b-project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-014-b-project-blogs-api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-sd-014-b-project-blogs-api`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-014-b-project-blogs-api`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-014-b-project-blogs-api/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-014-b-project-blogs-api/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### Execução de testes unitários

Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

```sh
npm test
```

Caso queira executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

```sh
npm test tests/req07-createPost.test.js
```
ou
```
npm test req07
```

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
