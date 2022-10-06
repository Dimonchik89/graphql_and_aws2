const { ApolloError } = require("apollo-server-express");
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const createUploadStream = require("../modules/streams");
const { v4: uuidv4 } = require('uuid');

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        getMessate: () => "Hello"
    },
    Mutation: {
        fileUpload: async (parent, { file }) => {
            const { createReadStream, filename } = await file;
            const stream = createReadStream();
            let result;

            try {
                const uploadStream = createUploadStream(`${uuidv4()}_${filename}`)
                stream.pipe(uploadStream.writeStream)
                result = await uploadStream.promise
            } catch(error) {
                console.log(`Error! Message: ${error.message}. Stack: ${error.stack}`)
                throw new ApolloError("Error uploading file")
            }
            console.log(result);
            return result;
        }
    }

}
module.exports = resolvers;