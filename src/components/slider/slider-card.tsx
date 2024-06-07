import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImage from "../../assets/images/slider-image.jpg";

interface CarouselItem {
  title: string;
  content: string;
}

const data: CarouselItem[] = [
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
  {
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    content: "1h ago · by Troy Corlson",
  },
];

const SliderCard: React.FC = () => {
  const slides: JSX.Element[] = [];

  for (let i = 0; i < data.length; i += 3) {
    slides.push(
      <div key={i} className="carousel-slide">
        <div className="carousel-item-container">
          {data.slice(i, i + 3).map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={sliderImage} alt="" />
              <div className="card-title">
                <h3>{item.title}</h3>
              </div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
    >
      {slides}
    </Carousel>
  );
};

export default SliderCard;