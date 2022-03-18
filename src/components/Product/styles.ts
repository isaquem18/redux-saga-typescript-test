import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(13)}px;
  border: 2px solid orange;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px; 
`;

export const Price = styled.Text``;

interface ButtonProps extends RectButtonProps {};

export const DeleteButton = styled(RectButton)<ButtonProps>`
  background-color: red;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  right: 5px;
  top: 5px;

`;

export const DeleteIcon = styled(FontAwesome5).attrs({
  name: 'trash-alt',
  size: 20,
  color: '#fff'
})``;


export const AddToCardButton = styled(RectButton)<ButtonProps>`
  background-color: blue;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  right: 5px;
  bottom: 5px;

`;

export const AddToCardIcon = styled(FontAwesome5).attrs({
  name: 'cart-plus',
  size: 20,
  color: '#fff'
})``;




