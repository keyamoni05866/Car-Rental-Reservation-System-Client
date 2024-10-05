import moment from "moment";
import { useGetUserBookingsAfterCarReturnedQuery } from "../../../../Redux/api/BookingApi/bookingApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paymentInformation } from "../../../../Redux/features/booking/bookingSlice";

const PaymentMange = () => {
  const { data: userBookings, isLoading } =
    useGetUserBookingsAfterCarReturnedQuery({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  const handlePaymentInfo = (paymentInfo: any) => {
    // console.log(paymentInfo);
    dispatch(paymentInformation(paymentInfo));
    navigate("/user/payment-confirmation");
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-xs md:table-md lg:table  ">
        {/* head */}
        <thead className="">
          <tr className="text-sm md:text-base lg:text-lg">
            <th>Car Image</th>
            <th>Car Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {userBookings?.data && userBookings?.data?.length > 0 ? (
            userBookings?.data?.map((details: any) => (
              <tr key={details._id} className="text-xs md:text-sm lg:text-base">
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask bg-base-300 mask-squircle lg:h-14 lg:w-14 h-10 w-10">
                        <img src={details?.carId?.image} alt="Product Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{details?.carId?.name}</span>
                </td>
                <td>
                  {moment(details?.payment?.startTime).format(
                    "MMMM Do YYYY  h:mm a"
                  )}
                </td>
                <td>
                  {" "}
                  {details?.endTime
                    ? moment(details?.endTime).format("MMMM Do YYYY  h:mm a")
                    : "End time will be update after approve"}
                </td>
                <td>${details?.totalCost}</td>

                <td className=" ">
                  <div>
                    {details?.status === "cancelled" ? (
                      <>
                        {" "}
                        <span className="bg-red-500 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                          {details?.status}
                        </span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="bg-green-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                          {details?.status}
                        </span>
                      </>
                    )}
                  </div>
                </td>
                <td className="  ">
                  <div>
                    {details?.paymentStatus === "pending" ? (
                      <>
                        {" "}
                        <button
                          onClick={() => handlePaymentInfo(details)}
                          className="custom-btn !pt-1 !text-sm lg:btn-sm btn-xs"
                        >
                          proceed to payment
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="bg-success px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                          {details?.paymentStatus}
                        </span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-3">
                No Booking Found!!! Please Select
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentMange;
