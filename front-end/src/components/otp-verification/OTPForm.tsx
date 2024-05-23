import  { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/dispatchHook';
import { useSelector } from 'react-redux';
import { RootState } from '../../main';
import { generateOTPForEmails } from '../../store/user/userActions';
import './OTPForm.scss';

const OTPForm = () => {
  const [otps, setOTP] = useState(['', '', '', '', '', '']);
  const dispatch = useAppDispatch();

  const userData = useSelector((state: RootState) => state?.user?.userData);
  const otp = useSelector((state: RootState) => state?.user?.otp);

  //Call API when the component mounts.
  useEffect(() => {
    if(otp === null) {
      dispatch(generateOTPForEmails(userData))
    }
  }, [])

  const handleInputChange = (index, value) => {
    const newOTP = [...otps];
    newOTP[index] = value;
    setOTP(newOTP);
  }

  const renderOTPFields = () => {
    return otps.map((value, index) => (
      <input
        key={index}
        type="number"
        className={`otp__digit otp__field__${index}`}
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    ));
  };

  const renderResult = () => {
    const finalKey = otps.join('');
    const isValid = finalKey.length === 6;
    return (
      <div className="result">
        <p id="_otp" className={isValid ? '_ok' : '_notok'}>
          {finalKey}
        </p>
      </div>
    );
  };

  return (
    <div className="otp-form">
      <div className="title">
        <h3>OTP VERIFICATION</h3>
        <p className="info">An otp has been sent to ********k876@gmail.com</p>
        <p className="msg">Please enter OTP to verify</p>
      </div>
      <div className="otp-input-fields">{renderOTPFields()}</div>
      {renderResult()}
    </div>
  );
};

export default OTPForm;
