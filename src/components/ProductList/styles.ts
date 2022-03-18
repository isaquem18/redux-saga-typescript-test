import { FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = (styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 12,
    paddingVertical: 50
  }
})`
  flex: 1;
  background-color: #00000040;
` as unknown) as typeof FlatList;

export const Footer = styled.View`
  height: ${RFPercentage(5)}px;
  width: 100%;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

export const Total = styled.Text`
  width: ${RFPercentage(5)}px;
  color: #fff;
`;
