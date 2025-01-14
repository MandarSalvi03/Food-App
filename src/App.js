import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/improveSkills";
import QuoteSection from "./components/QuoteSection";
import ChiefsSection from "./components/ChiefsSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChiefsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
