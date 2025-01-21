import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/Auth/login';
import OTPVerification from './components/Auth/Otp_Verification';
import SellerRegistration from './components/Auth/SellerRegistration';
import OrderPage from './components/Dashboard/seller-Components/order/orderpage';
import UserDashboard from './components/Dashboard/UserDashboard';
import Auction from './components/Dashboard/user-components/auction';
import Product from './components/Dashboard/user-components/product';
import SellerDashboard from './components/Dashboard/SellerDashboard';
import TemplateSelector from "./components/Dashboard/new_product/TemplateSelector";
import CustomTemplateBuilder from './components/Dashboard/new_product/TemplateBuilder';
import Preview from './components/Dashboard/new_product/PreviewPage';
import SellerOTPVerification from './components/Auth/sellerOTP_Verification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification/:email/:phone/:type" element={<OTPVerification />} /> {/* New Route */}
        <Route path="/seller-registration" element={<SellerRegistration />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/add-product" element={<TemplateSelector />} />
        <Route path="/custom-template" element={<CustomTemplateBuilder />} />
        <Route path="/preview" element={<Preview />} />
        <Route path='/auction' element={<Auction />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/seller-otp-verification/:email/:phone' element={<SellerOTPVerification/>}/>
      </Routes>
    </Router>
  );
}

export default App;
