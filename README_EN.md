# FC3 – Clean Architecture

🌍 English | 🇧🇷 [Versão em Português](README.md)

This project demonstrates a practical implementation of **Clean Architecture**, **Domain-Driven Design (DDD)**, and **Test-Driven Development (TDD)** in a backend system built with **TypeScript/Node.js**.

The main focus is on clear separation of concerns, framework independence, and high testability through a well-defined layered architecture.

---

## 🎯 Goal

To showcase how to structure a backend application following solid software engineering principles, with a rich domain model, explicit use cases, automated tests, and decoupled infrastructure.

---

## 🧱 Architecture

The project is organized into layers:

- **Domain** – Entities, value objects, domain services, events, and business rules
- **Use Cases** – Application use cases (domain orchestration)
- **Infrastructure** – Persistence, API, frameworks, and technical implementations
- **API** – HTTP exposure layer (Express)

This organization ensures low coupling and high cohesion.

---

## 🧠 Applied Concepts

- Clean Architecture
- Domain-Driven Design (DDD)
- SOLID principles
- Test-Driven Development (TDD)
- Domain events
- Repository pattern
- Decoupled validation

---

## ⚙️ Technologies Used

- TypeScript
- Node.js
- Express
- Sequelize
- Jest
- SQLite (test environment)

---

## ▶️ How to Run

1. Clone the repository:
```bash
git clone https://github.com/MariaEduardaSampaio/fc3-clean-architecture.git
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npm test
```

4. Start the application:
```bash
npm run start
```

---

## 🧪 Tests

The project includes:
- Unit tests
- Integration tests
- End-to-end tests

Tests validate business rules, use cases, and infrastructure integration.

---

## 📚 What I Learned

- Rich domain modeling
- Layered responsibility separation
- Writing highly testable code
- Domain event handling
- Practical application of Clean Architecture

---

## 🎓 Context

This project was developed for **advanced practice in Software Architecture and Engineering**.
