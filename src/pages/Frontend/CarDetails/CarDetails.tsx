import { useNavigate, useParams } from "react-router-dom";
import {
  useCarDetailsQuery,
  useGetAvailableCarsForBookingQuery,
} from "../../../Redux/api/CarApi/carApi";
import { Key, useState } from "react";
import { TCar, TComment, TUser } from "../../../Types";
import { useDispatch } from "react-redux";
import { bookingCar } from "../../../Redux/features/booking/bookingSlice";
import { Rating } from "@smastrom/react-rating";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../Redux/hook";
import { currentUser } from "../../../Redux/features/auth/authSlice";
import {
  useCreateCommentMutation,
  useGetAllCommentsQuery,
} from "../../../Redux/api/CommentApi/CommentApi";
import { toast } from "sonner";
import swal from "sweetalert";
import "@smastrom/react-rating/style.css";

import SuggestedCar from "./SuggestedCar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

type commentValue = {
  comment: string;
};

const CarDetails = () => {
  const { id } = useParams();
  const user = useAppSelector(currentUser) as unknown as TUser;
  const { data: cars, isLoading } = useCarDetailsQuery(id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rating, setRating] = useState<number>(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<commentValue>();
  const [createComment] = useCreateCommentMutation();
  const { data: allCars } = useGetAvailableCarsForBookingQuery({});
  const { data: allComments, isLoading: commentLoading } =
    useGetAllCommentsQuery({});
  if (isLoading || commentLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  // console.log(allComments);

  const carDetails: TCar = cars?.data;

  // console.log(getComments);

  const getComments = allComments?.data?.filter(
    (comment: TComment) => comment?.car?._id === carDetails?._id
  );
  console.log(getComments);

  const handleAddFeatures = (additionalFeature: string) => {
    let getAddedFeatures: string[];
    if (selectedFeatures.includes(additionalFeature)) {
      getAddedFeatures = selectedFeatures.filter(
        (item) => item !== additionalFeature
      );
    } else {
      getAddedFeatures = [...selectedFeatures, additionalFeature];
    }
    setSelectedFeatures(getAddedFeatures);
    const updatedCar = {
      ...carDetails,
      chosenAdditionalFeatures: getAddedFeatures,
    };
    dispatch(bookingCar(updatedCar));
  };

  const handleAddBooking = () => {
    const updatedCar = {
      ...carDetails,
      chosenAdditionalFeatures: selectedFeatures,
    };
    dispatch(bookingCar(updatedCar));
    navigate("/booking");
  };

  const handleAddComment: SubmitHandler<commentValue> = async (data) => {
    const commentData = {
      car: carDetails?._id,
      user: user._id,
      rating: rating,
      comment: data.comment,
    };

    try {
      await createComment(commentData).unwrap();
      swal("Feedback Done!", "Thanks for your valuable time!", "success");
      reset();
    } catch (err: any) {
      toast.error(err);
    }
  };

  return (
    <div className=" lg:px-8 pb-20 px-9">
      {/* Card Details */}
      <div className="w-full lg:flex lg:justify-between   lg:gap-x-12 lg:mt-16 ">
        <div className="lg:w-[50%] h-[300px] lg:h-[600px]  bg-[#dbd9d7] flex justify-center items-center  rounded-[4px]">
          <img
            src={carDetails?.image}
            alt={carDetails?.name}
            className="w-full h-full"
          />
        </div>
        <div key={carDetails?._id} className="lg:w-[50%] lg:mt-0 mt-10">
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Model:</span>
            <p className=" font-light">{carDetails?.model}</p>
          </div>
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Car Type:</span>
            <p className=" font-light">{carDetails?.carType}</p>
          </div>
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Availability:</span>
            <p className="font-light  uppercase">{carDetails?.status}</p>
          </div>

          <h4 className=" font-bold mt-5 mb-3  lg:text-[45px] text-lg uppercase">
            {carDetails?.name}
          </h4>
          <div className="flex gap-10 mb-2">
            <div className="flex gap-2 items-center lg:text-xl">
              <span className="font-semibold">Color:</span>
              <p className=" font-light">{carDetails?.color}</p>
            </div>
            <div className="flex gap-2 items-center lg:text-xl">
              <span className="font-semibold">Year:</span>
              <p className=" font-light">{carDetails?.year}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center lg:text-xl mb-2 ms-1">
            <span className="font-semibold uppercase">Is-Electric:</span>
            <p className=" font-light">{carDetails?.isElectric}</p>
          </div>
          <div className="divider mt-0"></div>
          <div className="flex w-full gap-10 ">
            <div className="flex-grow place-items-center">
              <h4 className="  ms-2 font-bold text-xl lg:text-2xl mb-2">
                Features
              </h4>

              <ul className="list-decimal space-y-2 text-xl list-inside ms-3 ">
                {carDetails?.features.map(
                  (feature: string, index: Key | null | undefined) => (
                    <li key={index} className="">
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="  ">
              <h4 className="font-bold text-lg lg:text-2xl mb-2">
                {" "}
                Choose Additional Features
              </h4>

              {carDetails.AdditionalFeatures.map((AdditionalFeature) => (
                <div className="flex items-center">
                  <input
                    value={AdditionalFeature}
                    onChange={() => handleAddFeatures(AdditionalFeature)}
                    type="checkbox"
                    className="size-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    key={AdditionalFeature}
                    className="ml-2 block text-xl "
                  >
                    {AdditionalFeature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="divider mb-0"></div>

          <p className="font-light  ">{carDetails?.description}</p>
          <div className=" mt-10 flex justify-end ">
            {carDetails?.status === "unavailable" ? (
              <>
                {" "}
                <button
                  disabled
                  className="custom-outline-btn lg:w-[50%] w-full  !font-bold !text-xl"
                >
                  Not Available
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={handleAddBooking}
                  className="custom-outline-btn lg:w-[50%] w-full  !font-bold !text-xl"
                >
                  Book Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Tabs className=" mx-auto py-8">
        <TabList className="flex justify-center gap-5 text-2xl border-b-2 mb-6">
          <Tab
            className="px-6 py-2 cursor-pointer transition duration-300 text-gray-600 focus:outline-none"
            selectedClassName="border-b-4 border-[#1572d3] text-[#1572d3]"
          >
            {" "}
            Description
          </Tab>
          <Tab
            className="px-6 py-2 cursor-pointer transition duration-300 text-gray-600 focus:outline-none"
            selectedClassName=" border-b-4 border-[#1572d3] text-[#1572d3]"
          >
            Reviews
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-between mb-3 mt-4">
            <div>
              <h5 className=" ms-4 flex justify-center text-xl items-center gap-2">
                <span className=" font-semibold">All Reviews</span> (
                {getComments?.length})
              </h5>
            </div>
            <label htmlFor="my_modal" className="custom-btn ">
              Write a Review
            </label>
          </div>
          <div className="  grid grid-cols-1 lg:gap-5 gap-y-10 lg:grid-cols-2 xl:grid-cols-3   ">
            {getComments && getComments?.length > 0 ? (
              getComments?.map((comment: TComment) => (
                <div
                  key={comment?._id}
                  className=" w-full h-full lg:w-[400px] lg:h-[230px]   shadow-md rounded-md border border-base-300 mx-auto p-4 lg:px-8 lg:py-2  hover:scale-90 duration-300"
                >
                  <div>
                    <Rating
                      className="mt-3"
                      style={{ maxWidth: 100 }}
                      value={comment?.rating || 0}
                      readOnly
                    />
                  </div>

                  <h3 className="  mt-3 font-semibold text-2xl mb-2  ">
                    {comment?.user?.name}
                  </h3>

                  <p className="text-md text-gray-500   ">
                    “{comment?.comment}”
                  </p>
                  <h4 className="text-sm text-gray-500  mt-3">
                    {new Date(comment?.createdAt!).toLocaleTimeString("en-US", {
                      hour12: true,
                      timeZone: "Asia/Dhaka",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h4>
                </div>
              ))
            ) : (
              <h4>No Comments found</h4>
            )}
          </div>
        </TabPanel>
      </Tabs>

      {/* Feedback modal */}
      <div>
        {user && (
          <>
            <input type="checkbox" id="my_modal" className="modal-toggle" />
            <div className="modal sm:modal-middle" role="dialog">
              <div className="modal-box max-w-2xl">
                {/* close button */}
                <label
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  htmlFor="my_modal"
                >
                  ✕
                </label>

                <form onSubmit={handleSubmit(handleAddComment)}>
                  <div className="  gap-2   mb-2">
                    <h4 className="primary-color text-2xl font-bold text-center uppercase">
                      Feedback
                    </h4>
                    <div className="text-center">
                      {" "}
                      <p className="font-semibold">Share Your Experience</p>
                      <Rating
                        value={rating}
                        onChange={setRating}
                        style={{ maxWidth: 150 }}
                        className="mx-auto"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                        Comment :
                      </label>
                      <div className="relative mt-2 rounded-md ">
                        <textarea
                          className="textarea textarea-bordered w-full"
                          placeholder="Leave Your Comment"
                          {...register("comment", {
                            required: "Comment is required",
                          })}
                        ></textarea>
                      </div>
                      {errors.comment && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors?.comment.message}
                        </p>
                      )}
                    </div>
                    <div className=" flex">
                      <button
                        type="submit"
                        className="w-full    mt-5    py-2   rounded-3xl font-medium primary-bg-color text-lg uppercase text-white hover:bg-[#051c34] "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>

      {/* suggested Car */}
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mx-auto rounded-xl mt-16">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          Suggested Cars
        </h4>
      </div>
      <h4 className="lg:text-[38px] mt-6 text-center text-lg font-bold uppercase ">
        You might also like!!
      </h4>
      <div className="grid grid-cols-1   lg:grid-cols-4 my-16 mx-auto gap-5 ">
        {allCars?.data && allCars?.data.length > 0 ? (
          allCars?.data
            .slice(5, 9)
            .map((car: TCar) => <SuggestedCar key={car?._id} car={car} />)
        ) : (
          <h2 className="text-center">No Car Found!!! </h2>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
