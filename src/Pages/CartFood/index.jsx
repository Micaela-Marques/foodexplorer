import {
  Container,
  PageProduct,
  FoodImage,
  QuantityControl,
  CardProduct,
  CardProductDetails,
  CardTag,
  GoBack
} from './styles'
import { Footer } from '../../components/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { PiCaretLeftBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import api from '../../Services/api'

export function CartFood({ userDefault, Icon, ...rest }) {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const { id } = useParams()

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('') // State for error handling

  const handleClick = (qtd) => {
    const sum = quantity + qtd
    if (sum > 0) setQuantity(sum)
  }

  const handleEditClick = () => {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    async function fetchFoodDetails() {
      if (id) {
        try {
          const response = await api.get(`/product/${id}`)
          const { name, description, ingredients, price, image } = response.data
          setName(name)
          setDescription(description)
          setIngredients(ingredients)
          setPrice(price)
          setImage(image)
        } catch (error) {
          console.error('Error fetching food details:', error)
          setError('Failed to fetch food details.') // Set error message
        }
      }
    }

    fetchFoodDetails()
  }, [id])

  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <PageProduct>
        <GoBack>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </GoBack>

        <CardProduct>
          <FoodImage
            src={`${import.meta.env.VITE_API_URL}/files/${image}`}
            alt={name || 'Food Image'}
          />
          <CardProductDetails>
            <h1>{name || 'Loading...'}</h1>
            <p>{description || 'Loading description...'}</p>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <CardTag>
              {Array.isArray(ingredients) &&
                ingredients.length > 0 &&
                ingredients.map((ingredient) => (
                  <Tag
                    key={ingredient.id || ingredient} // Use um ID único se disponível
                    title={ingredient.name || ingredient} // Use 'ingredient.name' se for um objeto
                  />
                ))}
            </CardTag>
            <QuantityControl>
              {userDefault ? (
                <>
                  <FiMinus
                    size={20}
                    onClick={() => handleClick(-1)}
                  />
                  <span>{quantity}</span>
                  <IoAdd
                    size={20}
                    onClick={() => handleClick(1)}
                  />
                  <Button
                    title={`Incluir ∙ R$ ${price}`}
                    onClick={() => {
                      /* Implement add to cart functionality */
                    }}
                  />
                </>
              ) : (
                <Button
                  title="Editar prato"
                  onClick={handleEditClick}
                />
              )}
            </QuantityControl>
          </CardProductDetails>
        </CardProduct>
      </PageProduct>

      <Footer className="footer" />
    </Container>
  )
}
