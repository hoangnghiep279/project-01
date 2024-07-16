import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LayoutWeb from "./components/layout/LayoutWeb";
import Informedia from "./pages/InforMedia";
import Intropage from "./pages/Intropage";
import NewsDetail from "./pages/NewsDetail";
import Careerpage from "./pages/Careerpage";
import Productpage from "./pages/Productpage";
import ProductDetail from "./pages/ProductDetail";
import Contactpage from "./pages/Contactpage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWeb />}>
                <Route index element={<Homepage />} />
                <Route path="intro" element={<Intropage />} />
                <Route path="informedia" element={<Informedia />} />
                <Route path="/informedia/newsdetail" element={<NewsDetail />} />
                <Route path="career" element={<Careerpage />} />
                <Route path="product" element={<Productpage />} />
                <Route path="/product/detail" element={<ProductDetail />} />
                <Route path="contact" element={<Contactpage />} />
            </Route>
        </Routes>
    );
};

export default App;
