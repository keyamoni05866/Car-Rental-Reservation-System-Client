import FeaturedCars from "./FeaturedCars/FeaturedCars";
import HeroSection from "./HeroSection/HeroSection";
import OfferedSection from "./OfferedSection/OfferedSection";
import ProcessSection from "./ProcessSection/ProcessSection";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <ProcessSection />
      <WhyChooseUs />
      <OfferedSection />
      <Testimonial />
    </>
  );
};

export default Home;
