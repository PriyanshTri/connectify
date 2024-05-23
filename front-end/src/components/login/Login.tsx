import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import "./Login.sass";
import { apiCallTrigger, registerUserData, userProfileSelector } from "../../recoil-store/user";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [signUpSuccessful, setSignUpSuccessful] = useState<boolean>(false);
  
  const [profileData, setProfileData] = useState({})
  const [formData, setFormData] = useRecoilState(registerUserData);
  const  [shouldTriggerAPI, setShouldTriggerAPI] = useRecoilState(apiCallTrigger);
  const data = useRecoilValueLoadable(userProfileSelector)
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
       [e.target.name]: e.target.value,
     }));
  };

  useEffect(()=> {
    setProfileData(data)
  },[data])

  useEffect(()=> {
    console.log('profileData', profileData)
  },[profileData])

  const onSubmit = (e: any) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setShouldTriggerAPI(true)
  };

  const handleLoginClick = () => {
    const isAuthenticated = true; // Simulate authentication state
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleNavigationURL = () => {
    if (isSignUp) {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    handleNavigationURL();
  }, [isSignUp]);

  return (
    <div className={`container ${isSignUp? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={onSubmit}>
          <h1>Create Account</h1>
          <input
            name="username"
            value={formData.username || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password || ''}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={onSubmit}>
          <h1>Sign in</h1>
          <input
            name="email or username"
            value={formData.email || formData.username || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Email or Username"
          />
          <input
            name="password"
            value={formData.password || ''}
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <a href="#">Forgot your password?</a>
           <button type="submit" onClick={handleLoginClick}>
            Sign In
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
