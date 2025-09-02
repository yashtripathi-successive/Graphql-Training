import bloggingModule from '../modules/Assignment1/bloggingPlatform/index.js';
import unionResolvers from '../modules/Assignment1/bloggingPlatform/unionResolvers.js';
import {booksModule} from '../modules/Assignment1/books/index.js';
import unionResolversBooks from '../modules/Assignment1/books/unionResolversBooks.js';
import assignmentThreeResolver from '../modules/Assignment3/index.js';
import personResolver from '../modules/Assignment4/index.js';
export const resolvers = {
    Query:{
        ...booksModule.Query,
        ...bloggingModule.Query,
        ...personResolver.Query,
        ...assignmentThreeResolver.Query
    },
    Book:{
        ...booksModule.Book
    },
    Mutation:{
        ...bloggingModule.Mutation,
        ...personResolver.Mutation,
        ...assignmentThreeResolver.Mutation
    },
    Subscription : {
        ...assignmentThreeResolver.Subscription
    }
    ,
    ...unionResolvers,
    ...unionResolversBooks

}