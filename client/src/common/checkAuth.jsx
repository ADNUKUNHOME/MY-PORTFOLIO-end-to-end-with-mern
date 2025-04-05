// import { useLocation, Navigate } from "react-router-dom";


// function CheckAuth({isAuthenticated, user, children}) {

//     const location = useLocation();

//     if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes("/register") || location.pathname.includes("/reset-password"))) {
//         return <Navigate to='/auth/login' replace/>
//     }

//     if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
//         return <Navigate to='/user/home' replace/>
//     }
//     return children;
// }

// export default CheckAuth;