import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Dash from './components/Dash';
import Products from './components/Products';


export default (
    <Routes>
        <Route index path='/' element ={<Dash />} />
        <Route path= '/auth' element={<Auth />} />
        <Route path='/cart' element={<Cart />} />
        <Route path= '/products' element={<Products />} />
    </Routes>
)