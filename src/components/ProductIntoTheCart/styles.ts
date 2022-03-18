import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFPercentage(12)}px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
`;

export const Title = styled.Text``;

export const Price = styled.Text`
  color: #6aaf5d;
  font-weight: 800;
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 20px;
`;

export const AmountBox = styled.View`
  background-color: red;
  border-radius: 30px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Amount = styled.Text`
  font-size: 12px;
  font-weight: 900;
  color: #fff;

`;

export const Total = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 15px;
  color: #000;
  font-weight: 900;
  margin-bottom: ${RFPercentage(3)}px;
  text-align: right;
`;