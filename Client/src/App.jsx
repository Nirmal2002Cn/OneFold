// src/App.jsx
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
import { CartProvider } from './components/CartProvider';
import CartPage from './components/CartPage';
import ProductDetail from './pages/productDetail/ProductDetail';
import SearchResults from './pages/SearchResults';
import AddProduct from './pages/admin/AddProduct';
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard.jsx/AdminDashboard';
import ManageOrders from './pages/admin/ManageOrders/ManageOrders';
import Checkout from './pages/checkout/Checkout';
import AdminOrderDetails from './pages/admin/AdminOrderDetails.css/AdminOrderDetails';
import OrderSuccess from './pages/order/OrderSuccess';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Navbar />

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/home-living" element={<HomeLiving />} />
            <Route path="/mother-baby" element={<MotherBaby />} />
            <Route path="/party" element={<Party />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path='/product/:category/:id' element={<ProductDetail />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin"element={<AdminDashboard/>} />


              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/orders" element={<ManageOrders />} />
             <Route path="/admin/order/:id" element={<AdminOrderDetails />} />

            </Route>
          </Routes>

          <Footer />
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
