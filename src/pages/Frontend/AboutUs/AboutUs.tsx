import { Link } from "react-router-dom";
import aboutImage from "../../../assets/AboutPhotos/about1.png";
import CommitmentAndContact from "./CommitmentAndContact";
import "./About.css";
import Fleet from "./Fleet";
import Teams from "./Teams";
const AboutUs = () => {
  return (
    <div className="min-h-screen mb-20 mt-3 px-3 ">
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <img src={aboutImage} alt="" className="w-[550px] h-[450px]" />
        </div>
        <div className="lg:w-[50%] lg:mt-10 lg:px-0 px-2">
          <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mb-5 rounded-xl">
            {" "}
            <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
              About us
            </h4>
          </div>
          <h4 className="lg:text-[50px] text-2xl ">Our Company Overview!!!!</h4>
          <p className="lg:text-lg mt-5 ">
            Established in 2024, our car rental service has grown from a small,
            local provider to a trusted name across the region. Our mission is
            to offer top-notch car rental services that are both affordable and
            reliable, making your travel easier and more enjoyable. Our vision
            is to set new standards in the car rental industry by offering
            unparalleled service and a wide range of vehicles, tailored to meet
            the needs of every traveler.
          </p>
          <div className="flex gap-5 mt-5 ">
            <button className="custom-btn !rounded-md">Company</button>
            <Link
              to="/cars"
              className="custom-outline-btn !rounded-md  !text-black dark:text-white lg:w-[24%] !font-bold !text-lg"
            >
              Cars
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between  lg:mt-0 mt-10 lg:px-0 px-5">
        <div className="shadow-lg lg:w-[300px] lg:h-[240px] mb-10 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Founding Year:</span>
            Established in 2024, our car rental service has grown from a small,
            local provider to a trusted name across the region
          </p>
          <p className="mt-3 tex-xl">
            <span className="font-semibold ">Founded:</span> 2024
          </p>
        </div>
        <div className="shadow-lg lg:w-[300px] lg:h-[240px] mb-8 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Mission:</span>
            Our mission is to provide affordable, reliable, and convenient car
            rental services for travelers and local commuters alike. We aim to
            make transportation accessible and stress-free through an
            easy-to-use platform and high-quality customer service.
          </p>
        </div>
        <div className="shadow-lg lg:w-[300px] lg:h-[240px] mb-8 p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Vision:</span>
            We envision becoming the leading car rental service globally, known
            for our commitment to customer satisfaction, sustainable practices,
            and a vast fleet of vehicles that cater to every need.
          </p>
        </div>
        <div className="shadow-lg w-[300px] h-[240px] p-8 text-justify rounded-lg bg-base-200">
          <p>
            <span className="font-semibold me-2">Our Values:</span>
            At RENT Cars, we go beyond just providing cars. We are committed to
            giving our customers a seamless, eco-friendly, and safe car rental
            experience, backed by exceptional customer service.
          </p>
        </div>
      </div>

      <Teams />
      <Fleet />
      <CommitmentAndContact />
    </div>
  );
};

export default AboutUs;
