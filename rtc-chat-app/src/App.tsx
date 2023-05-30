import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Chatroom from "./pages/Chatroom";
import styled from "styled-components";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";
import Header from "./components/common/Header";
import PrivateRoute from "./components/authentication/PrivateRoute";
import FencedRoute from "./components/authentication/FencedRoute";


const SBody = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

function App() {
  return (
    <Router>
      <AuthProvider>
        <SBody className="App">
          <Header />
          <Routes>

            <Route path="/" element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
              
            } />

            <Route path="/signup" element={
              <FencedRoute>
                <Signup />
              </FencedRoute>
              
            } />

            <Route path="/login" element={
              <FencedRoute>
                <Login />
              </FencedRoute>
              
            } />

            <Route path="/chatroom" element={
              <PrivateRoute>
                <Chatroom />
              </PrivateRoute>

            } />


          </Routes>
        </SBody>
      </AuthProvider>
    </Router>
  );
}

export default App;
