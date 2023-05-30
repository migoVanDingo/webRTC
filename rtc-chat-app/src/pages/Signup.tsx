import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { SFlexCol } from "../components/styled/container.styled";

const SContainer = styled(SFlexCol)`
    background-color: #1f1f1f;  
`

const SCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: #f6f6f6;
  padding: 1.5rem 3rem 3rem;
  border-radius: 8px;
  margin-top: 80px;
  box-shadow: 2px 2px 2px #dedede;
  
`;

const SSubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: green;
  color: white;
  border-radius: 6px;

  margin-top: 40px;
 
  
 
  font-family: inherit;

  &:hover {
    background-color: #00a600;
  }
  &:active {
    background-color: #005400;
  }
`;

const STextInputLabel = styled.label`
  align-self: flex-start;
  font-size: 0.8rem;
  margin: 10px 0px 5px;
`;

const STextInput = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 4px;
  border: 1px solid #bebebe;
  padding: 3px 10px;
`;

const SSmallLink = styled.a`
  font-size: 0.7rem;
  margin-top: 20px;
  color: blue;
`;

const SError = styled.p`
  font-size: 0.7rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  width: 100%;
  padding: 15px;
  border-radius: 6px;
  display: none;

  &.green {
    color: green;
    background-color: #ccffcc;
    display: block;
  }

  &.red {
    color: red;
    background-color: #ffc1c1;
    display: block;
  }
`;

export default function Signup() {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pwRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pwVerifyRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { signUp } = useAuth();
  const navigate = useNavigate()

  async function handleSubmit() {
    if (pwRef.current.value !== pwVerifyRef.current.value) {
      return setError("Password do not match");
    }

    try {
      const user = await signUp(emailRef.current.value, pwRef.current.value);


      if (user.user !== null) {
        setMessage("Success! Account Created");
        navigate("/login")

      }
    } catch (error) {
      console.error(error);
      setError("Failed to create account");
    }
  }

  return (
    <SContainer>
      <SCard>
        <h3>Sign Up</h3>
        <STextInputLabel>Email</STextInputLabel>
        <STextInput type="email" ref={emailRef} />

        <STextInputLabel>Password</STextInputLabel>
        <STextInput type="password" ref={pwRef} />

        <STextInputLabel>Verify Password</STextInputLabel>
        <STextInput type="password" ref={pwVerifyRef} />
        <SError className={error ? "red" : message ? "green" : ""}>
          {error ? error : message ? message : ""}
        </SError>

        <SSubmitButton onClick={handleSubmit}>Create Account</SSubmitButton>

        <SSmallLink href="/login">Already Have an Account? Login</SSmallLink>
      </SCard>
    </SContainer>

  );
}
