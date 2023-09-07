import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionname: string) {
  const snapshot = await getDocs(collection(firestore, collectionname));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionname: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionname, id));
  const data = snapshot.data();
  return data;
}
