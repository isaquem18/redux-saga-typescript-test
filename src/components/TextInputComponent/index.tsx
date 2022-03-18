import { TextInput, TextInputProps } from 'react-native';
import { 
  Container,
  Label,
  Input
} from './styles';

interface Props extends TextInputProps {
  label: string;
}

export function TextInputComponent({
  label,
  ...rest
}: Props) {

  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  )
}