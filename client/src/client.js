import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
// import * as dotenv from 'dotenv'

const client = new ApolloClient({
    link: createUploadLink({
        uri: process.env.REACT_APP_BASE_URL
    }),
    cache: new InMemoryCache()
})
export default client;