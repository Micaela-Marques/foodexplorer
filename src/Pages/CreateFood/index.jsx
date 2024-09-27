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
  const inputFileRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProductData() {
      if (id) {
        try {
          console.log(`Tentando buscar produto com ID: ${id}`); // Log para debug
          const response = await api.get(`/product/${id}`)
          const { name, description, price, categories_id, ingredients, image } = response.data
          
          setName(name)
          setDescription(description)
          setPrice(price)
          setCategory(categories_id)
          setIngredients(ingredients)
          setFoodImage(image)
        } catch (error) {
          console.error('Erro ao carregar os dados do produto:', error)
          if (error.response) {
            console.error('Resposta do servidor:', error.response.data)
            console.error('Status do erro:', error.response.status)
          }
          if (error.response && error.response.status === 404) {
            alert(`Produto com ID ${id} não encontrado. Verifique se o ID está correto.`)
          } else {
            alert('Erro ao carregar os dados do produto. Por favor, tente novamente mais tarde.')
          }
          // Opcionalmente, redirecione para uma página segura
          // navigate('/admin')
        }
      }
    }

    fetchProductData()
  }, [id, navigate])

  function handleBack() {
    navigate('/admin')
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

  async function handleChangeImageFood(e) {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file);
  
        // Fazendo o upload da imagem
        const response = await api.post('/upload-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.data && response.data.imageUrl) {
          const imageUrl = response.data.imageUrl;
  
          // Atualizando a URL da imagem no banco de dados
          const updateResponse = await api.put('/update-food-image', {
            imageUrl, // URL da imagem
            foodId: id, // Verifique se "id" está definido corretamente
          });
  
          if (updateResponse.status === 200) {
            setFoodImage(imageUrl); // Atualiza o estado da imagem localmente
          } else {
            throw new Error('Falha ao atualizar imagem no banco de dados');
          }
        } else {
          throw new Error('Falha ao obter URL da imagem');
        }
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        if (error.response) {
          console.error('Status do erro:', error.response.status);
          console.error('Resposta do servidor:', error.response.data);
          if (error.response.status === 404) {
            alert('Erro 404: Endpoint de upload não encontrado. Verifique a rota de upload.');
          } else {
            alert(`Erro ${error.response.status}: ${error.response.data.message || 'Erro desconhecido'}`);
          }
        } else {
          alert('Erro ao fazer upload da imagem. Por favor, tente novamente.');
        }
      }
    }
  }
  

  function handleClickUpload() {
    inputFileRef.current.click()
  }

  async function handleNewProduct() {
    try {
      if (!name || !description || ingredients.length === 0 || !foodImage || !price || !categories_id) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }

      // Primeiro, fazemos o upload da imagem
      const imageFormData = new FormData()
      imageFormData.append('image', foodImage)

      const imageUploadResponse = await api.post('/upload-image', imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (!imageUploadResponse.data || !imageUploadResponse.data.imageUrl) {
        throw new Error('Falha ao obter URL da imagem após o upload')
      }

      const imageUrl = imageUploadResponse.data.imageUrl

      // Agora, criamos o produto com a URL da imagem
      const productFormData = new FormData()
      productFormData.append('name', name)
      productFormData.append('description', description)
      ingredients.forEach((ingredient, index) => {
        productFormData.append(`ingredients[${index}]`, ingredient)
      })
      productFormData.append('image', imageUrl)
      productFormData.append('price', price)
      productFormData.append('categories_id', categories_id)

      await api.post('/product', productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      alert('Novo prato cadastrado!')
      navigate('/admin')
    } catch (error) {
      console.error('Erro ao criar o produto:', error)
      if (error.response) {
        console.error('Status do erro:', error.response.status)
        console.error('Resposta do servidor:', error.response.data)
        alert(`Erro ${error.response.status}: ${error.response.data.message || 'Erro desconhecido'}`)
      } else if (error.message) {
        alert(error.message)
      } else {
        alert('Erro ao criar o produto. Tente novamente.')
      }
    }
  }

  async function handleUpdatedProduct() {
    try {
      if (!name || !description || !price ) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient)
      })
      if (foodImage instanceof File) {
        formData.append('image', foodImage)
      }
      formData.append('price', price)
      formData.append('categories_id', categories_id)

      const response = await api.put(`/product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log('Resposta do servidor:', response.data)
      alert('Produto atualizado com sucesso!')
      navigate('/admin')
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error)
      if (error.response) {
        console.error('Resposta do servidor:', error.response.data)
        console.error('Status do erro:', error.response.status)
        alert(`Erro ao atualizar o produto: ${error.response.data.message || 'Erro desconhecido'}`)
      } else if (error.request) {
        console.error('Nenhuma resposta recebida:', error.request)
        alert('Erro de conexão. Por favor, verifique sua internet e tente novamente.')
      } else {
        console.error('Erro ao configurar a requisição:', error.message)
        alert('Erro ao processar a solicitação. Por favor, tente novamente.')
      }
    }
  }

  async function handleDeleteProduct() {
    try {
      const response = await api.delete(`/product/${id}`)
      console.log('Resposta do servidor:', response.data)
      alert('Produto excluído com sucesso!')
      navigate('/admin')
    } catch (error) {
      console.error('Erro ao excluir o produto:', error)
      if (error.response) {
        console.error('Resposta do servidor:', error.response.data)
        console.error('Status do erro:', error.response.status)
        alert(`Erro ao excluir o produto: ${error.response.data.message || 'Erro desconhecido'}`)
      } else if (error.request) {
        console.error('Nenhuma resposta recebida:', error.request)
        alert('Erro de conexão. Por favor, verifique sua internet e tente novamente.')
      } else {
        console.error('Erro ao configurar a requisição:', error.message)
        alert('Erro ao excluir o produto. Tente novamente.')
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
                  src={typeof foodImage === 'string' ? foodImage : URL.createObjectURL(foodImage)}
                  alt="Pré-visualização da comida"
                  style={{ maxWidth: '40px', width: '50%', maxHeight: '20px', marginTop: '5px' }}
                />
              </div>
            )}
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
