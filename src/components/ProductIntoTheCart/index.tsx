import { useMemo } from 'react';
import { ICart } from '../../store/reducers/Cart/types';
import {
  Container,
  AmountBox,
  Amount,
  Title,
  Price,
  Total
} from './styles';

interface Props {
  data: ICart;
}

export function ProductIntoTheCart({
  data: {
    amount,
    product: {
      name,
      price
    }
  }
}: Props) {

  const formattedPrice = Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const totalAmount = useMemo(() => Number(price * amount).toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }), [amount, price]);

  return (
    <>
      <Container>
        <Title>{name}</Title>
        <AmountBox><Amount>{amount}</Amount></AmountBox>
        <Price>{formattedPrice}</Price>
      </Container>
      <Total>TOTAL: {totalAmount}</Total>
    </>
  )
}