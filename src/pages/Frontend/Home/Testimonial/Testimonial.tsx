import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import { useGetAllCommentsQuery } from "../../../../Redux/api/CommentApi/CommentApi";
import { TComment } from "../../../../Types";

const Testimonial = () => {
  const { data: allComments, isLoading } = useGetAllCommentsQuery({});
  console.log(allComments);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className=" mb-32">
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
        {allComments?.data?.map((comment: TComment) => (
          <>
            <SwiperSlide className=" mb-14  ">
              <div className=" w-[300px] h-[220px]  shadow-lg rounded-md  border-base-300 mx-auto p-4  hover:scale-110 duration-300">
                {/* <img
                  src={pic2}
                  className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#1572d3] rounded-full"
                  alt=""
                /> */}

                <h3 className="text-center mt-2 font-semibold text-xl">
                  {comment?.user?.name}
                </h3>
                <Rating
                  className=" mx-auto mt-3"
                  style={{ maxWidth: 100 }}
                  value={comment?.rating}
                  readOnly
                />
                <p className=" text-center mt-3 mx-3  ">“{comment?.comment}”</p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
