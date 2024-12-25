import { Link } from "react-router-dom";
import image from "../../../../assets/HomePagePhotos/blue3.png";

const HeroSection = () => {
  return (
    <div className="mb-24 mx-3 lg:mx-0 mt-10">
      <div className=" lg:flex justify-between  gap-6">
        <div className="lg:w-[50%] lg:mt-[110px]  mt-20 ms-3">
          <h4 className="lg:text-[45px] text-3xl font-bold ">
            Rent the Best Cars
          </h4>
          <h4 className="lg:text-[45px] text-3xl font-bold lg:pt-5 pt-3">
            {" "}
            Travel Without <span className="primary-color">Limits!!!</span>
          </h4>
          <p className="lg:text-lg mt-5 text-justify ">
            Choose from our selection of economy, luxury, and family-friendly
            Explore the open road in one of our high-quality vehicles. With
            affordable pricing, easy online booking, and a variety of cars to
            choose from, your dream trip starts with the perfect rental.
          </p>
          <Link to="/cars">
            <button className="custom-btn mt-5"> Book Now</button>
          </Link>
        </div>
        <div className="lg:w-[50%] flex justify-end mt-16">
          <img
            src={image}
            className="lg:w-[640px] lg:h-[400px] w-[400px] h-[200px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
