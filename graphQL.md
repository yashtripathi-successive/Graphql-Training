# GraphQL Data Efficiency: Solving Over-fetching and Under-fetching

GraphQL is a powerful query language for APIs that solves many of the limitations of traditional REST APIs — particularly **over-fetching** and **under-fetching** of data. This file highlights these issues and demonstrates how GraphQL improves data efficiency with real-world examples and metrics.

---

## What Are Over-fetching and Under-fetching?

| Problem          | REST Example                                                                 | Impact                                                                 |
|------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Over-fetching    | Fetching a full user profile when only the username is needed (`/users/1`)  | Increases payload size and slows down performance                      |
| Under-fetching   | Fetching a post, then needing to make additional calls to get author data   | Requires multiple requests, increasing latency and complexity          |

---

## How GraphQL Solves This

- **Precision**: Clients request **only the fields they need**
- **Single Endpoint**: Nested and related data can be queried in a **single request**
- **Custom Queries**: No need to wait for backend developers to create new endpoints

---

## Real-World Example: Bookstore Dataset

### REST API Request (Over-fetching)

```http
GET /books/1

Response:
{
  "id": 1,
  "title": "GraphQL in Action",
  "authorId": 2,
  "publisherId": 5,
  "publishedYear": 2020,
  "createdAt": "2021-01-01T00:00:00Z",
  "updatedAt": "2021-06-01T00:00:00Z"
}
```
#### Problem: Let Say client only needed title and author name, but received unnecessary metadata fields


### GraphQL Request


```query {
  book(id: 1) {
    title
    author {
      name
    }
  }
}
```

### Result Payload


```{
  "data": {
    "book": {
      "title": "GraphQL in Action",
      "author": {
        "name": "John Doe"
      }
    }
  }
}
```


#### Only essential data returned. No wasted bandwidth.