import { Header } from "../components/Header";
import { Slider } from "../components/slider/Slider";
import { Footer } from "../layout/footer/Footer";

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
