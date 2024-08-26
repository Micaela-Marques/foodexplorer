import {
  Container,
  CardDetails,
  ButtonUpload,
  IngredientsCard,
  Description,
  SubmitButton,
  GoBack,
  CreatedProduct
} from './styles'
import { Footer } from '../../components/Footer'
import { PiCaretLeftBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { TextArea } from '../../components/TextArea'
import { FoodItem } from '../../components/Fooditem'

export function CreateFood({ ...rest }) {
  return (
    <Container {...rest}>
      <CreatedProduct>
        <GoBack>
          <Link
            className="link"
            to="/"
          >
            <PiCaretLeftBold />
            <span>Voltar</span>
          </Link>

          <h1>Novo prato</h1>
        </GoBack>

        <CardDetails>
          <ButtonUpload>
            <label className="label-upload-button">Imagem do prato</label>
            <Button
              id="upload-button"
              Icon={PiUploadSimpleBold}
              title="Selecione a imagem"
            />
          </ButtonUpload>

          <Input
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
          />

          <Input
            className="category"
            type="select"
            label="Categoria"
            placeholder="Ex.: Salada Ceasar"
          />
        </CardDetails>

        <IngredientsCard>
          <p>Ingredientes</p>
          <div className="ingredient">
            <FoodItem
              className="tag1"
              value="Pão Naan"
            />
            <FoodItem
              placeholder="Adicionar"
              className="tag2"
              isNew
            />
          </div>
          <Input
            className="price"
            type="text"
            label="Preço"
            placeholder="R$ 00.00"
          />
        </IngredientsCard>

        <Description>
          <TextArea
            className="textarea"
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </Description>
        <SubmitButton>
          <Button
            className="Submit"
            title="Salvar alterações"
          />
        </SubmitButton>
      </CreatedProduct>

      <Footer />
    </Container>
  )
}
