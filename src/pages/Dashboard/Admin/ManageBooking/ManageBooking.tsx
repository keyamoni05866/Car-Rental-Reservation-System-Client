import moment from "moment";
import {
  useApproveBookingMutation,
  useCancelBookingOrDeleteFromAdminSideMutation,
  useGetAllBookingsQuery,
} from "../../../../Redux/api/BookingApi/bookingApi";
import { toast } from "sonner";

const ManageBooking = () => {
  const { data: bookings, isLoading } = useGetAllBookingsQuery({});
  const [cancelBookingFormAdminSide] =
    useCancelBookingOrDeleteFromAdminSideMutation();
  const [approveBooking] = useApproveBookingMutation();
  // console.log(bookings);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }
  const handleCancel = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once Canceled, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await cancelBookingFormAdminSide(id);
        toast.success(res.data?.message);
      }
    });
  };

  const handleApprove = async (id: string) => {
    // console.log(id);
    const res = await approveBooking(id);
    toast.success(res.data?.message);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-xs md:table-md lg:table   ">
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

          {bookings?.data && bookings?.data?.length > 0 ? (
            bookings?.data?.map((details: any) => (
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
                {details?.status === "cancelled" ? (
                  <>
                    {" "}
                    <td>
                      <span className="bg-red-400 px-3  py-2 text-sm text-white rounded-2xl h-10   ">
                        {details?.status}
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="lg:flex lg:gap-2 gap-y-3 ">
                      {details?.status !== "confirmed" ? (
                        <>
                          <button
                            onClick={() => handleApprove(details?._id)}
                            className="btn text-white bg-[#1572d3] hover:bg-[#155ba7] mb-2 btn-xs lg:btn-sm"
                          >
                            Approve
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <span className="bg-green-400 px-3 pt-1 text-sm text-white rounded-2xl h-8   ">
                            Approved
                          </span>
                        </>
                      )}

                      {details?.isBooked === "confirmed" ? (
                        <> </>
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
                  </>
                )}

                {/* <td className="lg:flex lg:gap-2 gap-y-3 ">
                  {details?.status !== "confirmed" ? (
                    <>
                      <button
                        onClick={() => handleApprove(details?._id)}
                        className="btn text-white bg-[#1572d3] hover:bg-[#155ba7] mb-2 btn-xs lg:btn-sm"
                      >
                        Approve
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="bg-green-400 px-3 pt-1 text-sm text-white rounded-2xl h-8   ">
                        Approved
                      </span>
                    </>
                  )}

                  {details?.isBooked === "confirmed" ? (
                    <> </>
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
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-3">
                No Booking Found!!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
