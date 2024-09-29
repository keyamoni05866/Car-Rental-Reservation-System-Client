import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import pic1 from "../../../../assets/HomePagePhotos/testimonialPictures/image1.png";
import pic2 from "../../../../assets/HomePagePhotos/testimonialPictures/image2.png";
import pic3 from "../../../../assets/HomePagePhotos/testimonialPictures/image3.png";
import pic4 from "../../../../assets/HomePagePhotos/testimonialPictures/image4.png";
import pic5 from "../../../../assets/HomePagePhotos/testimonialPictures/image5.png";
import pic6 from "../../../../assets/HomePagePhotos/testimonialPictures/image6.png";

const Testimonial = () => {
  return (
    <div className="mt-32 mb-40">
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mx-auto rounded-xl">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          Testimonials
        </h4>
      </div>
      <h4 className="lg:text-[38px] mt-4 text-center text-lg font-bold">
        What people say about us?
      </h4>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  mt-16     "
      >
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px]  border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic1}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />
            <h3 className="text-center mt-2 font-semibold text-xl">
              Keya Moni
            </h3>{" "}
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3 mx-3  ">
              “I feel very secure when using caretall's services. Your customer
              care team is very enthusiastic and the driver is always on time.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px]  border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic2}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">
              Lorem Ipsum
            </h3>
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3 mx-3  ">
              “ The car was in perfect condition, and the customer service team
              was super helpful. I’ll definitely be renting from them again!”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic3}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">
              Urmy Banu
            </h3>
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3 mx-3  ">
              "The booking process was quick and easy, and I found the perfect
              car for my trip. The vehicle was clean, well-maintained, and ready
              on time."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic4}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">Grover</h3>
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3 mx-3  ">
              "I needed a last-minute rental for a business trip, and they had
              plenty of options available at affordable rates."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic5}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">Jesmin</h3>
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3 mx-3   ">
              " The car was spotless and in top condition. The staff was
              friendly and made sure everything went smoothly. I’ll be back for
              future rentals!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[340px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic6}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-5 font-semibold text-xl">Azhar</h3>
            <Rating
              className=" mx-auto mt-3"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <p className=" text-center mt-3  mx-3  ">
              " The cars are always clean and well-maintained, and the team is
              always helpful. A reliable, trustworthy service!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
