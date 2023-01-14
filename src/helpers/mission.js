import { getDocs, collection, addDoc, query, where, doc, deleteDoc, updateDoc, getDoc, setDoc } from "firebase/firestore";

import { db } from "../firebase.config";

/*
export const createMission = async (obj_mission) => {
    const docRef = await addDoc(collection(db, "mission"), {
        ...obj_mission
    });
}
*/

export const createCuestionario = async (cuestionario) => {
    const docRef = await addDoc(collection(db, "cuestionario"), {
        ...cuestionario
    });
}


export const createMission = async (obj_mission) => {
    const docRef = await addDoc(collection(db, "mission"), {
        ...obj_mission
    });
    return docRef.id
}

const createWithId = async (coll, id, datos) => {
    await setDoc(doc(db, coll, id), datos);
}

export const userProfileCuestionarios = async (id_usuario, resultado) => {

    const docRef = doc(db, "usuarios", id_usuario);

    await updateDoc(docRef, resultado).then(e => console.log(e))

    /* catch(
        createWithId("usuarios", id_usuario, {})
    ); */

}

export const updateMission= async ( obj, uid ) =>{
    await updateDoc(doc( db, "mission", uid ), {
        ...obj
    });
    return null
}

export const getMissions = async () => {
    const querySnapshot = await getDocs(collection(db, "mission"));
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

export const findMission = async (id) => {

    const docRef = doc(db, "mission", id);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

export const getCuestionario = async () => {
    const querySnapshot = await getDocs(collection(db, "cuestionario"));
    const arr = []
    querySnapshot.forEach((doc) => {
        let x = doc.data()
        x.uid = doc.id
        arr.push(x)
    });
    return arr
}

export const findCuestionario = async (id) => {

    const docRef = doc(db, "cuestionario", id);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
