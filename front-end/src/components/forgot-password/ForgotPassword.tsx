import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { generateOTPForEmails } from "@/store/user/userActions";
import { useAppDispatch } from "@/hooks/dispatchHook";
import './ForgotPassword.scss'
import OTPForm from "../otp-verification/OTPForm";
import ResetPassword from "../reset-password/ResetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
	const [otpsent, setOtpSent] = useState<boolean>(false);
  const [resetPasswordPage, setResetPasswordPage] = useState<boolean>(false);
	const dispatch = useAppDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
		console.log('email', email)
		dispatch(generateOTPForEmails({email: email}));
		setOtpSent(true);
  };

	console.log(otpsent)
  return (
		!otpsent ? 
    <div className="forgot-password-container">
      <p className="title">Happens To The Best of Us! Secure Your Access With a Fresh Password.</p>
      <form
        onSubmit={handleSubmit}
				className="forgot-pass-form"
      >
        <TextField
          label='Enter your email here'
          value={email}
					className="email-field"
          onChange={handleEmailChange}
          required
        />
        <Button
          type="submit"
          className="reset-button"
        >
          Send OTP
        </Button>
				<p className="reset-footer">By Clicking on Send Button.You are allowing to our <Link to='' >privacy policy.</Link></p>
      </form>		
    </div> : resetPasswordPage ?  (<ResetPassword email={email}/> ) :
		 <OTPForm context="password-reset" setIsSignUp={setResetPasswordPage}/>
  );
};

export default ForgotPassword;
