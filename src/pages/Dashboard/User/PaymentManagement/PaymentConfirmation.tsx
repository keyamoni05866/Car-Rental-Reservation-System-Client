import { useAppSelector } from "../../../../Redux/hook";
import {
  clearPaymentInformationState,
  usePaymentInfo,
} from "../../../../Redux/features/booking/bookingSlice";
import moment from "moment";
import { usePaymentMutation } from "../../../../Redux/api/BookingApi/bookingApi";
import { useDispatch } from "react-redux";

const PaymentConfirmation = () => {
  const paymentInfo = useAppSelector(usePaymentInfo);
  const dispatch = useDispatch();
  const [payment] = usePaymentMutation();
  //   console.log(paymentInfo);

  const handleConfirmPayment = async () => {
    const res = await payment(paymentInfo).unwrap();
    window.location.href = res.data.payment_url;
    dispatch(clearPaymentInformationState(paymentInfo));
  };

  return (
    <div>
      {paymentInfo.length !== 0 ? (
        <>
          {" "}
          <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mb-2 rounded-xl mx-auto ">
            {" "}
            <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
              Confirmation
            </h4>
          </div>
          <h4 className="text-2xl font-bold text-center ">
            Review Your Booking Information Before Payment!!!
          </h4>
          <div className="lg:flex   mt-8 mb-20 w-full  mx-auto px-0   shadow-xl  max-w-screen-lg rounded-xl">
            <div className="lg:w-[50%]  mb-16 lg:mb-0">
              <div className="  bg-base-100   pb-5 mx-auto">
                <div className="bg-base-200 w-full h-[250px]  flex justify-center items-center">
                  <img
                    src={paymentInfo?.carId.image}
                    alt="Album"
                    className="lg:w-[50%] h-full"
                  />
                </div>

                <div className=" mt-6  mx-10">
                  <h5 className="text-2xl font-bold my-6">
                    {" "}
                    {paymentInfo?.carId?.name}
                  </h5>
                  <div className="flex  justify-between lg:text-xl">
                    <div>
                      <div className="flex gap-2">
                        {" "}
                        <span className="font-semibold">Model:</span>
                        <p className=" font-light">
                          {paymentInfo?.carId?.model}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Car Type:</span>
                        <p className=" font-light">
                          {paymentInfo?.carId?.carType}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Color:</span>
                        <p className=" font-light">
                          {paymentInfo?.carId?.color}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Year:</span>
                        <p className=" font-light">
                          {paymentInfo?.carId?.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className=" font-bold  mt-2  lg:text-3xl text-lg uppercase">
                    {paymentInfo?.name}
                  </h4>
                  <div className="flex gap-x-2 text-xl">
                    <span className="font-semibold">Price Per Hour:</span>
                    <p className=" font-light">
                      ${paymentInfo?.carId?.pricePerHour}
                    </p>
                  </div>
                  <div className="flex gap-x-2 text-xl mt-4">
                    <span className="font-semibold">Total Cost:</span>
                    <p className=" font-light">${paymentInfo?.totalCost}</p>
                  </div>
                  <div className="flex gap-x-2 text-xl mt-2">
                    <span className="font-semibold">Payment Status:</span>
                    <p className=" font-light">{paymentInfo?.paymentStatus}</p>
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
                    <span className="font-bold"> Name:</span>{" "}
                    {paymentInfo?.user?.name}
                  </h4>
                  <h4 className="lg:text-lg mt-2  ">
                    <span className="font-semibold">Email:</span>{" "}
                    {paymentInfo?.user?.email}
                  </h4>
                  <h4 className="lg:text-lg  mt-2 ">
                    <span className="font-semibold">Phone:</span>{" "}
                    {paymentInfo?.user?.phone}
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
                        {paymentInfo?.payment?.nidOrPassport}
                      </h4>
                      <h4 className="lg:text-lg mt-2  ">
                        <span className="font-semibold">Driving License:</span>{" "}
                        {paymentInfo?.payment?.drivingLicense}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">Card Number:</span>{" "}
                        {paymentInfo?.payment?.cardNumber}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">CVV:</span>{" "}
                        {paymentInfo?.payment?.cvv}
                      </h4>
                      <h4 className="lg:text-lg  mt-2 ">
                        <span className="font-semibold">
                          Booking Date and Time:
                        </span>{" "}
                        {moment(paymentInfo?.payment?.startTime).format(
                          "MMMM Do YYYY  h:mm a"
                        )}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end me-8  mt-5 ">
                <button
                  onClick={handleConfirmPayment}
                  className="custom-btn  lg:w-[60%] w-full lg:mb-5  mb-10"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className=" text-center">No Booking Found</h4>
        </>
      )}
    </div>
  );
};

export default PaymentConfirmation;
