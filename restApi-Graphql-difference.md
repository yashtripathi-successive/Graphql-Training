# Comparative Analysis: RESTful API vs. GraphQL API

## Project Structure

1. **RESTful API** – built using Express.js
2. **GraphQL API** – built using Apollo Server

## REST vs GraphQL: Comparative Summary

| Feature                       | REST API                          | GraphQL API                             |
|-------------------------------|-----------------------------------|------------------------------------------|
| **Endpoint Structure**        | Multiple endpoints (e.g., `/books`, `/authors/:id`) | Single endpoint (`/graphql`)            |
| **Over-fetching/Under-fetching** | Common (fixed response shape)    | Avoided (client selects fields)          |
| **Request Format**            | HTTP methods: GET, POST, PUT, DELETE | HTTP POST with query/mutation structure  |
| **Data Relationships**        | Handled via additional endpoints | Handled via nested queries               |
| **Versioning**                | Required for changes (`/v1`, `/v2`) | Not needed (schema evolves with types)  |
| **Performance**               | May require multiple round-trips | Fetches all in one request               |
| **Caching**                   | Simple with HTTP (via URLs)       | More complex (custom caching needed)     |
| **Learning Curve**            | Easier to learn, more standardized | Requires GraphQL-specific knowledge      |

