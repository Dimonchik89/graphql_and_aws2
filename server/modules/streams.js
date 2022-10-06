const stream = require("stream")
const {s3} = require("./bucket");
require('dotenv').config()

const createUploadStream = (key) => {
    const pass = new stream.PassThrough();
    return {
        writeStream: pass,
        promise: s3
            .upload({
                Bucket: `${process.env.AWS_S3_BUCKET}/images_graphql`,
                Key: key,
                Body: pass
            })
            .promise()
    }
}

module.exports = createUploadStream