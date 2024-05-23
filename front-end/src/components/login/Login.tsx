import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/user/userActions";
import { useAppDispatch } from "../../hooks/dispatchHook";
import "./Login.sass";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });((
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {userData} = (store)

  const handleInputChange = (e: any) => {
    setFormData((currentFormData: any) => ({
      ...currentFormData,
       [e.target.name]: e.target.value,
     }));
  };
  
  const onSubmit = async (e: any) => {
    e.preventDefault(); // Prevent form from refreshing the page
   dispatch(registerUser(formData))
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
