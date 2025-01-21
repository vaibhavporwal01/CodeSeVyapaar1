import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation
import { toast } from 'react-toastify';

const SellerRegistration = () => {
  const [shopName, setShopName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [verificationMethod, setVerificationMethod] = useState('email'); // Default to 'email'
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleInputChange = (e) => {
    const { value } = e.target;
    setVerificationMethod(value); // Update the state for verificationMethod
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      name: shopName, // Use the correct state variable 'shopName'
      email,
      phone: `+91${phoneNumber}`,
      password,
      zipCode,
      address,
      verificationMethod,
    };

    try {
      const res = await axios.post("http://localhost:3001/api/v1/seller/register", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      
      toast.success(res.data.message);
      navigate(`/seller-otp-verification/${email}/+91${phoneNumber}`); // Correct navigation using navigate
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="seller-registration flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6">Seller Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="shopName" className="block text-sm font-semibold">Shop Name</label>
            <input 
              type="text" 
              id="shopName" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
            <input 
              type="text" 
              id="phoneNumber" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-semibold">Address</label>
            <textarea 
              id="address" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-semibold">Zip Code</label>
            <input 
              type="text" 
              id="zipCode" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Select Verification Method:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="verificationMethod"
                  value="email"
                  checked={verificationMethod === "email"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Email
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="verificationMethod"
                  value="phone"
                  checked={verificationMethod === "phone"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Phone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="verificationMethod"
                  value="sms"
                  checked={verificationMethod === "sms"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                SMS
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
          >
            Register as Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerRegistration;
