import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LayoutWeb from "./components/layout/LayoutWeb";
import Informedia from "./pages/InforMedia";
import Intropage from "./pages/Intropage";
import NewsDetail from "./pages/NewsDetail";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWeb />}>
                <Route index element={<Homepage />} />
                <Route path="intro" element={<Intropage />} />
                <Route path="informedia" element={<Informedia />} />
                <Route path="/informedia/newsdetail" element={<NewsDetail />} />
            </Route>
        </Routes>
    );
};

export default App;
