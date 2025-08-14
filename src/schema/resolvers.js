import bloggingModule from '../modules/Assignment1/bloggingPlatform/index.js';
import {booksModule} from '../modules/Assignment1/books/index.js';
export const resolvers = {
    Query:{
        ...booksModule.Query,
        ...bloggingModule.Query
    },
    Book:{
        ...booksModule.Book
    }

}