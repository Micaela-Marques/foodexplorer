import { Container, Section } from './styles'
import { FoodCard } from '../FoodCard'

export function Catalog({ Icon, foods, title, userDefault, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}

      <h1>{title}</h1>
      <Section>
        {foods.map((food) => (
          <FoodCard
            userDefault={userDefault}
            key={food.id}
            title={food.title}
            description={food.description}
            price={food.price}
            icon={food.icon}
            image={food.image}
          />
        ))}
      </Section>
    </Container>
  )
}
