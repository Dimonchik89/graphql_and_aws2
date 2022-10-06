import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../api/userApi";

const Upload = () => {
    const [ upload ] = useMutation(UPLOAD_FILE)
    console.log(process.env.REACT_APP_BASE_URL);
    const handleUpload = (e) => {
        const file = e.target.files[0]
        upload({
            variables: {
                file
            }
        })
    }

    return (
        <>
            <h3>Upload file</h3>
            <input
                type="file"
                onChange={handleUpload}
            />
        </>
    )
}
export default Upload;