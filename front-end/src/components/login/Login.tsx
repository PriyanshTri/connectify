import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.sass";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const isAuthenticated = true; // Simulate authentication state
    if(isAuthenticated){
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`container ${isSignUp ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create Account</h1>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
          />
          {errors.name && <p>Name is required</p>}
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>Email is required</p>}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>Password is required</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign in</h1>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>Email is required</p>}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>Password is required</p>}
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
  );
};

export default Login;
