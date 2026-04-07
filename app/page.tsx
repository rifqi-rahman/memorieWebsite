import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import FeatureSpotlights from "./components/FeatureSpotlights";
import Trust from "./components/Trust";
import Plan from "./components/Plan";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";

export default function Home() {
  return (
    <>
      <MotionProvider />
      <Navbar />
      <main>
        <Hero />
        <Solution />
        <FeatureSpotlights />
        <Trust />
        <Plan />
      </main>
      <Footer />
    </>
  );
}
