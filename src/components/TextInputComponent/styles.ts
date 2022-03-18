import styled from 'styled-components/native';
import { TextInputProps, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${RFPercentage(4)}px;
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: ${RFPercentage(1)}px;
`;

export const Input = styled(TextInput)<TextInputProps>`
  background-color: #fff;
  height: ${RFPercentage(6)}px;
  width: 100%;
  padding: 10px;
`;