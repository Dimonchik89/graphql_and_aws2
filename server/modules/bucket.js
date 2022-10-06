const AWS = require("aws-sdk");
require('dotenv').config()

const s3 = new AWS.S3({
    region: process.env.AWS_S3_REGION,
    credential: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
    }
})

module.exports = {s3}