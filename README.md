# Inicialização

base de uma aplicação de Node com TypeScript já configurada.

Clone o projeto e instale as dependências dele.

Caso tenha docker e o docker-compose na maquina basta usar o comando:

- "docker-compose up"

  se não criar um banco com essas características:

- PostgreSql
- POSTGRES_USER=docker
- POSTGRES_PASSWORD=api
- POSTGRES_DB=morada

Agora inicialize a estrutura do banco de dados:

- "yarn orm migration:run" ou "npm orm migration:run"

Por ultimo inicialize o projeto em si:

- "yarn start" ou "npm start"

Caso queira ver os testes funcionando:

- "yarn test" ou "npm test"
