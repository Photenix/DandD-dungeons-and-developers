import { getDocs, collection, addDoc, query, where, doc,getDoc, deleteDoc, updateDoc, Firestore ,setDoc, arrayUnion} from "firebase/firestore";
import { db } from "../firebase.config";

const fakeData =[{
     id : "undefined",
    titulo : "",
    resumen : "",
    clase:  "", 
    ejercicio: ""}

]

export const crearClase = async( obj_class ) =>{
    //console.log({ ...obj_teacher} )
    const docRef  = await addDoc(collection(db, "clases"),{
        ...obj_class
    });

    return docRef.id
}

export const updateClasesUser = async ( uid, id ) =>{
    await updateDoc(doc( db, "usuarios", uid ), {
        clases_creadas: arrayUnion( id )
    });
}

export async function buscarDocumento( idDocumento ){
    //Referencia al documento
    //const docuRef = doc(db, `clases/${idDocumento}`)
    const docuRef = doc( db, "clases", idDocumento )
    
    //buscar el doc
    const consulta = await getDoc(docuRef)
    
    if(consulta.exists()){
        const infoDocu = consulta.data();
        return infoDocu.clases;
    }else{
        await setDoc(docuRef , {clases: [...fakeData]} );
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        return infoDocu.tareas;
    }
    //revisar si existe

    //si existe

    // si no existe

}

export async function getOneClass ( idDocumento ){
    const docuRef = doc( db, "clases", idDocumento )
    const consulta = await getDoc(docuRef)
    
    if(consulta.exists()){
        const infoDocu = consulta.data();
        return infoDocu;
    }else{
        await setDoc(docuRef , {clases: [...fakeData]} );
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        return infoDocu.tareas;
    }
}

export const getClase = async () => {
    const querySnapshot = await getDocs(collection(db, "clases"));
    const arr = []
    querySnapshot.forEach((doc) => {
        let x = doc.data()
        x.uid = doc.id
        arr.push(x)
    });
    return arr
}