import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 14px 10px;

`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const Info = styled(Label)`
    font-size: 18px;
    font-weight: 400;
    color: #00000040;
`;
