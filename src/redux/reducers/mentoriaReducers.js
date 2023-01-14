import { typeMentoria } from "../types/types"

export const mentoriaReducers = (state = [], action) =>{
    switch (action.type) {
        case typeMentoria.addMentoria:
            return action.payload
           
        default:
            return state
    }
}