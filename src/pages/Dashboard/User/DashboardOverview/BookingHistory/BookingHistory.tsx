import moment from "moment";
import { useBookingHistoryQuery } from "../../../../../Redux/api/BookingApi/bookingApi";

const BookingHistory = () => {
  const { data: bookingHistory, isLoading } = useBookingHistoryQuery({});
  //   console.log(bookingHistory);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }
  return (
    <div className="">
      <div className="divider font-bold text-xl mb-5">Booking History</div>
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
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {bookingHistory?.data && bookingHistory?.data?.length > 0 ? (
            bookingHistory?.data?.map((details: any) => (
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

                <td>
                  {" "}
                  <span className=" primary-bg-color px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                    {" "}
                    {details?.paymentStatus}
                  </span>
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

export default BookingHistory;
