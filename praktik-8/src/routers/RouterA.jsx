import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Nav from "../components/Nav";
function RouterA() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} /> 
        </Routes>
    </BrowserRouter>
  );
}
export default RouterA;