import { Link, useNavigate, useParams } from "react-router-dom";
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
import CarDetailsTabPanel from "./CarDetailsTabPanel";
import CommentCard from "./CommentCard";

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

  const getRelatedCar = allCars?.data?.filter(
    (car: TCar) => car?.color === carDetails?.color
  );
  // console.log(getRelatedCar);

  const getComments = allComments?.data?.filter(
    (comment: TComment) => comment?.car?._id === carDetails?._id
  );

  const totalRatings =
    getComments?.reduce(
      (sum: any, comment: TComment) => sum + (comment.rating || 0),
      0
    ) || 0;
  const averageRating = getComments?.length
    ? (totalRatings / getComments.length).toFixed(1)
    : "0";
  // console.log(Number(averageRating));

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
        <div className="lg:w-[50%] h-[300px] lg:h-[430px]  bg-[#dbd9d7] flex justify-center items-center  rounded-[4px]">
          <img
            src={carDetails?.image}
            alt={carDetails?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div key={carDetails?._id} className="lg:w-[50%] lg:mt-0 mt-10">
          <h4 className=" font-bold mt-5   lg:text-[45px] text-lg uppercase">
            {carDetails?.name}
          </h4>
          <div className="mb-3 flex gap-3  items-center my-3  ">
            {" "}
            <Rating
              style={{ maxWidth: 150 }}
              value={Number(averageRating)}
              readOnly
            />
            <span className="text-2xl  ">
              {Number(averageRating)} <span>/5</span>
            </span>
          </div>

          <div className="flex text-3xl ">
            <h4 className="font-semibold  "> ${carDetails?.pricePerHour}</h4>
            <h4 className=" ms-1">/hour</h4>
          </div>
          <p className="text-[16px]   mt-1 line-clamp-2">
            {carDetails?.description.substring(0, 150)}.
          </p>

          <div className="divider mt-0"></div>
          <div className="flex w-full  ">
            <div className="flex-grow ">
              <h4 className="  font-bold text-xl lg:text-2xl mb-2 ms-3">
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

          <div className=" mt-8 flex justify-end ">
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

      {/* Tabs Section */}
      <Tabs className=" mx-auto py-8">
        <TabList className="flex justify-center gap-5 text-2xl border-b-2 mb-6">
          <Tab
            className="px-6 py-2 cursor-pointer transition duration-300 text-gray-600 focus:outline-none"
            selectedClassName="border-b-4 border-[#1572d3] text-[#1572d3]"
          >
            {" "}
            Details
          </Tab>
          <Tab
            className="px-6 py-2 cursor-pointer transition duration-300 text-gray-600 focus:outline-none"
            selectedClassName=" border-b-4 border-[#1572d3] text-[#1572d3]"
          >
            Reviews
          </Tab>
        </TabList>

        {/* Car More details tab panel */}
        <TabPanel>
          <div className="lg:flex lg:justify-between mt-8">
            <CarDetailsTabPanel car={carDetails} />
            <div className="grid grid-cols-1 gap-y-4      ms-8">
              {getRelatedCar && getRelatedCar?.length > 0 ? (
                getRelatedCar?.slice(0, 2).map((car: TCar) => (
                  <div
                    key={car._id}
                    className="card card-compact border-[2px] max-w-[350px] rounded-lg overflow-hidden shadow-sm   border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-[#1572d3] mx-auto "
                  >
                    <div className="w-full  h-[200px]  overflow-hidden relative group ">
                      <img
                        src={car?.image}
                        alt={car?.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold  truncate">
                        {car?.name}
                      </h3>

                      <p className="text-sm   mt-1 line-clamp-2">
                        {car?.description.substring(0, 80)}...
                        <Link
                          to={`/cars/${car._id}`}
                          className="text-blue-600 hover:underline ml-1"
                        >
                          see more
                        </Link>
                      </p>

                      <div className="my-2 border-t border-gray-200"></div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm  font-medium">Price:</span>
                        <div className="text-lg font-bold  flex items-center">
                          ${car?.pricePerHour}
                          <span className="text-sm font-normal ml-1">
                            /hour
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Link
                          to={`/cars/${car._id}`}
                          className="w-full block py-2 px-4 bg-[#1572d3] text-white text-center rounded-lg font-medium transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1572d3] focus:ring-offset-2"
                        >
                          View Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="w-5 h-5 inline-block ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2 className="text-center">No Related Car Found!!! </h2>
              )}
            </div>
          </div>
        </TabPanel>
        {/* Review Tab Panel */}
        <TabPanel>
          <div className="flex justify-between mb-3 mt-4">
            <div>
              <h5 className=" ms-4 flex justify-center text-xl items-center gap-2">
                <span className=" font-semibold">All Reviews</span> (
                {getComments?.length})
              </h5>
            </div>
            {user && (
              <label htmlFor="my_modal" className="custom-btn ">
                Write a Review
              </label>
            )}
          </div>
          <div className="  grid grid-cols-1 lg:gap-5 gap-y-10 lg:grid-cols-2 xl:grid-cols-3   ">
            {getComments && getComments?.length > 0 ? (
              getComments?.map((comment: TComment) => (
                <CommentCard key={comment?._id} comment={comment} />
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
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mx-auto rounded-xl mt-10">
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
