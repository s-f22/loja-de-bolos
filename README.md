# 🎂 Loja de Bolos

Este projeto é uma aplicação web para **cadastro e divulgação de bolos**, desenvolvido como base para o curso **CO.DE VW**.  
É um modelo didático onde os alunos da turma de frontend aprendem tecnologias como **HTML**, **CSS**, **JavaScript**, **React** e outras ferramentas modernas de desenvolvimento web.

---

## 📁 Estrutura do Projeto

O repositório contém dois projetos distintos:

```

.
├── api/        # Backend: API Node.js + Express + json-server-auth
└── frontend/   # Frontend: React + Vite + TypeScript

````

---

## 🚀 Como Executar o Projeto

### ⚙️ Requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (gerenciador de pacotes que vem com o Node.js)

---

### ▶️ Passo 1: Executar o Backend (API)

A API utiliza `json-server` com autenticação (`json-server-auth`), `multer` para upload de arquivos e `swagger` para documentação.

```bash
cd api
npm install
npm start
````

> A API será iniciada em: **[http://localhost:3000](http://localhost:3000)**

#### 📌 Observações:

* Os dados são armazenados no arquivo `api/db.json` (não há banco de dados relacional).
* As imagens são salvas localmente na pasta `api/uploads/`.
* A documentação dos endpoints está disponível via Swagger, após iniciar o servidor (se configurado no `server.js`).

---

### 💻 Passo 2: Executar o Frontend (React)

A interface do usuário foi desenvolvida com React + Vite + TypeScript e utiliza bibliotecas como **Bootstrap**, **PrimeReact** e **React Router**.

```bash
cd frontend
npm install
npm run dev
```

> A aplicação será iniciada em: **[http://localhost:5173](http://localhost:5173)**

#### 💡 Importante:

* O frontend faz requisições para a API rodando em `http://localhost:3000`.
* Certifique-se de que a API está em execução antes de usar o frontend.

---

## 🧪 Testes com Postman

* Um exemplo de requisição está disponível no arquivo:
  `api/modelo_requisicao_postman.png`

---

## 📌 Funcionalidades

* Autenticação de usuários
* Listagem de bolos
* Visualização de detalhes
* Cadastro e edição de bolos com upload de imagem
* Rotas protegidas por login

---

## ⚠️ Status do Upload de Imagens

O recurso de upload de imagens está em fase de desenvolvimento. As imagens atualmente são salvas em `api/uploads/`, mas ainda podem ocorrer ajustes na implementação.

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**.
Uso livre para fins educacionais.

---

## 👨‍🏫 Sobre o Curso

Projeto desenvolvido no curso **CO.DE VW** para fins didáticos, com foco no aprendizado prático das tecnologias modernas de desenvolvimento frontend.

