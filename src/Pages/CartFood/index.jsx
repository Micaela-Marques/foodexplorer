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
import { Link } from 'react-router-dom'
import { FiMinus } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { PiCaretLeftBold } from 'react-icons/pi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CartFood({ userDefault, Icon, ...rest }) {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  const handleClick = (qtd) => {
    const sum = qtd + quantity
    if (sum > 0) setQuantity(sum)
  }

  const handleEditClick = () => {
    navigate('/admin/edit/:id')
  }

  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <PageProduct>
        <GoBack>
          <PiCaretLeftBold />
          <Link to="/">Voltar</Link>
        </GoBack>

        <CardProduct>
          <FoodImage />
          <CardProductDetails>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um
              toque especial.
            </p>

            <CardTag>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </CardTag>

            <QuantityControl>
              {userDefault && (
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
                </>
              )}
              <Button
                title={userDefault ? 'incluir ∙ R$ 25,00 ' : 'Editar prato'}
                onClick={handleEditClick}
              />
            </QuantityControl>
          </CardProductDetails>
        </CardProduct>
      </PageProduct>

      <Footer classname="footer" />
    </Container>
  )
}
