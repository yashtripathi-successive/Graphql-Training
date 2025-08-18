import bloggingModule from '../modules/Assignment1/bloggingPlatform/index.js';
import unionResolvers from '../modules/Assignment1/bloggingPlatform/unionResolvers.js';
import {booksModule} from '../modules/Assignment1/books/index.js';
import unionResolversBooks from '../modules/Assignment1/books/unionResolversBooks.js';
export const resolvers = {
    Query:{
        ...booksModule.Query,
        ...bloggingModule.Query
    },
    Book:{
        ...booksModule.Book
    },
    Mutation:{
        ...bloggingModule.Mutation
    },
    ...unionResolvers,
    ...unionResolversBooks

}