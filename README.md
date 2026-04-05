# 🧪 Testes de API – REST e GraphQL (EBAC)

![Node.js](https://img.shields.io/badge/node-18+-blue)
![Jest](https://img.shields.io/badge/jest-29.x-red)
![GraphQL](https://img.shields.io/badge/graphql-16.x-pink)

Projeto de testes automatizados para APIs REST e GraphQL, desenvolvido como parte do curso da EBAC. Inclui testes funcionais e testes de contrato para garantir a qualidade e integridade das respostas.

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

    git clone https://github.com/AdriannoSanttos/4-ebac-rest-graphql-tests.git
    cd 4-ebac-rest-graphql-tests
    npm install

## ▶️ Executando os testes

    # Executar todos os testes
    npm test

    # Executar apenas testes REST
    npm run test:rest

    # Executar apenas testes GraphQL
    npm run test:graphql

    # Executar testes de contrato
    npm run test:contract

## 📁 Estrutura do projeto

    test/
    ├── api/
    │   ├── category.test.js          # Testes funcionais de categorias
    │   ├── category.contract.test.js # Testes de contrato (schema/validação)
    │   └── products.test.js          # Testes funcionais de produtos
    ├── graphql/
    │   └── login.contract.test.js    # Testes de contrato GraphQL (login)
    reports/                          # Relatórios de teste (se gerados)

## 🧠 Cenários de teste contemplados

| Tipo    | Arquivo                     | Funcionalidade testada |
|---------|----------------------------|------------------------|
| REST    | category.test.js           | CRUD, listagem, filtros de categorias |
| REST    | category.contract.test.js  | Validação de schema e contratos |
| REST    | products.test.js           | CRUD, busca, estoque de produtos |
| GraphQL | login.contract.test.js     | Mutação de login, validação de token |

## 🛠️ Tecnologias utilizadas

- Jest – framework de testes
- Supertest – requisições REST
- GraphQL-request ou Apollo Client – cliente GraphQL
- Joi ou Ajv – validação de contratos (opcional)
- dotenv – variáveis de ambiente

## 📊 Relatórios

Os relatórios de teste (se configurados) podem ser encontrados na pasta `reports/` após a execução.

## 🤝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch

    git checkout -b feature/melhoria

3. Commit suas alterações
4. Push para a branch
5. Abra um Pull Request

## 📝 Melhorias futuras

- Adicionar testes de carga com K6 ou Artillery
- Gerar relatórios HTML com Jest-Stare ou Mochawesome
- Integração contínua com GitHub Actions
- Adicionar testes de mutação (Stryker)

## ✨ Autor

Adriano Santos

![GitHub](https://img.shields.io/badge/GitHub-AdriannoSanttos-181717?logo=github)
