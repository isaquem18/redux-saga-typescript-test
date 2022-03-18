import { TextInputProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #eee;
  padding: 14px;
  padding-top: 50px;
`;

interface InputProps extends TextInputProps {};

export const InputName = styled.TextInput<InputProps>`
  background-color: #fff;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 14px;
`;

export const InputPassword = styled(InputName)``;

export const LoginButton = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #f00;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;
