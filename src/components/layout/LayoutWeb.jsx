import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
const LayoutWeb = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayoutWeb;
