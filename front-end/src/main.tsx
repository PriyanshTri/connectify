import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import App from "./App.tsx";
import rootReducer from "./store/rootReducer.ts";
import { thunk } from "redux-thunk";
import "./index.css";
import "./global.scss";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./components/dark-theme/darkTheme.tsx";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
