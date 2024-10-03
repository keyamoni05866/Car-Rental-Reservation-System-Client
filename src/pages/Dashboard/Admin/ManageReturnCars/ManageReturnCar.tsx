import moment from "moment";
import {
  useGetAllConfirmBookingsQuery,
  useReturnCarMutation,
} from "../../../../Redux/api/BookingApi/bookingApi";
import { useState } from "react";
import { toast } from "sonner";
import { TResponse } from "../../../../Types";

const ManageReturnCar = () => {
  const { data: bookings, isLoading } = useGetAllConfirmBookingsQuery({});
  const [returnCar] = useReturnCarMutation();
  const [endTime, setEndTime] = useState("");
  const [selectInfo, setSelectedInfo] = useState();

  // console.log(bookings);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  const handleReturnCar = async (item: any) => {
    // console.log(item);
    const returnCarData = {
      booking: item,
      endTime,
    };
    // console.log(returnCarData);
    try {
      const res = (await returnCar(returnCarData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data.message, { duration: 3000 });
      }
      toast.success(res.data?.message, { duration: 3000 });
    } catch (error) {
      toast.error("Something Went Wrong!!");
    }
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
                <td>
                  {" "}
                  {details?.isReturned == true ? (
                    <>
                      {" "}
                      <span className=" text-white bg-[#1572d3]  mb-2 p-2 rounded-xl ">
                        {" "}
                        Returned
                      </span>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <button onClick={() => setSelectedInfo(details)}>
                        {" "}
                        <label
                          htmlFor="my_modal"
                          className="btn text-white bg-[#1572d3] hover:bg-[#155ba7] mb-2 btn-xs lg:btn-sm"
                        >
                          {" "}
                          Return Car
                        </label>
                      </button>
                    </>
                  )}
                  <input
                    type="checkbox"
                    id="my_modal"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box max-w-2xl">
                      {/* close button */}
                      <label
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        htmlFor="my_modal"
                      >
                        ✕
                      </label>

                      <div className=" p-8">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Booking End Date & Time :
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="input input-bordered w-full "
                          />
                        </div>
                      </div>
                      <div className="flex justify-end me-8">
                        <button
                          onClick={() => handleReturnCar(selectInfo)}
                          className="custom-btn"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
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

export default ManageReturnCar;
