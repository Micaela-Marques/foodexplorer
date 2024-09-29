import { useState, useEffect, useRef } from 'react'
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
  const [foodImageFile, setFoodImageFile] = useState(null)
  const inputFileRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProductData() {
      if (id) {
        try {
          const response = await api.get(`/product/${id}`)
          const { name, description, price, categories_id, ingredients, image } = response.data

          setName(name)
          setDescription(description)
          setPrice(price)
          setCategory(categories_id)
          setIngredients(ingredients)
          setFoodImage(`${import.meta.env.VITE_API_URL}/files/${image}`)
        } catch (error) {
          navigate('/')

          alert('Erro ao carregar os dados do produto. Por favor, tente novamente mais tarde.')
        }
      }
    }

    fetchProductData()
  }, [id, navigate])

  function handleBack() {
    navigate('/')
  }

  function handleAddIngredient() {
    if (newIngredient.trim()) {
      setIngredients((prevState) => [...prevState, newIngredient.trim()])
      setNewIngredient('')
    }
  }

  function handleDeleteIngredient(ingredientToDelete) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientToDelete)
    )
  }

  function handleChangeImageFood(e) {
    const file = e.target.files[0]
    setFoodImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setFoodImage(imagePreview)
  }

  function handleClickUpload() {
    inputFileRef.current.click()
  }

  async function handleNewProduct() {
    try {
      if (!validateRequiredFields()) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }

      const productFormData = new FormData()
      productFormData.append('name', name)
      productFormData.append('description', description)
      ingredients.forEach((ingredient, index) => {
        productFormData.append(`ingredients[${index}]`, ingredient)
      })
  
      if (foodImageFile instanceof File) {
        productFormData.append('image', foodImageFile)
      } else {
        console.warn('Aviso: Arquivo de imagem inválido ou não fornecido.')
      }
  
      productFormData.append('price', price)
      productFormData.append('categories_id', categories_id)

      console.log('FormData:', productFormData)
      await api.post('/product', productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      alert('Novo prato cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao criar o novo produto:', error)
      alert('Erro ao criar o novo produto. Por favor, tente novamente mais tarde.')
    }
  }

  function validateRequiredFields() {
    return name && description && ingredients.length > 0 && foodImage && price && categories_id
  }


  async function handleUpdatedProduct() {
    try {
      if (!name || !description || !price) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient)
      })

      if (foodImageFile instanceof File) {
        formData.append('image', foodImageFile)
      }

      formData.append('price', price)
      formData.append('categories_id', categories_id)

      await api.put(`/product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      alert('Produto atualizado com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error)
      alert('Erro ao atualizar o produto. Por favor, tente novamente mais tarde.')
    }
  }

  async function handleDeleteProduct() {
    try {
      const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
      if (!confirmDelete) {
        return; // Se o usuário não confirmar, interrompe a execução da função
      }
      await api.delete(`/product/${id}`)
      alert('Produto excluído com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao excluir o produto:', error)
      alert('Erro ao excluir o produto. Por favor, tente novamente mais tarde.')
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
          {foodImage && (
            <div>
              <img
                src={foodImage}
                alt="Pré-visualização da comida"
                style={{ maxWidth: '40px', width: '50%', maxHeight: '20px', marginTop: '5px' }}
              />
            </div>
          )}
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
              id="image-food"
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={handleChangeImageFood}
            />
          </ButtonUpload>

          <Input
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <SelectInput
            className="category"
            onSelect={setCategory}
            value={categories_id}
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
                value={price}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Description>

        <SubmitButton>
          <Button
            type="submit"
            className="Submit"
            title={id ? 'Salvar alterações' : 'Criar novo prato'}
            onClick={id ? handleUpdatedProduct : handleNewProduct}
          />

          {id && (
            <Button
              className="delete"
              title="Excluir prato"
              onClick={handleDeleteProduct}
              // A função de exclusão deve ser implementada se necessário
            />
          )}
        </SubmitButton>
      </CreatedProduct>

      <Footer />
    </Container>
  )
}
