import { typeMentoria } from "../types/types"


export const mentoria = ( data ) =>{    
    return{
        type: typeMentoria.addMentoria,
        payload: data
    }
    
}