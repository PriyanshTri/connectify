import "./App.sass";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/authentication/PrivateRoute";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/navbar/NavBar";

function App() {
  const isAuthenticated = true; // Simulate authentication state

  return (
    <>
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
    </>
  );
}

export default App;
