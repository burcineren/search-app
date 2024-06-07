import { Header } from "../components/header";
import { Slider } from "../components/slider/slider";
import { Footer } from "../layout/footer/footer";

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
  };

  export default Home