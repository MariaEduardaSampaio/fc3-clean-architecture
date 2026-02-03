# FC3 – Clean Architecture

🇧🇷 Português | 🌍 [English version](README_EN.md)

Este projeto demonstra a aplicação prática de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Test-Driven Development (TDD)** em um sistema backend desenvolvido em **TypeScript/Node.js**.

O foco é a separação clara de responsabilidades, independência de frameworks e alta testabilidade, por meio de uma arquitetura em camadas bem definidas.

---

## 🎯 Objetivo

Demonstrar como estruturar uma aplicação backend seguindo princípios sólidos de engenharia de software, com domínio rico, casos de uso explícitos, testes automatizados e infraestrutura desacoplada.

---

## 🧱 Arquitetura

O projeto é organizado em camadas:

- **Domain** – Entidades, value objects, serviços de domínio, eventos e regras de negócio
- **Use Cases** – Casos de uso da aplicação (orquestração do domínio)
- **Infrastructure** – Persistência, API, frameworks e implementações técnicas
- **API** – Camada de exposição via HTTP (Express)

Essa organização garante baixo acoplamento e alta coesão.

---

## 🧠 Conceitos Aplicados

- Clean Architecture
- Domain-Driven Design (DDD)
- SOLID
- Test-Driven Development (TDD)
- Eventos de domínio
- Repositórios e interfaces
- Validações desacopladas

---

## ⚙️ Tecnologias Utilizadas

- TypeScript
- Node.js
- Express
- Sequelize
- Jest
- SQLite (ambiente de testes)

---

## ▶️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/MariaEduardaSampaio/fc3-clean-architecture.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute os testes:
```bash
npm test
```

4. Inicie a aplicação:
```bash
npm run start
```

---

## 🧪 Testes

O projeto possui:
- Testes unitários
- Testes de integração
- Testes end-to-end

Os testes validam regras de negócio, casos de uso e integração com a infraestrutura.

---

## 📚 Aprendizados

- Modelagem de domínio rica e expressiva
- Separação de responsabilidades em camadas
- Escrita de código altamente testável
- Uso de eventos de domínio
- Aplicação prática de Clean Architecture

---

## 🎓 Contexto

Projeto desenvolvido com fins educacionais e de prática avançada em **Arquitetura de Software** e **Engenharia de Software**.
