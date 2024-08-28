import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  CardDetails,
  ButtonUpload,
  IngredientsCard,
  Description,
  SubmitButton,
  GoBack,
  CreatedProduct,
} from './styles';

import { Footer } from '../../components/Footer';
import { PiCaretLeftBold, PiUploadSimpleBold } from 'react-icons/pi';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { FoodItem } from '../../components/Fooditem';

export function CreateFood({ ...rest }) {
  const { id } = useParams();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const [foodImage, setFoodImage] = useState(null); 

  const inputFileRef = useRef(null); 

  const navigate = useNavigate();

  function handleBack() {
    navigate('/admin');
  }

  function handleAddIngredient() {
    if (newIngredient.trim()) {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient('');
    }
  }

  function handleDeleteIngredient(ingredientToDelete) {
       setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientToDelete)
    );
  }

  function handleChangeImageFood(e) {
    const file = e.target.files[0];
    setFoodImage(file);

    const imagePreview = URL.createObjectURL(file);
    setFoodImage(imagePreview);
  }

  function handleClickUpload() {
    inputFileRef.current.click(); 
  }

  return (
    <Container {...rest}>
      <CreatedProduct>
        <GoBack>
          <Button
            className="to-go-back"
            Icon={PiCaretLeftBold}
            onClick={handleBack}
            title="Voltar"
          />
          <h1>{id ? 'Editar prato' : 'Novo prato'}</h1>
        </GoBack>

        <CardDetails>
          <ButtonUpload>
            <label className="label-upload-button">Imagem do prato</label>
            <Button
              id="upload-button"
              Icon={PiUploadSimpleBold}
              title="Selecione a imagem"
              onClick={handleClickUpload}
            />
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              style={{ display: 'none' }} 
              onChange={handleChangeImageFood}
            />
            {foodImage && (
              <div>
                <img
                  src={foodImage}
                  alt="Pré-visualização da comida"
                  style={{ width: '300px', height: 'auto', marginTop: '10px' }}
                />
              </div>
            )}
          </ButtonUpload>

          <Input type="text" label="Nome" placeholder="Ex.: Salada Ceasar" />

          <Input
            className="category"
            type="select"
            label="Categoria"
            placeholder="Selecione a categoria"
          />
        </CardDetails>

        <IngredientsCard>
          <div className="content-ingredients-card">
            <div className="description-ingredients">
              <p>Ingredientes</p>
              <div className="ingredients-inputs">
                {ingredients.map((ingredient, index) => (
                  <FoodItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleDeleteIngredient(ingredient)}
                  />
                ))}

                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
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

          {id && <Button className="delete" title="Excluir prato" />}
        </SubmitButton>
      </CreatedProduct>

      <Footer />
    </Container>
  );
}
