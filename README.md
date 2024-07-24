# Projeto com PHP e React

Este projeto consiste em uma aplicação com uma API desenvolvida em PHP (usando Laravel) e um frontend em React.

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

- `api`: Contém a API desenvolvida em PHP com o framework Laravel.
- `webapp`: Contém o frontend desenvolvido em React.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [PHP](https://www.php.net/) >= 7.4
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) >= 12.x
- [Yarn](https://yarnpkg.com/)

## Configuração da API

1. Navegue até a pasta `api`:
    ```sh
    cd api
    ```

2. Instale as dependências do PHP com o Composer:
    ```sh
    composer install
    ```

3. Copie o arquivo de exemplo `.env` e configure suas variáveis de ambiente:
    ```sh
    cp .env.example .env
    ```

4. Gere a chave da aplicação Laravel:
    ```sh
    php artisan key:generate
    ```

5. Configure o banco de dados no arquivo `.env` e, em seguida, execute as migrações:
    ```sh
    php artisan migrate
    ```

6. Inicie o servidor de desenvolvimento:
    ```sh
    php artisan serve
    ```

A API estará disponível em `http://localhost:8000`.

## Configuração do Frontend

1. Navegue até a pasta `webapp`:
    ```sh
    cd webapp
    ```

2. Instale as dependências do Node.js com npm ou Yarn:
    ```sh
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    yarn start
    ```

O frontend estará disponível em `http://localhost:3000`.

## Estrutura de Diretórios

A estrutura do projeto é a seguinte:

project-root/
│
├── api/
│ ├── app/
│ ├── bootstrap/
│ ├── config/
│ ├── database/
│ ├── public/
│ ├── resources/
│ ├── routes/
│ ├── storage/
│ ├── tests/
│ ├── .env
│ ├── composer.json
│ └── ...
│
└── webapp/
├── public/
├── src/
├── .env
├── package.json
└── ...

