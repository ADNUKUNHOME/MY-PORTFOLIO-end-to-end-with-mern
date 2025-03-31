const { useLocation, Navigate, useNavigate } = require("react-router-dom");

const location = useLocation();
const naivagate = useNavigate();

function CheckAuth({isAuthenticated, user, children}) {

    if(!isAuthenticated && location.pathname === '*') {
        Navigate('/auth/login');
    }
}

export default CheckAuth;