import personQueryMutation from "./mutation.js";
import personQueryResolver from "./query.js";



const personResolver = {

    Query : {
        ...personQueryResolver
    },
    Mutation : {
        ...personQueryMutation
    }
}


export default personResolver