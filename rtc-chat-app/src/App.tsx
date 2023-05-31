import React, { useEffect } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Chatroom from "./pages/Chatroom/Chatroom";
import styled from "styled-components";
import AuthProvider, { useAuth } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Header from "./components/common/Header";
import PrivateRoute from "./components/authentication/PrivateRoute";
import FencedRoute from "./components/authentication/FencedRoute";
import * as Wss from "./util/wss";
import { useSelector, useDispatch } from "react-redux";
import { setIdentity } from "./store/actions";

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  //const identity = useSelector((state: any) => state.reducer.identity);

  const { currentUser } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const init = () => {
      Wss.connectWithSocketIOServer();

    };

    init();
  }, []);

  useEffect(() => {

    const initIdentity = () => {
      if(currentUser !== null && currentUser !== undefined){
        dispatch(setIdentity(currentUser.uid))
      }
    }

    return initIdentity
    
  },[currentUser])

  return (
    <Router>
      <AuthProvider>
        <SBody className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <FencedRoute>
                  <Signup />
                </FencedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <FencedRoute>
                  <Login />
                </FencedRoute>
              }
            />

            <Route
              path="/chatroom"
              element={
                <PrivateRoute>
                  <Chatroom />
                </PrivateRoute>
              }
            />
          </Routes>
        </SBody>
      </AuthProvider>
    </Router>
  );
}

export default App;
