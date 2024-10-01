import {
  useCancelBookingOrDeleteMutation,
  useGetUserBookingsQuery,
} from "../../../../Redux/api/BookingApi/bookingApi";
import moment from "moment";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { toast } from "sonner";

const BookingManage = () => {
  const { data: userBookings } = useGetUserBookingsQuery({});
  const [cancelBooking] = useCancelBookingOrDeleteMutation();
  // console.log(userBookings);

  const handleCancel = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once Canceled, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await cancelBooking(id);
        toast.success(res.data?.message);
      }
    });
  };
  return (
    <div>
      <table className="table-xs md:table-md lg:table lg:mx-10  ">
        {/* head */}
        <thead className="">
          <tr className="text-sm md:text-base lg:text-lg">
            <th>Car Image</th>
            <th>Car Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Cost</th>

            <th>Actions</th>
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

                <td className="lg:flex lg:gap-2 gap-y-3 ">
                  {details?.isBooked === "confirmed" ? (
                    <>
                      {" "}
                      <span className="bg-green-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                        {details?.isBooked}
                      </span>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleCancel(details?._id)}
                        className="btn text-white bg-[#ff0000] hover:bg-[#c51313] mb-2 btn-xs lg:btn-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}
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

export default BookingManage;
