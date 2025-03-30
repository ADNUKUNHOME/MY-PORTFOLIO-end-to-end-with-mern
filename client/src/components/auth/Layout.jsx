import { Outlet } from "react-router-dom";
import ThemeToggle from "../darkMode/themeToggle";

const Layout = () => {
    return (
        <div className="flex min-h-screen w-screen items-center justify-center bg-purple-800">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;
