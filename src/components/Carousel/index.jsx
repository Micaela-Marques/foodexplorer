import Slider from 'react-slick'
import { FoodCard } from '../FoodCard'

export function Carousel({ foods, userDefault }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {Array.isArray(foods) && foods.length > 0 ? (
        foods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            title={food.name}
            description={food.description}
            price={food.price}
            icon={food.icon}
            image={food.image}
            userDefault={userDefault}
          />
        ))
      ) : (
        <p>Sem itens para exibir</p>
      )}
    </Slider>
  )
}
