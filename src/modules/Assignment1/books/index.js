import { booksResolvers, booksQueryResolvers } from "./query.js";

export const booksModule = {
    Query:booksQueryResolvers,
    Book:booksResolvers.Book
}

