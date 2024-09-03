import Slider from 'react-slick';
import { FoodCard } from '../FoodCard';

export function Carousel({ foods, userDefault }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper" style={{ padding: '20px'}}>
      <Slider {...settings}>
        {foods.map((food, index) => (
          <div key={food.id}>
            <div className="food-card">
              <FoodCard
                title={food.title}
                description={food.description}
                price={food.price}
                icon={food.icon}
                image={food.image}
                userDefault={userDefault}
              />
            </div>

            {/* Adicionando uma div entre os cards */}
            {index < foods.length - 1 && (
              <div className="divider" style={{ margin: '0 10px' }} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
