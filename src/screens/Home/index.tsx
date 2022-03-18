import React, { useEffect } from 'react';
import { ShowData } from '../../components/ShowData';
import { ProductList } from '../../components/ProductList';

import {
  Container,
} from './styles';

export function Home() {
 

  return (
    <Container>
      <ShowData
        label="Username"
        info={'username'}
      />
      <ShowData
        label="Password"
        info={'password'}
      />
      <ProductList />
    </Container>
  )
}