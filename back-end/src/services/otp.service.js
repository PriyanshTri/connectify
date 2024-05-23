import otpGenerator from 'otp-generator'

export const generateOTP = () => {
  const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
  return OTP;
};
