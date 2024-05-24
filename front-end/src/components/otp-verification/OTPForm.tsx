import {  useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../main';
import CentralizedButton from '../centralized-button/CentralizedButton';
import './OTPForm.scss';
import { useNavigate } from 'react-router';

export type  OTPFormProps = {
  setSignUpComplete:(_:boolean) => void;
  setIsSignUp:(_:boolean) => void;
}

const OTPForm = ({setSignUpComplete, setIsSignUp} : OTPFormProps) => {
  const [otps, setOTP] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState<string>('')
  const emailRefs = useRef([]);
  const navigate= useNavigate();
  const userData = useSelector((state: RootState) => state?.user?.userData);
  const otp = useSelector((state: RootState) => state?.user?.otp);

  const handleInputChange = (index, value) => {
    const newOTP = [...otps];
    newOTP[index] = value;
    setOTP(newOTP);
    // Move to the next input field
    if (value && index < otps.length - 1) {
      emailRefs.current[index + 1]?.focus();
    }
  }

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !otps[index]) {
      emailRefs.current[index - 1].focus();
    }
  }

  const renderOTPFields = () => {
    return otps.map((value, index) => (
      <input
        key={index}
        type="text"
        className={`otp__digit otp__field__${index}`}
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
        onKeyDown={(e) => handleBackspace(index, e)}
        ref={(input) => {
          emailRefs.current[index] = input;
        }}
      />
    ));
  };

  const renderResult = () => {
    const finalKey = otps.join("");
    const isValid = finalKey.length === 6;
    if (isValid && finalKey === otp?.otp) {
      setMessage("Successfully verified. Welcome to Connectify. Please Login With Your Credentials.");
    } else {
      setMessage("Oops ! Invalid OTP . Please Try Again.");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (message?.includes('Successfully verified')) {
        setSignUpComplete(false);
        navigate('/login');
        setIsSignUp(false);
      }
    }, 1500);
  
    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div className="otp-form">
      <div className="title">
        <h3>OTP VERIFICATION</h3>
        <p className="info">An otp has been sent to {userData?.email.replace(/.(?=.{4})/g, '*')}</p>
        <p className="msg">Please enter OTP to verify</p>
      </div>
      <div className="otp-input-fields">{renderOTPFields()}</div>
      <CentralizedButton buttonText={'Validate OTP'} context='otp-verify-button' onClick={renderResult}/>
      <div className='user-message'>{message !== '' ? message : ''}</div>    
    </div>
  );
};

export default OTPForm;
