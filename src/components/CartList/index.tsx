import { useMemo } from 'react';
import { Button, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { RootStateProps } from '../../store';
import { ProductIntoTheCart } from '../ProductIntoTheCart';

import {
  Container,
  Footer,
  Total
} from './styles';

export function CartList() {
  const cartList = useSelector((state: RootStateProps) => state.Cart); 
  
  const totalPriceFormatted = useMemo(() => {
    let totalPrice = cartList.reduce((acumulator: any, item) => { return acumulator += (item.amount * item.product.price) }, 0);
    totalPrice = Number(totalPrice).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return totalPrice;
  }, [cartList])

  return (
    <Container
      data={cartList}
      keyExtractor={(item) => item.product.productId}
      renderItem={({item}) => {
        return (
          <ProductIntoTheCart
            data={item}
          />
        )
      }}
      ListFooterComponent={() => (
        <Footer>
          <Total>TOTAL: {totalPriceFormatted}</Total>
        </Footer>
      )}
    />
  )
}