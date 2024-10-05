import { useGetAllBookingsQuery } from "../../../Redux/api/BookingApi/bookingApi";
import {
  useGetAvailableCarsForBookingQuery,
  useGetCarsQuery,
} from "../../../Redux/api/CarApi/carApi";
import { useGetUsersQuery } from "../../../Redux/api/UserApi/UserApi";

const AdminDashboard = () => {
  const { data: availableCars, isLoading } = useGetAvailableCarsForBookingQuery(
    {}
  );
  const { data: totalBookings } = useGetAllBookingsQuery({});
  const { data: allUsers } = useGetUsersQuery({});
  const availableCar = availableCars?.data;
  const totalBooking = totalBookings?.data;
  const allUser = allUsers?.data;

  // const totalRevenue = totalBooking?.reduce(
  //   (arr, item) => arr + Number(item?.totalCost),
  //   0
  // );

  const totalRevenue = totalBooking?.reduce(
    (arr, item) => arr + Number(item?.totalCost),
    0
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }
  return (
    <div className="  mx-auto mt-5 ">
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mb-2 rounded-xl mx-auto ">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          statistics
        </h4>
      </div>
      <h4 className="text-2xl font-bold text-center ">
        Comprehensive Statistics & Performance Summary!!!
      </h4>
      <div className="lg:flex   gap-6   lg:justify-center rounded-2xl mt-5 ms-10 lg:ms-0 lg:mt-20">
        <div className="stats shadow ">
          <div className="p-10 text-center">
            <div className="text-xl stat-title">Available Cars</div>
            <div className="stat-value">{availableCar?.length}</div>
          </div>
        </div>
        <div className="stats shadow ">
          <div className="p-10 text-center">
            <div className="text-xl stat-title">Total Bookings</div>
            <div className="stat-value">{totalBooking?.length}</div>
          </div>
        </div>
        <div className="stats shadow ">
          <div className="p-10 text-center">
            <div className="text-xl stat-title">Total User's</div>
            <div className="stat-value">{allUser?.length}</div>
          </div>
        </div>
        <div className="stats shadow ">
          <div className="p-10 text-center">
            <div className="text-xl stat-title">Total Revenue</div>
            <div className="stat-value">${totalRevenue?.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
