import pubsub from "./pubsub.js";

export const HELLO = 'HELLO';
export const TIME = 'TIME';
export const DUMMYCOMMENT = "COMMENT"
export const USER_PRESENCE_CHANGED = "USER_PRESENCE_CHANGED"

export const subscriptionResolver = {
    hello: {
        subscribe: () => pubsub.asyncIterableIterator([HELLO]),
    },
    time: {
        subscribe: () => pubsub.asyncIterableIterator([TIME]),
    },
    comment : {
        subscribe : () => pubsub.asyncIterableIterator([DUMMYCOMMENT])
    },
    userPresenceChanged: {
      subscribe: () => pubsub.asyncIterableIterator(['USER_PRESENCE_CHANGED']),
    },
};

export function startPublishing() {
  setInterval(() => {
    pubsub.publish(HELLO, { hello: "Hello world!" });
    pubsub.publish(TIME, { time: new Date().toISOString() });
  }, 1000);
}


