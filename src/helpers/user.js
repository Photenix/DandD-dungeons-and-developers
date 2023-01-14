import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export const existUser = async ( uid ) =>{
    const docRef = doc(db, "usuarios", uid );
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        //doc.data() will be undefined in this case
        return null
    }
}

export const updateMissionUser = async ( uid, id ) =>{
    await updateDoc(doc( db, "usuarios", uid ), {
        misiones_creadas: arrayUnion( id )
    });
}

export const updateImgUser = async ( uid, infoObj ) =>{
    await updateDoc(doc( db, "usuarios", uid ), {
        info: infoObj
    });
}

export const updateLogrosUser = async ( uid, logroObj ) =>{
    await updateDoc(doc( db, "usuarios", uid ), {
        logros: arrayUnion( logroObj )
    });
}

export const createDBUser = async ( uid, name, email, img ) =>{
    const objUser = {
        uid: uid,
        info: {
            name: name,
            email: email,
            gener: '',
            img: img,
        },
        logros: [],
        misiones_creadas: [],
        clases_creadas: [],
        comentarios: [],
        role: 'user'
    }

    await setDoc(doc( db, "usuarios", uid ),{
        ...objUser
    });
}

/* export const existUser = async ( uid ) =>{
    const q = query(collection(db, 'monitores'),
        where('cedula', '==', uid));
    
    const querySnapshot = await getDocs( q );

    const arr = []
    querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        console.log(doc.data());
        arr.push( doc.data() )
    });


    if( arr ){
        
    }
} */