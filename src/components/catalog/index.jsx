import { Container } from './styles';
import { Carousel } from '../Carrossel'; 

export function Catalog({ Icon, foods, title, userDefault, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}

      <h1>{title}</h1>
    <div>
      <Carousel foods={foods} userDefault={userDefault} />

    </div>
    </Container>
  );
}
