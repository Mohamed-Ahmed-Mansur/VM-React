import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleLoginButton from '../components/google';

const LoginForm = styled.div`
  margin: 0 auto;
  padding: 3.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorMsg = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Google= styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 190px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Please enter a password with at least 6 characters.');
      return;
    }

    setError('');
    window.location.href = "http://192.168.136.129:8190/#/";
  };

  return (
    <LoginForm>
      <Title>Login</Title>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <SubmitButton onClick={handleLogin}>Login</SubmitButton>
      <Google>
        <p>or login with</p>
        <GoogleLoginButton />
      </Google>
    </LoginForm>
  );
};

export default Login;
