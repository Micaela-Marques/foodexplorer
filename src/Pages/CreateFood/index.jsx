import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
import { PiCaretLeftBold, PiUploadSimpleBold } from 'react-icons/pi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { FoodItem } from '../../components/Fooditem'
import { SelectInput } from '../../components/Select'

import api from '../../Services/api'
export function CreateFood({ ...rest }) {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [categories_id, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [foodImage, setFoodImage] = useState(null)

  const inputFileRef = useRef(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate('/admin')
  }

  function handleAddIngredient() {
    if (newIngredient.trim()) {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleDeleteIngredient(ingredientToDelete) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientToDelete)
    )
  }

  async function handleChangeImageFood(e) {
    const file = e.target.files[0]
    setFoodImage(file)

    const imagePreview = URL.createObjectURL(file)
    setFoodImage(imagePreview)

    await api.post('/product').where({})
    
  }

  function handleClickUpload() {
    inputFileRef.current.click()
  }

  async function handleNewProduct() {
    try {
    
      if (!name || !description || !ingredients || !foodImage || !price || !categories_id) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      await api.post('/product', {
        name,
        description,
        ingredients,
        image: foodImage,
        price,
        categories_id
      });

   
  
      alert("Novo prato cadastrado!");
      navigate('/admin');
    } catch (error) {
      if (error.response) {
        // A resposta foi recebida, mas o status indica um erro
        console.error("Erro na resposta da API:", error.response.status, error.response.data);
        alert(`Erro ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error("Nenhuma resposta da API. Detalhes:", error.request);
        alert("Nenhuma resposta do servidor. Verifique sua conexão.");
      } else {
        // Erro ao configurar a requisição
        console.error("Erro ao configurar a requisição:", error.message);
        alert("Ocorreu um erro. Tente novamente.");
      }
    }
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
                  style={{ max_width: '40px',width: '50%', max_height: '20px', marginTop: '5px' }}
                />
              </div>
            )}
          </ButtonUpload>

          <Input
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
          />
        
          <SelectInput
            className="category"
            onSelect={setCategory}
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
                    onChange={(e) => setIngredients(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </IngredientsCard>

        <Description>
          <TextArea
            className="textarea"
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Description>

        <SubmitButton>
          <Button
            className="Submit"
            title={id ? 'Salvar alterações' : 'Salvar alterações'}
            onClick={handleNewProduct}
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
