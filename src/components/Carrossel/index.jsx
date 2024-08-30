import { useState } from 'react'
import { Container, ArrowButton, CardsWrapper } from './styles'
import { FoodCard } from '../FoodCard'
import { GrNext, GrPrevious } from 'react-icons/gr'

export function Carousel({ foods, userDefault }) {
 


  const [currentIndex, setCurrentIndex] = useState(0)
  const totalCards = foods.length

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <Container>
      <ArrowButton
        direction="left"
        onClick={handlePrev}
        Icon={GrNext}
      >
      <GrPrevious />
      </ArrowButton>

      <CardsWrapper currentIndex={currentIndex}>
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            title={food.title}
            description={food.description}
            price={food.price}
            icon={food.icon}
            image={food.image}
            userDefault={userDefault}
          />
        ))}
      </CardsWrapper>

      <ArrowButton
        direction="right"
        onClick={handleNext}
      >
       <GrNext />
      </ArrowButton>
    </Container>
  )
}
