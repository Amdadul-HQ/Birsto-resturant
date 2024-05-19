import { useContext } from "react";
import { AuthContext } from "../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading)return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    if(user)return children

    return <Navigate state={{from:location}} to='/login' replace></Navigate>

};

export default PrivateRoutes;