import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

export const createTeacher = async( obj_teacher ) =>{
    //console.log({ ...obj_teacher} )
    const docRef  = await addDoc(collection(db, "monitores"),{
        ...obj_teacher
    });
    console.log("Document written with ID: ", docRef.id);
}

export const getTeacher = async() =>{
    const querySnapshot = await getDocs(collection(db, "monitores"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export const findCedulaTeacher = async( id, get = false ) =>{
    const q = query(collection(db, 'monitores'), where('cedula', '==', id));
    const querySnapshot = await getDocs( q );

    const arr = []
    querySnapshot.forEach((doc) => {
        /* console.log(doc.id, ' => ', doc.data());
        console.log(doc.data()); */
        arr.push( doc.data() )
    });
    
    if( get ){
        return arr.length != 0 ?arr[0] :false
    }
    else { return arr.length != 0 ?true :false }
}