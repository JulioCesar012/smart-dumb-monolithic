'use client'

import { FormEvent, useState } from 'react';
import * as S from './styles';

interface FormProps {
  handleSubmit: (e: FormEvent) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const FormHome = ({ handleSubmit, username, setUsername, password, setPassword }: FormProps) => {
  return (
    <S.Container>
    <S.LoginFormWrapper>
    <S.LoginFormTitle>Login</S.LoginFormTitle>
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.Label htmlFor="username">Username:</S.Label>
        <S.Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="password">Password:</S.Label>
        <S.Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.FormGroup>
      <S.Button type="submit">Login</S.Button>
    </S.Form>
  </S.LoginFormWrapper>
  </S.Container>
  )
}

const HomeContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const layoutProps = {
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
  }
  
  return  <FormHome {...layoutProps} />
}

export default HomeContainer;