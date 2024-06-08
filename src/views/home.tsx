import { Header } from "../Components/Header";
import { Slider } from "../Components/slider/Slider";
import { Footer } from "../Layout/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="top-news-wrapper">
        <div className="top-news-header">
          <h1>Top News</h1>
        </div>
        <Slider />
      </div>
      <Footer />
    </>
  );
}

export default Home;
