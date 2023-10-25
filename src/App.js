import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import { Home } from './User/Home';
import { AdminRegistration } from './Admin/AdminRegistration';
import { AdminProduct } from './Admin/AdminProduct';
import { AdminCategory } from './Admin/AdminCategory';
import AdminNavbar from './Admin/AdminNavbar';
import Layout from './Components/Layout';
import { Product } from './Components/product';
import ProductDetails from './Components/productDetails';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Layout/>}>
                 <Route path='/' element = {<Home/>}></Route>
            <Route path='/productdetails' element= {<ProductDetails/>}></Route>
            </Route>

            <Route path='/AdminLogin' element = {<AdminLogin/>}></Route>
            <Route path='/AdminNavbar' element = {<AdminNavbar/>}></Route>
            <Route path='/AdminRegistration' element = {<AdminRegistration/>}></Route>
            <Route path='/AdminProduct' element = {<AdminProduct/>}></Route>
            <Route path='/AdminCategory' element = {<AdminCategory/>}></Route>
            <Route path='/Product' element = {<Product/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;