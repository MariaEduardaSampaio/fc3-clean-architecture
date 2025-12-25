
### Camada de Domínio (`domain/`)

Coração da aplicação, contendo:

- **Entities**: Entidades de negócio com validação e comportamentos (`Customer`, `Product`, `Order`)
- **Value Objects**: Objetos de valor imutáveis (`Address`)
- **Repository Interfaces**: Contratos para persistência de dados
- **Domain Events**: Eventos de domínio com handlers (`ProductCreatedEvent`)
- **Factories**: Criação de entidades e agregados
- **Validators**: Validação de entidades usando Yup

### Camada de Aplicação (`usecase/`)

Orquestra os casos de uso do sistema:

- **Use Cases**: Operações de negócio (Create, Find, List, Update)
- **DTOs**: Objetos de transferência de dados (Input/Output)
- Independente de frameworks e detalhes de infraestrutura

### Camada de Infraestrutura (`infrastructure/`)

Implementações concretas e detalhes técnicos:

- **Repositories**: Implementações com Sequelize/SQLite
- **API REST**: Express.js com rotas versionadas
- **Presenters**: Formatação de saída (JSON, XML)
- **Models**: Mapeamento ORM

## 🎯 Padrões Implementados

### Notification Pattern

Padrão para acumulação e tratamento de erros de validação, permitindo coletar múltiplos erros antes de lançar exceções:

this.notification.addError({
  message: "Name is required",
  context: "customer"
});

if (this.notification.hasErrors()) {
  throw new NotificationError(this.notification.getErrors());
}### Repository Pattern

Abstração da camada de persistência através de interfaces, permitindo trocar implementações sem afetar o domínio.

### Factory Pattern

Centraliza a criação de entidades e agregados, encapsulando a lógica de instanciação.

### Presenter Pattern

Separa a lógica de apresentação/formatação dos dados, suportando múltiplos formatos de saída (JSON, XML).

### Domain Events

Sistema de eventos para comunicação desacoplada entre componentes do domínio.

### Value Objects

Objetos imutáveis que representam conceitos do domínio sem identidade própria.

## 🛠️ Tecnologias

- **Runtime**: Node.js
- **Linguagem**: TypeScript
- **API**: Express.js
- **ORM**: Sequelize
- **Banco de Dados**: SQLite
- **Validação**: Yup
- **Testes**: Jest + Supertest
- **Build**: SWC


## 📖 Referências

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain-Driven Design - Eric Evans](https://domainlanguage.com/ddd/)
- [Full Cycle 3.0](https://fullcycle.com.br/)

---

> Este projeto é exclusivamente para fins de estudo e aprendizado.