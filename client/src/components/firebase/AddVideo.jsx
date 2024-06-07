import { app } from "./Firebase";
import { getFirestore, doc,  addDoc ,collection,updateDoc} from "firebase/firestore";
import { getStorage, ref,getDownloadURL,uploadBytesResumable} from "firebase/storage";
  
const db = getFirestore(app);
const storage = getStorage();

export default async function addData(data){
    let result = '';
    let error = '';
  try{
     const collectionRef = collection(db, 'videos');
      result = await addDoc(collectionRef, { ...data, videourl: '' }); // We're initializing bannerImage as an empty string, will be replaced with the storage URL

    if (data.video) {
      // storage.ref(`${collections}/${result.id}/bannerImage`).put(data.bannerImage);
      const videoref = ref(storage, `videos/${result.id}/${data.video.name}}`);
      await uploadBytesResumable(videoref, await data.video);
      const downloadURL = await getDownloadURL(videoref);
      const docRef = doc(db, 'videos', result.id);
      await updateDoc(docRef, { videourl: downloadURL });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}