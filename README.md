# Monorepo Development with Nx, NestJS, GraphQL, MongoDB, and ReactJS

This monorepo leverages a selection of cutting-edge technologies to achieve its goals. Each of these technologies plays a unique role in ensuring that the monorepo functions optimally. Below is an overview of each technology and its specific role:

## [Nx](https://nx.dev/)

Nx is a smart, extensible build framework that helps developers to structure their workspace in an efficient manner. It provides an intuitive interface for managing the complexity of your monorepo and can scale with your development needs. Nx allows for incremental builds and testing, meaning only the projects affected by a change are processed.

## [NestJS](https://docs.nestjs.com/)

NestJS is a versatile, server-side application framework for Node.js. It combines elements of Object Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). NestJS provides a level of abstraction above these common Node.js frameworks (Express and Fastify), but also exposes their APIs directly to the developer. This allows developers to use the myriad of third-party modules which are available for the underlying platform.

## [GraphQL](https://graphql.org/)

GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. GraphQL provides a more efficient, powerful, and flexible alternative to REST. It allows clients to define the structure of the responses from the server, thus preventing excessively large amounts of data from being returned.

## [MongoDB](https://www.mongodb.com/)

MongoDB is a document-oriented NoSQL database, used for high volume data storage. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. MongoDB's document model is simple for developers to learn and use, but still provides all the capabilities needed to meet complex requirements at any scale.

## [ReactJS](https://reactjs.org/)

ReactJS is a JavaScript library for building user interfaces, typically for single-page applications. It allows developers to create reusable UI components. ReactJS aims to be simple to use, supports a virtual DOM, and provides a performance boost by handling the DOM manipulation in an efficient way.

All these technologies combined provide a comprehensive development ecosystem for this monorepo. Developers can enjoy a streamlined development experience and the ability to focus on writing their code, knowing that the rest of the complexity is handled by these powerful tools.

## Installation

```sh
npm install
```

```sh
npm run dev
```

React App runs on `http://localhost:4200/`
Backend GraphQL runs on `http://localhost:5000/graphql`
