import { Container, FoodCardFooter } from './styles'
import { Button } from '../Button'
import { FiHeart, FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { GoPencil } from 'react-icons/go'

export function FoodCard({ title, description, price, icon: Icon, image, userDefault, ...rest }) {
  const imgCatalog = {
    width: userDefault ? '176px' : '256px',
    height: '176px',
    background_size: 'contain',
    margin_top: ' 20px'
  }

  return (
    <Container {...rest}>
      {userDefault ? <FiHeart className="heart-icon" /> : <GoPencil className="heart-icon" />}

      {image && (
        <img
          src={image}
          alt={title}
          style={imgCatalog}
        />
      )}

      {Icon && <Icon size={20} />}

      <h1>{title}</h1>
      <p>{description}</p>
      <span>{price}</span>

      {userDefault && (
        <FoodCardFooter>
          <FiMinus size={20} />

          <span>01</span>

          <IoAdd size={20} />

          <Button title="Incluir" />
        </FoodCardFooter>
      )}
    </Container>
  )
}
