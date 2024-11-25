import FeaturedCars from "./FeaturedCars/FeaturedCars";
import HeroSection from "./HeroSection/HeroSection";
import OfferedSection from "./OfferedSection/OfferedSection";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <OfferedSection />
      <Testimonial />
    </>
  );
};

export default Home;
