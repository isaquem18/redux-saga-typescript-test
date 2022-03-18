import { Text, Touchable } from 'react-native';
import {
  Container,
  Name,
  Price,
  DeleteButton,
  DeleteIcon,
  AddToCardButton,
  AddToCardIcon
} from './styles';



export interface IProduct {
  productId: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
} ;

interface Props {
  product: IProduct, 
  onDelete: (id: string) => void;
  onAddToCart: (product: IProduct) => void;

}

export function Product({
  product,
  onDelete,
  onAddToCart
}: Props) {
  const { productId, id, name, price, quantity} = product;


  return (
    <Container>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <DeleteButton onPress={() => onDelete(productId)}>
        <DeleteIcon />
      </DeleteButton>
      <AddToCardButton onPress={() => onAddToCart(product)}>
        <AddToCardIcon />
      </AddToCardButton>

    </Container>
  )
}