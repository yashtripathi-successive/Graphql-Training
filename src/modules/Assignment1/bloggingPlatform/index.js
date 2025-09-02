import bloggingPlatformMutation from "./mutation.js"
import bloggingPlatformQuery from "./query.js"
import unionResolvers from "./unionResolvers.js"

const bloggingModule = {
    Query: {
        ...bloggingPlatformQuery
    },
    Mutation : {
        ...bloggingPlatformMutation
    }
}

export default bloggingModule