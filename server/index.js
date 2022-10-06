const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import")
const resolvers = require("./api/resolvers");
const typeDefs = importSchema("./api/schema.graphql")
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js")   

const startServer = async () => {
     const server = new ApolloServer({
        typeDefs,
        resolvers
     })
     const PORT = process.env.PORT || PORT;

     await server.start()
     const app = express()
     app.use(graphqlUploadExpress())
     server.applyMiddleware({ app })

     await new Promise(r => app.listen({ port: PORT }, r))
     console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}
startServer()