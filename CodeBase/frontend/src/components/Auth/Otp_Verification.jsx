import axios from "axios";
import  { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();  // React Router's useNavigate hook
  const { email, phone , role } = useParams();
  console.log(phone, email);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically focus next input if not the last input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    const data = {
      email,
      otp: enteredOtp,
      phone,
    };
    await axios
      .post("http://localhost:3001/api/v1/user/otp-verification", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        role === "buyer" ? navigate("/user-dashboard") : navigate("/seller-registration");
        
      })
      .catch((err) => {
        toast.error(err.response.data.message);
       
      });
  };

  const handleGoBack = () => {
    navigate('/login');  // Navigates to '/login' when clicked
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">Enter the 5-digit OTP sent to your registered email or phone.</p>

        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Verify OTP
          </button>
        </form>

        <button
          onClick={handleGoBack}
          className="mt-4 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
