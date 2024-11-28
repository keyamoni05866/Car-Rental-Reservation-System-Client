import location from "../../../../assets/HomePagePhotos/icons/location.png";
import calendar from "../../../../assets/HomePagePhotos/icons/calender.png";
import checkout from "../../../../assets/HomePagePhotos/icons/checkout.png";
import car from "../../../../assets/HomePagePhotos/icons/car.png";

const ProcessSection = () => {
  return (
    <div className="mx-5 lg:mx-0 mb-32">
      <div className="bg-[#cfe4fa]   w-[240px] h-[50px] mx-auto rounded-xl">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          From Booking to driving
        </h4>
      </div>
      <h4 className="lg:text-[38px] mt-4 text-center text-lg font-bold">
        Follow These Simple Steps to Hit the Road.
      </h4>

      <div className=" mt-10 lg:mt-20 ">
        <div className="lg:flex lg:justify-around   pt-10 px-5 ">
          <div className="shadow-lg lg:w-[230px]  xl:w-[300px] p-5 text-justify rounded-lg    lg:mb-0 mb-5 hover:scale-90 duration-300">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
              {" "}
              <img src={location} className="size-16 " alt="" />
            </div>
            <div className="mt-4">
              <h4 className="text-[22px] font-semibold text-center">
                Choose Location
              </h4>
              <p className="text-center text-md mt-1  ">
                Choose your location and <br /> find your best car
              </p>
            </div>
          </div>
          <div className="shadow-lg lg:w-[230px]  xl:w-[300px]  p-5 text-justify rounded-lg   lg:mb-0 mb-5 hover:scale-90 duration-300">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
              {" "}
              <img src={calendar} className="size-16 " alt="" />
            </div>

            <div className="mt-4">
              <h4 className="text-[22px] font-semibold text-center">
                Pick-Up Date
              </h4>
              <p className="text-center text-md mt-1  ">
                Select your date and time to <br /> book your car
              </p>
            </div>
          </div>
          <div className="shadow-lg lg:w-[230px]  xl:w-[300px] p-5 text-justify rounded-lg    lg:mb-0 mb-5 hover:scale-90 duration-300">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
              {" "}
              <img src={checkout} className="size-16 " alt="" />
            </div>

            <div className="mt-4">
              <h4 className="text-[22px] font-semibold text-center">
                Checkout Booking
              </h4>
              <p className="text-center text-md mt-1  ">
                The information you provide will be displayed on the checkout
                page.
              </p>
            </div>
          </div>
          <div className="shadow-lg lg:w-[230px]   xl:w-[300px]  p-5 text-justify rounded-lg    lg:mb-0 mb-5 hover:scale-90 duration-300">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
              {" "}
              <img src={car} className="size-16 " alt="" />
            </div>

            <div className="mt-4">
              <h4 className="text-[22px] font-semibold text-center">
                Book Your Car
              </h4>
              <p className="text-center text-md mt-1  ">
                Book your car and we will deliver it directly to you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:mx-auto mx-4  custom-background text-white">
        <div className="shadow-lg lg:w-[200px] lg:h-[200px] p-5 ">
          <div className="bg-white p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
            {" "}
            <img src={location} className="size-16 " alt="" />
          </div>

          <div className="mt-4">
            <h4 className="text-[22px] font-semibold text-center">
              Choose Location
            </h4>
            <p className="text-center text-md mt-1  ">
              Choose your location and find your best car
            </p>
          </div>
        </div>
        <div className=" xl:max-w-[200px] ">
          <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
            {" "}
            <img src={calendar} className="size-16 " alt="" />
          </div>

          <div className="mt-4">
            <h4 className="text-[22px] font-semibold text-center">
              Pick-Up Date
            </h4>
            <p className="text-center text-md mt-1  ">
              Select your date and time to book your car
            </p>
          </div>
        </div>
        <div className=" xl:max-w-[200px] ">
          <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
            {" "}
            <img src={checkout} className="size-16 " alt="" />
          </div>

          <div className="mt-4">
            <h4 className="text-[22px] font-semibold text-center">
              Checkout Booking
            </h4>
            <p className="text-center text-md mt-1  ">
              The information you provide will be displayed on the checkout
              page.
            </p>
          </div>
        </div>
        <div className=" xl:max-w-[200px] ">
          <div className="bg-[#cfe4fa] p-1 rounded-xl size-24 mx-auto flex justify-center items-center">
            {" "}
            <img src={car} className="size-16 " alt="" />
          </div>

          <div className="mt-4">
            <h4 className="text-[22px] font-semibold text-center">
              Book Your Car
            </h4>
            <p className="text-center text-md mt-1  ">
              Book your car and we will deliver it directly to you.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProcessSection;
