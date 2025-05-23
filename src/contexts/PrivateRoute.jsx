import React, { use } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router';
import Loading from '../components/Loading';
import { AuthContext } from './AuthContext';


const PrivateRoute = ({children}) => {
    const location=useLocation()
    
    
    const {user,loading}=use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email)
    {
        return children;
    }
    else{
return <Navigate to='/login'></Navigate>
    }
    
};

export default PrivateRoute;