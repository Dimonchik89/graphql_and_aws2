import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
    mutation fileUpload($file: Upload!) {
        fileUpload(file: $file) {
            ETag
            Location
            key
            Key
            Bucket
        }
    }
`