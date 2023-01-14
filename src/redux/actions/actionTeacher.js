import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";


export const createTeacher = async() =>{
    const querySnapshot = await getDocs(collection(db, "monitores"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export const getTeacher = async() =>{
    const querySnapshot = await getDocs(collection(db, "monitores"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
    });
}


