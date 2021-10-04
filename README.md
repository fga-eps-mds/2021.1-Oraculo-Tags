# 2021.1-Oraculo-Tags

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021.1-Oraculo-Tags&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2021.1-Oraculo-Tags)

Essa API faz parte da arquitetura de microsserviços do projeto [`Oráculo`](https://github.com/fga-eps-mds/2021.1-Oraculo), sua funcionalidade é em questão de criar e editar os usuários do sistema.

## Como contribuir?

Gostaria de contribuir com nosso projeto? Acesse o nosso [guia de contribuição](https://fga-eps-mds.github.io/2021.1-Oraculo/CONTRIBUTING/) onde são explicados todos os passos.
Caso reste duvidas você também pode entrar em contato conosco criando uma issue.

## Documentação

A documentação do projeto pode ser acessada pelo nosso site em https://fga-eps-mds.github.io/2021.1-Oraculo/.

## Testes

Todas as funções adicionadas nessa API devem ser testadas, o repositŕorio aceita até 10% do total de linhas não testadas. Para rodar os testes nesse repositŕio deve ser executado o comando:

```bash
docker-compose up -d --build
npm install
npx sequelize-cli db:migrate --config src/Database/config/config.json
npx jest --coverage --forceExit
```

## Como rodar?

O arquivo .env possui configurações iniciais que podem ser alteradas de acordo com a necessidade. São elas:

-   SECRET: chave para criptografia das senhas
-   DB_USER: usuário de acesso ao banco de dados
-   DB_PASS: senha de acesso ao banco de dados
-   DB_NAME: nome da base de dados
-   DB_HOST: host da base de dados

Veja o exemplo abaixo:

```
SECRET=chavedesegredo
DB_USER=api_user
DB_PASS=api_password
DB_NAME=api_database
DB_HOST=db_users
```

Para rodar a API é preciso usar os seguintes comandos usando o docker:

Crie uma network para os containers da API, caso não exista:

```bash
docker network create tags-network
```

Suba o container com o comando:

```bash
docker-compose up
```

A API estará rodando na [porta 8000](http://localhost:8002).

## Rotas

**POST: `/tags`**

Para criar uma nova tag, envie os dados nesse formato:

```json
{
    "name": "Nome da tag",
    "color": "#ff00aa"
}
```

**GET: `/tags/all`**

Para listar todas as tags existentes, envie uma requisição para este endpoint
Os dados recebidos estarão nesse formato:

```json
[
    {
        "id": 1,
        "name": "tag one",
        "color": "#ff00bb"
    },
    {
        "id": 3,
        "name": "tag two",
        "color": "#ff00ba"
    }
]
```
