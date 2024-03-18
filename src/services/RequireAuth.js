import  {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    console.log("auth", auth);
    const location = useLocation();  
    if (auth?.role && (allowedRoles?.includes(auth?.role))) {
        return   <Outlet /> 
       } else if (auth?.email) {
        return   <Navigate to="/unauthorized" state={{ from: location }} replace />
       } else { return <Navigate to="/login" state={{ from: location }} replace />}

        // auth?.role && (allowedRoles?.includes(auth?.role)) ? <Outlet />
        //     : auth?.email
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
       


  

}

export default RequireAuth;
