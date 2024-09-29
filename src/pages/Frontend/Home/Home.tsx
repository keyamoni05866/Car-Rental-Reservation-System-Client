import FeaturedCars from "./FeaturedCars/FeaturedCars";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
};

export default Home;
