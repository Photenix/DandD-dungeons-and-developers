import { getDocs, collection, addDoc, query, where, doc, deleteDoc, updateDoc, Firestore ,setDoc, arrayUnion} from "firebase/firestore";
import { db } from "../firebase.config";

export const getBosses = async () => {
    const querySnapshot = await getDocs(collection(db, "jefes"));
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



export const createBoss= async( obj_class ) =>{
    const docRef  = await addDoc(collection(db, "jefes"),{
        ...obj_class
    });

    return docRef.id
}

export const updateBossUser = async ( uid, id ) =>{
    await updateDoc(doc( db, "usuarios", uid ), {
        jefes_creados: arrayUnion( id )
    });
}

export const uploadImageFirestore = async( img ) =>{

    const docRef  = await setDoc(doc(db, "imagenes", "url"),{
       img
    });

    return docRef
}

export const cargaImg = async () =>{
    const querySnapshot = await getDocs(collection( db, "imagenes"));
    const arr = []
    querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        //console.log(`${doc.id} => ${doc.data()}`);
        let x = doc.data()
      
        arr.push(x)
    });
    return arr
}

export const getBoss = async () =>{
    const querySnapshot = await getDocs(collection( db, "jefes"));
    const arr = []
    querySnapshot.forEach((doc) => {
     
        let x = doc.data()
      
        arr.push(x)
        
    });
    return arr
}

