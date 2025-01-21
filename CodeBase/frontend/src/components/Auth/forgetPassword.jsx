import  {  useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3001/api/v1/user/password/forgot/",
        { email },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="">
        <div className="">
          <h2>Forgot Password</h2>
          <p>Enter your email address to receive a password reset token.</p>
          <form
            onSubmit={handleForgotPassword}
            className=""
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
            <button type="submit" className="">
              Send Reset Link
            </button>
          </form>
          <a href="/auth"> <button className=""  >Go back</button></a> 
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;