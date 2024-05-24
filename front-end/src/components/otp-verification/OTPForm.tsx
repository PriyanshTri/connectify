import {  useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../main';
import './OTPForm.scss';

const OTPForm = () => {
  const [otps, setOTP] = useState(['', '', '', '', '', '']);
  const emailRefs = useRef([]);
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
    const finalKey = otps.join('');
    const isValid = finalKey.length === 6;
    if (isValid && finalKey === otp?.otp) {
      // If OTP matches, show success message
      return (
        <div className="result">
          <p id="_otp" className="_ok">
            Successfully verified. Please login. Welcome to Connectify.
          </p>
        </div>
      );
    } else {
      return (
        <div className="result">
          <p id="_otp" className="_notok">
            {finalKey}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="otp-form">
      <div className="title">
        <h3>OTP VERIFICATION</h3>
        <p className="info">An otp has been sent to {userData?.email.replace(/.(?=.{4})/g, '*')}</p>
        <p className="msg">Please enter OTP to verify</p>
      </div>
      <div className="otp-input-fields">{renderOTPFields()}</div>
      {renderResult()}
    </div>
  );
};

export default OTPForm;
