import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import cors from "cors";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/use/ws";
import { typeDefs } from "../../../schema/typeDefs.js";
import { resolvers } from "../../../schema/resolvers.js";
import pubsub from "../pubsub.js";
import auth from "../auth/auth.js"


export async function createExpressServer() {
  const app = express();
  const httpServer = http.createServer(app);

 
  const schema = makeExecutableSchema({ typeDefs, resolvers });

 
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();

  
  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({req}) => {
        const dummyUser = auth({req})
        return {pubsub , dummyUser}
      }
    })
  );

  
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  // useServer(
  //   {
  //     schema,
  //     context: async () => ({ pubsub }),
  //   },
  //   wsServer
  // );

  useServer(
  {
    schema,
    context: async (ctx, msg, args) => {
      // Extract token (if using auth)
      const token = ctx.connectionParams?.authorization?.split(" ")[1];
      let user = null;

      if (token) {
        try {
          const decoded = jwt.verify(token, secretKey);
          user = decoded;
        } catch (err) {
          // token invalid
        }
      }

      return { pubsub, dummyUser: user };
    },

    onConnect: async (ctx) => {
      const token = ctx.connectionParams?.authorization?.split(" ")[1];
      if (token) {
        try {
          const decoded = jwt.verify(token, secretKey);
          pubsub.publish('USER_PRESENCE_CHANGED', {
            userPresenceChanged: {
              username: decoded.username,
              status: "online",
            },
          });
        } catch (err) {}
      }
    },

    onDisconnect: async (ctx) => {
      const token = ctx.connectionParams?.authorization?.split(" ")[1];
      if (token) {
        try {
          const decoded = jwt.verify(token, secretKey);
          pubsub.publish('USER_PRESENCE_CHANGED', {
            userPresenceChanged: {
              username: decoded.username,
              status: "offline",
            },
          });
        } catch (err) {}
      }
    },
  },
  wsServer
  );

  return httpServer;
}

export const createApolloServer = createExpressServer;