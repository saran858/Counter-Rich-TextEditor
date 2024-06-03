import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { Container } from "@mui/material";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/signin"
            element={<SignIn setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<SignUp setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/"
            element={loggedIn ? <HomePage /> : <Navigate to="/signin" />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
