import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { generateOTPForEmails, loginUser, registerUser, validateUserNameAndEmail } from "@/store/user/userActions";
import { useAppDispatch } from "@/hooks/dispatchHook";
import { useSelector } from "react-redux";
import { RootState } from "@/main";
import OTPForm from "../otp-verification/OTPForm";
import signInSvg from '../../assets/meet_the_team.svg'
import { Typography, TextField, Button } from "@mui/material";
import "./Login.scss";

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

  //To accommodate user data while login.
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

  //If the user is valid , navigate it to main screen page
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

  useEffect(() => {
    if(formData?.email === '') {
      setEmailMessage('');
    }else if(formData?.username === '') {
      setUserNameMessage('');
    }
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
        <Typography className="create-account">Create Your Account</Typography>
            <TextField
              fullWidth
              label='User Name'
              name="username"
              value={formData?.username || ""}
              onChange={handleInputChange}
              error={Boolean(userNameMessage?.toLocaleLowerCase()?.includes('already exists'))}
              helperText={userNameMessage!== '' && formData?.username !== '' ? !userNameMessage?.toLocaleLowerCase()?.includes('already exists')? <><CheckCircleIcon className="tick-icon"/>{userNameMessage}</> : <><ErrorIcon className="error-icon"/>{userNameMessage}</> : ''}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData?.email || ""}
              onChange={handleInputChange}
              error={Boolean(emailMessage?.toLocaleLowerCase()?.includes('already exists'))}
              helperText={emailMessage!== '' && formData?.email !== '' ? !emailMessage?.toLocaleLowerCase()?.includes('already exists')? <><CheckCircleIcon className="tick-icon"/>{emailMessage}</> : <><ErrorIcon className="error-icon"/>{emailMessage}</> : ''}

            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password || ""}
              onChange={handleInputChange}
              type="password"
            />
          <Button type="submit" variant="contained">Sign Up</Button>
        </form>
      </div>

      <div className="vertical-line"></div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleLoginClick}>
        <Typography className="sign-in-text">Sign In And Get On-Board!</Typography>
            <TextField
              fullWidth
              label="Email or Username"
              name="email"
              value={loginData.email || ''}
              onChange={handleLoginData}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={loginData.password || ""}
              onChange={handleLoginData}
              type="password"
            />
              <Link to="/forgot-password" className="forgot-password-text">Forgot Your Password?</Link>
            <Button type="submit" variant="contained" className="sign-in-button">Connectify Now</Button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <Typography className="welcome-back">Feeling Deja Vu? Sign In</Typography>
            <Typography className="welcome-back"> To Revisit Your Social Kingdom!</Typography>
            <Typography className="welcome-message">Keep Connected With Your Socio-Verse.</Typography>
            <img src={signInSvg} className="sign-in-image"></img>
            <Button
              className="ghost"
              id="signIn"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </Button>
          </div>
          <div className="overlay-panel overlay-right">
            <Typography className="hello-friends">FOMO Got You Down? Create Your Account & Turn That Frown Upside Down! </Typography>
            <Typography className="hello-text">New faces only! The party's on the other side. Sign Up Now!</Typography>
            <Button
              className="ghost"
              id="signUp"
              variant="contained"
              onClick={() => setIsSignUp(true)}
            >
              Join the Fun
            </Button>
          </div>
        </div>
      </div>
    </div>
    : <OTPForm setSignUpComplete={setSignUpComplete} setIsSignUp={setIsSignUp}/>
  );
};

export default Login;
