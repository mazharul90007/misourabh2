import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="bg-paper">
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-288px)] w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;