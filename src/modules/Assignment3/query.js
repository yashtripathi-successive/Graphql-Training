import dummyMessageSchema from "./models/dummyMessageSchema.js"
import { comments } from "./mutation.js"

const queryResolver = {

    getComments : () => {
        return comments
    },

    getAllDummyMessages: async (_, __, context) => {

    if(!context.dummyUser) throw new Error("You are Unauthorized")

    const messages = await dummyMessageSchema.find()
    const dummyMesages = messages.map(msg => ({
    message: msg.message,
    senderName: msg.senderName,
    }));

    return dummyMesages

    },

    getDummyMessageById : async (_, { id }, context) => {
    if (!context.dummyUser) throw new Error("You are Unauthorized");

    const message = await dummyMessageSchema.findById(id);
    if (!message) {
      throw new Error("Message not found");
    }

    return {
      message: message.message,
      senderName: message.senderName,
    };
  }

}

export default queryResolver