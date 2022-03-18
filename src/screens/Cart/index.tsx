import React from 'react';
import { CartList } from '../../components/CartList';

import {
  Container
} from './styles';

export function Cart() {


  return (
    <Container>
      <CartList />
    </Container>
  )
}