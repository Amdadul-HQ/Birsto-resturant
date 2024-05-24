import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({children}) => {
    const {user,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default AdminRoutes;