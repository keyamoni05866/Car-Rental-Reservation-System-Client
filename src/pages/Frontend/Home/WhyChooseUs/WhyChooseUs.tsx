import image from "../../../../assets/HomePagePhotos/black.png";
import icon1 from "../../../../assets/HomePagePhotos/icons/price-tag.png";
import icon2 from "../../../../assets/HomePagePhotos/icons/customer.png";
import icon3 from "../../../../assets/HomePagePhotos/icons/hours-24.png";
import icon4 from "../../../../assets/HomePagePhotos/icons/message.png";
const WhyChooseUs = () => {
  return (
    <div className="mb-32">
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:mx-0 mx-5 mb-20">
        <div className="lg:w-[50%]">
          <div className="bg-[#cfe4fa]   w-[180px] h-[50px] lg:mx-0 mx-auto  rounded-xl ">
            {" "}
            <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
              Why Choose Us
            </h4>
          </div>

          <h4 className="lg:text-[38px] mt-6 lg:text-left  text-center  text-lg font-bold">
            We offer the best experience
          </h4>
          <h4 className="lg:text-[38px] lg:mt-2 lg:text-left  text-center  text-lg font-bold">
            with our rental deals
          </h4>
          <div className="flex gap-5 mt-12 items-center">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-12">
              {" "}
              <img src={icon1} className="size-10 " alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Best price guaranteed</h4>
              <h5 className=" ">
                Find a lower price? We’ll refund you 100% of the difference.
              </h5>
            </div>
          </div>
          <div className="flex gap-5 mt-12 items-center">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-12">
              {" "}
              <img src={icon2} className="size-10 " alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Experience driver</h4>
              <h5 className=" ">
                Don’t have driver? Don’t worry, we have many experienced driver
                for you.
              </h5>
            </div>
          </div>
          <div className="flex gap-5 mt-12 items-center">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-12">
              {" "}
              <img src={icon3} className="size-10 " alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">24 hour car delivery</h4>
              <h5 className=" ">
                Book your car anytime and we will deliver it directly to you.
              </h5>
            </div>
          </div>
          <div className="flex gap-5 mt-12 items-center">
            <div className="bg-[#cfe4fa] p-1 rounded-xl size-12">
              {" "}
              <img src={icon4} className="size-10 " alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">24/7 technical support</h4>
              <h5 className=" ">
                Have a question? Contact Rentcars support any time when you have
                problem.
              </h5>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] ">
          <img src={image} className=" lg:w-[600px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
