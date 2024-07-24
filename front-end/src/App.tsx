
import { useNavigate } from "react-router-dom";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import PrivateRoute from "./components/authentication/PrivateRoute";
import HomePage from "./components/homepage/HomePage";
import PageNotFound from "./components/error-components/PageNotFound";
import NavBar from "./components/navbar/NavBar";
import ErrorFallback from "./components/errorboundary/ErrorFallback";
import Loader from "./components/loader/Loader";
import ForgotPassword from "./components/forgot-password/ForgotPassword";
import "./App.scss";
import ResetPassword from "./components/reset-password/ResetPassword";
import MainPage from "./components/mainpage/MainPage";

function App() {
  const isAuthenticated = true; // Simulate authentication state
  const history = useNavigate();
  const handleErrorReset = () => {
    history("/");
  };
  const [loading, setLoading] = useState(false);
  
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <div className="app">
        <Loader loading={loading} />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleErrorReset}
        >
          <NavBar handleLoading={() => {}} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  component={HomePage}
                  path={""}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/Home" element={<MainPage/>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Suspense>
  );
}

export default App;
