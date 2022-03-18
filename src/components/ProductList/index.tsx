import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { IProduct, Product } from '../Product'; 
import {
  Container
} from './styles';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { AddProductToCart } from '../../store/reducers/Cart/actions';


export function ProductList() {
  const [ productList, setProductList ] = useState<IProduct[]>([] as IProduct[]);

  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('products')
      .onSnapshot((items) => {
        const setList = items.docs.map((item) => ({
          productId: item.id,
          ...item.data()
        })) as IProduct[];

        setProductList(setList);
      })

  }, [])

  async function handleDeleteProduct(id: string) {
    firestore()
      .collection('products')
      .doc(id)
      .delete()
      .then((response) => {
        console.log(response);
        Alert.alert('Tudo certo!', 'produto deletado com sucesso');
      })
  }

  async function handleAddProductToCart(product: IProduct) {
    dispatch(AddProductToCart(product));
  }  



  return (
    <Container
      data={productList}
      keyExtractor={(item) => item.productId.toString()}
      renderItem={({item}) => (
        <Product 
          onDelete={handleDeleteProduct}
          product={item} 
          onAddToCart={handleAddProductToCart}
        />
      )}
    />
  )
}