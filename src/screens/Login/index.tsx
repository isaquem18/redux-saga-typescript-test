import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  Container,
  InputName,
  InputPassword,
  LoginButton,
  LoginButtonText
} from './styles';

export function Login() {
  const [username, setUsername] = useState<string>('' as string);
  const [password, setPassword] = useState<string>('' as string);

  const { navigate } = useNavigation<any>();

  function handleLoginClick() {
    navigate('bottom-tabs')
  }

  return (
    <Container>
      <InputName 
        onChangeText={setUsername} 
        value={username} 
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <InputPassword  
        onChangeText={setPassword} 
        value={password}
        autoCapitalize="none"
        autoCompleteType="name"
      />
      <LoginButton
        onPress={handleLoginClick}
      >
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </Container>
  )
}