import { Ingredients, AddToCart, FoodCardFooter, Content } from './styles'
import { Button } from '../Button'
import { FiHeart, FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { GoPencil } from 'react-icons/go'

export function FoodCard({ title, description, price, icon: Icon, image, userDefault }) {
  const imgCatalog = {
    width: '176px',
    height: '176px',
    background_size: 'contain',
    margin_top: ' 20px'
  }

  return (
    <Content>
      <div className="heart-icon">
        {userDefault ? <FiHeart className="heart-icon" /> : <GoPencil className="heart-icon" />}
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
            <FiMinus size={20} />
            <span className="number">01</span>
            <IoAdd size={20} />
            <Button title="Incluir" />
          </FoodCardFooter>
        )}
      </AddToCart>
    </Content>
  )
}
