import { useLocation, Navigate } from "react-router-dom";


function CheckAuth({isAuthenticated, user, children}) {

    const location = useLocation();

    if(location.pathname === '/') {
        if (isAuthenticated && user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' replace />
        } else {
            return <Navigate to='/user/home' replace />
        }
    }

    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register') || location.pathname.includes('/reset-password') || location.pathname.includes('/verify-email'))){
        if(user.role === 'user') {
            return <Navigate to='/user/home' replace/>
        } else {
            return <Navigate to='/admin/dashboard' replace/>
        }
    }

    if(!isAuthenticated && (
        location.pathname.includes('/verify-password') ||
        location.pathname.includes('/admin')
    )) {
        return <Navigate to='/user/home' replace />
    }

    return children;
}

export default CheckAuth;