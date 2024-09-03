import Slider from 'react-slick'
import { FoodCard } from '../FoodCard'

export function Carousel({ foods, userDefault }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    </Slider>
  )
}
