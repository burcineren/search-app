import React from "react";
import sliderImage from "../../assets/images/slider.jpg";

export function SliderCard() {
  const data = [
    {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      content: "1h ago · by Troy Corlson",
      image: sliderImage
    },
    {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      content: "1h ago · by Troy Corlson",
      image: sliderImage
    },
    {
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      content: "1h ago · by Troy Corlson",
      image: sliderImage
    }
  ]
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item} className="card">
            <img src={item.image} alt="" />
            <div className="card-title">
              <h3>{item.title}</h3>
            </div>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
}
