import {
  Container,
  Card,
  CardDetails,
  ButtonContainer,
  IngredientsCard,
  ButtonSubmit,
  Section,
  Main
} from './styles'
import { Footer } from '../../components/Footer'
import { PiCaretLeftBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { TextArea } from '../../components/TextArea'
import { FoodItem } from '../../components/Fooditem'

export function CreateFood({ Icon, ...rest }) {
  return (
    <Container {...rest}>
      <Main>
        <Section>
          <Link
            to="/"
            className="link"
          >
            <PiCaretLeftBold />
            <span>Voltar</span>
          </Link>

          <h1>Adicionar prato</h1>
        </Section>

        <Card>
          <CardDetails>
            <ButtonContainer>
              <label className="upload-button">Imagem do prato</label>
              <Button
                id="upload-button"
                Icon={PiUploadSimpleBold}
                title="Selecione a imagem"
              />
            </ButtonContainer>

            <Input
              className="title"
              type="text"
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
            />

            <Input
              className="category"
              type="text"
              label="Categoria"
              placeholder="Ex.: Salada Ceasar"
            />
          </CardDetails>

          <IngredientsCard>
            <div className="ingredient">
              <label
                htmlFor="test"
                className=""
              >
                Ingredientes
              </label>
              <div className="test">
                <FoodItem
                  className="tag1"
                  value="Pão Naan"
                />
                <FoodItem
                  className="tag2"
                  isNew
                />
              </div>
            </div>
            <Input
              className="price"
              type="text"
              label="Preço"
              placeholder="R$ 00.00"
            />
          </IngredientsCard>

          <TextArea
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          <ButtonSubmit>
            <Button
              className="Submit"
              title="Salvar alterações"
            />
          </ButtonSubmit>
        </Card>
      </Main>

      <Footer className="footer" />
    </Container>
  )
}
