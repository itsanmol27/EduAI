import app from "../utils/Firebase.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function handleFileUpload(file) {
    const data = Date.now();

    const storage = getStorage(app);
    const storageRef = ref(storage , `doubt/${data}`);

    await uploadBytes(storageRef , file.data);

    const imageUrl = await getDownloadURL(ref(storage , `doubt/${data}`));
    return imageUrl
}

export default handleFileUpload;