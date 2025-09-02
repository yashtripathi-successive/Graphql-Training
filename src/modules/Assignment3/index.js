import mutationResolver from "./mutation.js";
import queryResolver from "./query.js";
import {startPublishing, subscriptionResolver} from "./subscription.js";



const assignmentThreeResolver = {

    Query : {
        ...queryResolver

    },

    Mutation : {
        ...mutationResolver

    },

    Subscription : {
        ...subscriptionResolver
    }
}


startPublishing()


export default assignmentThreeResolver