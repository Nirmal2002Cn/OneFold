import './App.css';
import Navbar from './components/navbar/navbar';
import Account from './components/Account/account';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Women from './pages/womens/womens';
import Men from './pages/mens/mens';
import Kids from './pages/kids/kids';
import HomeLiving from './pages/home & living/living';
import MotherBaby from './pages/mother & baby/babies';
import Party from './pages/party/party';
import Footer from './components/footer/footer';
import {CartProvider} from './components/CartProvider';
import CartPage from './components/CartPage';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home-living" element={<HomeLiving />} />
        <Route path="/mother-baby" element={<MotherBaby />} />
        <Route path="/party" element={<Party />} />
        <Route path="/account" element={<Account />} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product/:category/:id' element={<ProductDetail />} /> {/* 🧠 Dynamic page */}
        
      </Routes>
      <Footer />

   </CartProvider>
    </Router>
  );
}

export default App;
