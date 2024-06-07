
import { SliderCard } from "./slider-card";

export function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-content-container">
        <div className="arrow-left">
          {/* <BsFillArrowLeftCircleFill /> */}
        </div>
        <SliderCard />
        <div className="arrow-right">
          {/* <BsFillArrowRightCircleFill /> */}
        </div>
      </div>
    </div>
  );
}
