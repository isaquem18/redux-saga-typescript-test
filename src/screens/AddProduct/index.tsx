import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

import { TextInputComponent } from '../../components/TextInputComponent';

import {
  Container
} from './styles';

export function AddProduct() {
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  async function handleAddProduct() {
    if (name.length <= 2 || price.length <= 2 || quantity.length < 1) {
      Alert.alert('preencha algo', 'não é permitido campo vazio');
      return;
    }

    firestore()
      .collection('products')
      .add({
        id: uuid.v4(),
        name,
        price: Number(price),
        quantity: Number(quantity)
      })
      .then((response) => {
        Alert.alert('Produto adicionado com sucesso!');
        setName('');
        setPrice('');
        setQuantity('');
      })
      .catch((error) => {
        Alert.alert('Erro');
      })

  };


  return (
    <Container>
      <TextInputComponent
        label="nome"
        value={name}
        onChangeText={setName}
      />
      <TextInputComponent
        label="preço"
        value={price}
        onChangeText={setPrice}
      />
      <TextInputComponent
        label="quantidade"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button
        title="Adicionar produto"
        onPress={handleAddProduct}
      />
    </Container>
  )
}