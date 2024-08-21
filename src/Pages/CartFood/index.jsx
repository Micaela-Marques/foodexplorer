import { Container, Main, Image, Section, CardInfo, CardTag, Card } from './styles'
import { Footer } from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { PiCaretLeftBold } from 'react-icons/pi'

export function CartFood({ Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <Main>
        <Card>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </Card>

        <Image />
        <CardInfo>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados <br /> com gergelim. O pão naan dá
            um toque especial.
          </p>

          <CardTag>
            <Tag title="alface" />
            <Tag title="cebola" />
            <Tag title="pão naan" />
            <Tag title="pepino" />
            <Tag title="rabanete" />
            <Tag title="tomate" />
          </CardTag>
          <Section>
            <FiMinus size={20} />

            <span>01</span>

            <IoAdd size={20} />

            <Button title="incluir∙R$ 25,00" />
          </Section>
        </CardInfo>
      </Main>

      <Footer classname="footer" />
    </Container>
  )
}
