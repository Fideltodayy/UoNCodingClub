import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Activities from "./components/Activities";
// import UpcomingActivities from "./components/UpcomingActivities";
import Founders from "./components/Founders";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-black">
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Activities />
      {/* <UpcomingActivities /> */}
      <Founders />
      {/* <Partners /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
