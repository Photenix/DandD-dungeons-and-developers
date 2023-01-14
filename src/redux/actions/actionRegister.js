import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesLogin } from "../types/types"

export const registerAsync =(email, pass, name)=>{
    return (dispatch)=>{
        const auth =getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async({user})=>{
                console.log(user)
                await updateProfile( auth.currentUser, {displayName: name})
                dispatch(registerSync(email, pass, name))
            
            })
            .catch(error=>{
                console.log(error)
            })
    }
    
}

export const registerSync =(email, pass, name)=>{
    return{
        type: typesLogin.register,
        payload:{
            name,
            email,
            pass,
        }
    }
}