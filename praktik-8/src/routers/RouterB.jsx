import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';
import Layout from '../components/Layout';

function RouterB() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ layout' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default RouterB; 