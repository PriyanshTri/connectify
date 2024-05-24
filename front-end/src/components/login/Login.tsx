import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOTPForEmails, loginUser, registerUser, validateUserNameAndEmail } from "../../store/user/userActions";
import { useAppDispatch } from "../../hooks/dispatchHook";
import { useSelector } from "react-redux";
import { RootState } from "../../main";
import OTPForm from "../otp-verification/OTPForm";
import "./Login.scss";
import { debounce } from "../../hooks/debounceHook";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [signUpComplete, setSignUpComplete] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [userNameMessage, setUserNameMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  //To accomodate user data while login.
  const [loginData, setLoginData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userData = useSelector((state: RootState) => state?.user?.userData);
  const loginUserData = useSelector((state: RootState) => state?.user?.loginUserData);
  const validationMessage = useSelector((state: RootState) => state?.user?.validationMessages);

  const handleInputChange = (e: any) => {
    console.log('e', e)
    setFormData((currentFormData: any) => ({
      ...currentFormData,
      [e.target.name]: e?.target?.value,
    }));
  };

  //UseEffect manages to render the helper text messages if the username or email is taken.
  useEffect(() => {
    if (validationMessage?.['message']) {
      const text = validationMessage?.['message']?.split('.')

      // Check if both email and username are present
      if (formData?.email && formData?.username) {
        setUserNameMessage(text[0]);
        setEmailMessage(text?.[1]);
      } 
      // Check if only email is present
      else if (formData?.email) {
        setEmailMessage(text?.[1]);
      } 
      // Check if only username is present
      else if (formData?.username) {
        setUserNameMessage(text?.[0]);
      }
    }
  }, [validationMessage, formData.email, formData.username]);
  

  const handleLoginData = (e: any) => {
    setLoginData((currentFormData: any) => ({
      ...currentFormData,
      [e.target.name]: e?.target?.value,
    }));
  };

  useEffect(() => {
    if (userData && userData?.["userName"] !== "") {
      setSignUpComplete(true);
    }
  }, [userData]);

  //If the user is valid , naviagate it to main screen page
  useEffect(() => {
    if (loginUserData && loginUserData?.['accessToken']) {
      navigate('/home') //NOTE - Currently route is not decided for main UI page. It's just for checking.
    }
  }, [loginUserData]);

  useEffect(() => {
    if (userData && userData?.["email"] !== "" && signUpComplete) {
      dispatch(generateOTPForEmails(userData));
    }
  }, [signUpComplete]);

//UseEffect sending an action call to get status from api if username or email exists.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (formData.email !== "" || formData.username !== "") {
        dispatch(validateUserNameAndEmail(formData));
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [formData]);

  const onSubmit = async (e: any) => {
    e.preventDefault(); // Prevent form from refreshing the page
    dispatch(registerUser(formData));
  };

 //Function to be called when user clicks sign in button.
  const handleLoginClick = (e: any) => {
    e.preventDefault();
    dispatch(loginUser(loginData))
  };

  const handleNavigationURL = () => {
    if (isSignUp) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleNavigationURL();
  }, [isSignUp]);

  return (

    !signUpComplete ? 
    <div
      className={`container ${isSignUp ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form onSubmit={onSubmit}>
          <h1>Create Account</h1>
          <input
            name="username"
            value={formData.username || ""}
            onChange={handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <div className="validation-message-email">{userNameMessage !== '' ? userNameMessage : ''}</div> 
          <input
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <div className="validation-message-email">{emailMessage !== '' ? emailMessage : ''}</div>         
          <input
            name="password"
            value={formData.password || ""}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginClick}>
          <h1>Sign in</h1>
          <input
            name="email"
            value={loginData.email || ''}
            onChange={handleLoginData}
            type="text"
            placeholder="Email or Username"
          />
          <input
            name="password"
            value={loginData.password || ""}
            onChange={handleLoginData}
            type="password"
            placeholder="Password"
          />
          <a href="#">Forgot your password?</a>
          <button type="submit">
            Sign In
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    : <OTPForm setSignUpComplete={setSignUpComplete} setIsSignUp={setIsSignUp}/>
  );
};

export default Login;
