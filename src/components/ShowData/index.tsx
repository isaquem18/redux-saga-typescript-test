import {
  Container,
  Label,
  Info
} from './styles';

interface Props {
  label: string;
  info: string;
}

export function ShowData({
  label,
  info
}: Props) {

  return (
    <Container>
      <Label>{label}</Label>
      <Info>{info}</Info>
    </Container>
  )
}