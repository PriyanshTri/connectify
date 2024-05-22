import "./App.sass";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage";

function App() {
  const isAuthenticated = false;
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      {/* private route page is not working, try to debug it and find the solution(error in console) */}
      {/* <PrivateRoute */}
      <Route
        path="/"
        component={HomePage}
        isAuthenticated={isAuthenticated}
      />
    </Routes>
  );
}

export default App;
