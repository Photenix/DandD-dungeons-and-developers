import { getDocs, collection, addDoc, query, where, doc,getDoc, deleteDoc, updateDoc, Firestore ,setDoc} from "firebase/firestore";
import { db } from "../firebase.config";


export const getCuestionarios = async () => {
    const querySnapshot = await getDocs(collection(db, "cuestionario"));
    const arr = []
    querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        //console.log(`${doc.id} => ${doc.data()}`);
        let x = doc.data()
        x.uid = doc.id
        arr.push(x)
    });
    return arr
}