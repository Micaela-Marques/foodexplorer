import { Ingredients, AddToCart, FoodCardFooter, Content } from './styles'
import { Button } from '../Button'
import { FiHeart, FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { GoPencil } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function FoodCard({ title, description, price, icon: Icon, image, userDefault }) {
  const navigate = useNavigate()

  const imgCatalog = {
    width: '176px',
    height: '176px',
    backgroundSize: 'contain',
    marginTop: '20px'
  }

  const handleEditClick = () => {
    navigate('/admin/edit/:id')
  }

  const [quantity, setQuantity] = useState(1)

  const handleClick = (qtd) => {
    const sum = quantity + qtd
    if (sum > 0) setQuantity(sum)  
  }
  return (
    <Content>
      <div className="heart-icon">
        {userDefault ? (
          <FiHeart className="heart-icon" />
        ) : (
          <GoPencil
            className="heart-icon"
            onClick={handleEditClick}
          />
        )}
      </div>

      <div>
        {image && (
          <img
            src={image}
            alt={title}
            style={imgCatalog}
          />
        )}
      </div>

      <Ingredients>
        {Icon && <Icon size={20} />}
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{price}</span>
      </Ingredients>

      <AddToCart>
        {userDefault && (
          <FoodCardFooter>
            <FiMinus
              size={20}
              onClick={() => handleClick(-1)}
            />
            <span className="number">{String(quantity).padStart(2, '0')}</span> 
            <IoAdd
              size={20}
              onClick={() => handleClick(1)}
            />
            <Button title="Incluir" />
          </FoodCardFooter>
        )}
      </AddToCart>
    </Content>
  )
}
