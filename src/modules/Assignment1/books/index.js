import { booksResolvers, booksQueryResolvers } from "./query.js";
import unionResolversBooks from "./unionResolversBooks.js";

export const booksModule = {
    Query:booksQueryResolvers,
    Book:booksResolvers.Book,
    ...unionResolversBooks
}

