//Assignment 1 and 2 and 4


// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs } from "./src/schema/typeDefs.js";
// import { resolvers } from "./src/schema/resolvers.js";
// import connectDB from "./src/modules/Assignment4/config/dbConnection.js";
// import auth from "./src/modules/Assignment4/middlewares/auth.js";

// connectDB()

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// const {url} = await startStandaloneServer(server,{
//   context : async ({req}) => {
   
//     const personContext = auth(req)
   
//     return {personContext}
//   }})

// console.log(`Server ready at ${url}`);







// app.js

// Assignment 3


import { createApolloServer } from "./src/modules/Assignment3/server/express.js";
import connectDB from "./src/modules/Assignment4/config/dbConnection.js";


connectDB()

const httpServer = await createApolloServer(4000);

httpServer.listen(4000, () => {
  console.log(`server active at : http://localhost:4000/graphql`);
});
