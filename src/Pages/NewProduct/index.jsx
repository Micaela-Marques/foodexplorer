import { Container, Main, Image, Section, CardInfo, CardTag, Card } from './styles'

import { Footer } from '../../components/Footer'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { PiCaretLeftBold } from 'react-icons/pi'

export function NewProduct({ Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <Main>
        <Card>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </Card>

        <CardInfo>
          <div>
            <Image />
          </div>

          <div>
            <div className="text_card">
              <h1>Salada Ravanello</h1>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados <br /> com gergelim. O pão naan
                dá um toque especial.
              </p>

              <CardTag>
                <Tag title="alface" />
                <Tag title="cebola" />
                <Tag title="pão naan" />
                <Tag title="pepino" />
                <Tag title="rabanete" />
                <Tag title="tomate" />
              </CardTag>
            </div>
            <Section>
              <Button title="Editar Prato" />
            </Section>
          </div>
        </CardInfo>
      </Main>

      <Footer classname="footer" />
    </Container>
  )
}
