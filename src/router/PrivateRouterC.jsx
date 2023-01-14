import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouterC =({children})=> {

    const { user } = useSelector( state => state.login )

    return user?.role == 'admi'
        ? children
        : <Navigate to='/perfil' />
    
}