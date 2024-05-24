import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import PrivateRoute from "./components/authentication/PrivateRoute";
import HomePage from "./components/homepage/HomePage";
import PageNotFound from "./components/error-components/PageNotFound";
import NavBar from "./components/navbar/NavBar";
import ErrorFallback from "./components/errorboundary/ErrorFallback";
import "./App.scss";

function App() {
  const isAuthenticated = true; // Simulate authentication state
  const history = useNavigate();
  const handleErrorReset = () => {
    history("/");
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
      <NavBar />
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
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
