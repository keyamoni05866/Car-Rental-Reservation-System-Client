import { useDispatch } from "react-redux";
import {
  clearBookingStateAfterConfirm,
  useBookedCar,
  useBookingConfirm,
} from "../../../Redux/features/booking/bookingSlice";
import { useAppSelector } from "../../../Redux/hook";
import { currentUser } from "../../../Redux/features/auth/authSlice";
import { Key } from "react";
import moment from "moment";
import { useCreateBookingMutation } from "../../../Redux/api/BookingApi/bookingApi";
import { TResponse } from "../../../Types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const ReviewBooking = () => {
  const [createBooking] = useCreateBookingMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCar: any = useAppSelector(useBookedCar);
  // console.log(selectedCar);
  const selectedInformation: any = useAppSelector(useBookingConfirm);
  // console.log(selectedInformation);
  const user = useAppSelector(currentUser);
  // console.log(user);
  const carId = selectedCar._id;
  const handleConfirm = async () => {
    const bookinData = {
      payment: { ...selectedInformation, status: "pending" },
      carId: carId,
    };

    try {
      const res = (await createBooking(bookinData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data.message, { duration: 3000 });
      }
      toast.success(res.data?.message, { duration: 3000 });
      navigate("/user/booking-management");
      dispatch(clearBookingStateAfterConfirm());
    } catch (error) {
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <div>
      {selectedCar.length !== 0 ? (
        <>
          {" "}
          <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mb-2 rounded-xl mx-auto mt-5">
            {" "}
            <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
              Booking Review
            </h4>
          </div>
          <h4 className="text-2xl font-bold text-center ">
            Review Your Order Before Confirmation!!!
          </h4>
          <div className="lg:flex   mt-16 mb-20 w-full  mx-auto px-0   shadow-xl  max-w-screen-lg rounded-xl">
            <div className="lg:w-[50%]  mb-16 lg:mb-0">
              <div className="  bg-base-100   pb-5 mx-auto">
                <div className="bg-base-200 w-full h-[250px]  flex justify-center items-center">
                  <img
                    src={selectedCar?.image}
                    alt="Album"
                    className="lg:w-[50%] h-full"
                  />
                </div>
                <div className=" mt-6  mx-10">
                  <div className="flex  justify-between lg:text-xl">
                    <div>
                      <div className="flex gap-2">
                        {" "}
                        <span className="font-semibold">Model:</span>
                        <p className=" font-light">{selectedCar?.model}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Car Type:</span>
                        <p className=" font-light">{selectedCar?.carType}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Availability:</span>
                        <p className="font-light  uppercase">
                          {selectedCar?.status}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Color:</span>
                        <p className=" font-light">{selectedCar?.color}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Year:</span>
                        <p className=" font-light">{selectedCar?.year}</p>
                      </div>
                    </div>
                  </div>

                  <h4 className=" font-bold  mt-2  lg:text-3xl text-lg uppercase">
                    {selectedCar?.name}
                  </h4>
                  <div className="flex gap-x-2 text-xl">
                    <span className="font-semibold">Price Per Hour:</span>
                    <p className=" font-light">${selectedCar?.pricePerHour}</p>
                  </div>
                  <div className=" lg:flex justify-between items-center gap-5">
                    <div className="flex-grow place-items-center">
                      <h4 className="  ms-2 font-bold text-lg mb-2">
                        Features
                      </h4>

                      <ul className="list-decimal space-y-2 text-xl list-inside ms-3 ">
                        {selectedCar?.features.map(
                          (feature: string, index: Key | null | undefined) => (
                            <li key={index} className="text-gray-700">
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="  mb-16 ">
                      <h4 className="font-bold text-lg  mt-4 ">
                        {" "}
                        Choosen Additional Features
                      </h4>

                      {selectedCar?.chosenAdditionalFeatures?.map(
                        (
                          AdditionalFeature: string,
                          index: Key | null | undefined
                        ) => (
                          <div
                            key={index}
                            className="flex items-center ms-3 lg:ms-10"
                          >
                            <input
                              defaultChecked
                              type="checkbox"
                              className="size-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-xl ">
                              {AdditionalFeature}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] w-full ms-5  me-3 mt-5">
              <h4 className="text-xl font-semibold my-5 ms-5">
                Your Information
              </h4>
              <div className="">
                <div className="ps-5 pe-2  pb-2">
                  <h4 className="lg:text-lg ">
                    <span className="font-bold"> Name:</span> {user?.name}
                  </h4>
                  <h4 className="lg:text-lg mt-2  ">
                    <span className="font-semibold">Email:</span> {user?.email}
                  </h4>
                  <h4 className="lg:text-lg  mt-2 ">
                    <span className="font-semibold">Phone:</span> {user?.phone}
                  </h4>
                </div>
                <div className="divider"></div>
                <div>
                  <h4 className="text-xl font-semibold  mt-4 ms-5">
                    Payment Information
                  </h4>
                  <div className="py-4 pb-4 ">
                    <div className="ps-5 pe-2  pb-2">
                      <h4 className="lg:text-lg ">
                        <span className="font-bold"> NID/Passport:</span>{" "}
                        {selectedInformation?.nidOrPassport}
                      </h4>
                      <h4 className="lg:text-lg mt-2  ">
                        <span className="font-semibold">Driving License:</span>{" "}
                        {selectedInformation?.drivingLicense}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">Card Number:</span>{" "}
                        {selectedInformation?.cardNumber}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">CVV:</span>{" "}
                        {selectedInformation?.cvv}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">
                          Booking Date and Time:
                        </span>{" "}
                        {moment(selectedInformation.startTime).format(
                          "MMMM Do YYYY  h:mm a"
                        )}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end me-8  mt-5 ">
                <button
                  onClick={handleConfirm}
                  className="custom-btn  lg:w-[60%] w-full lg:mb-0  mb-10"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className=" text-center">No Car Found Please Select A Car</h4>
        </>
      )}
    </div>
  );
};

export default ReviewBooking;
