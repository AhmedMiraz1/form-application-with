import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto px-8">
            <Navbar/>
            
            <Outlet/>
        </div>
    );
};

export default MainLayout;