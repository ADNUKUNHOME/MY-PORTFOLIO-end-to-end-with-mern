import { useLocation, Navigate } from "react-router-dom";


function CheckAuth({isAuthenticated, user, children}) {

    const location = useLocation();

    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register') || location.pathname.includes('/reset-password') || location.pathname.includes('/verify-email'))){
        if(user.role === 'user') {
            return <Navigate to='/user/home' replace/>
        } else {
            return <Navigate to='/admin/dashboard' replace/>
        }
    }
    return children;
}

export default CheckAuth;