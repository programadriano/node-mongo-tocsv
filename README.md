﻿# node-mongo-redis-tocsv

## Descrição

Esse projeto foi desenvolvido a partir de um demonstrando no link:
API: [Node Mongo e Redis](https://medium.com/@programadriano/utilizando-cache-com-redis-mongodb-e-node-js-8b3d6461b966)

## Alterações
Nesse novo repositório foi alterada a model e adicionado os pacotes abaixo:

*npm install --save json2csv*
*npm install uuid*

## Desenvolvimento

### tecnologias
Esse projeto foi desenvolido com as seguintes tecnologias:
Nodejs, mongoDB e Redis

### arquitetura

Nesse projeto nós temos uma rota index para demonstrar a versão do projeto e uma outra retornando nome e thumb dos personagens da série GOT (Game of Trones), a pasta uploas tem um avatar de cada personagem.

### Rodar o projeto

Para rodar o projeto precisa adicionar as strings de conexão do mongoDb no arquivo config/db.js e do redis no arquivo controllers/characterController.js.

Em seguida executar o comando  ```npm start```.



