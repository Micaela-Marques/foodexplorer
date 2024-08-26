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

import { useParams } from 'react-router-dom'

export function CreateFood({ ...rest }) {
  const { id } = useParams()

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

          <h1>{id ? 'Editar prato' : 'Novo prato'}</h1>
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
          <div className="content-ingredients-card">
            <div className="description-ingredients">
              <p>Ingredientes</p>
              <div className="ingredients-inputs">
                <FoodItem
                  className="input-added-ingredient"
                  value="Pão Naan"
                />
                <FoodItem
                  placeholder="Adicionar"
                  className="input-new"
                  isNew
                />
              </div>
            </div>
            <div>
              <Input
                className="price"
                type="text"
                label="Preço"
                placeholder="R$ 00.00"
              />
            </div>
          </div>
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
            title={id ? 'Salvar alterações' : 'Salvar alterações'}
          />

          {id && (
            <Button
              className="delete"
              title="Excluir prato"
            />
          )}
        </SubmitButton>
      </CreatedProduct>

      <Footer />
    </Container>
  )
}
