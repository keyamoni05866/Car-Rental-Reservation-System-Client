import { Link } from "react-router-dom";
import { useGetAvailableCarsForBookingQuery } from "../../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../../Types";

const OfferedSection = () => {
  const { data: cars, isLoading } = useGetAvailableCarsForBookingQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mb-32 mx-5 lg:mx-0 ">
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mx-auto rounded-xl">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          Hot Deals
        </h4>
      </div>
      <h4 className="lg:text-[38px] mt-4 text-center text-lg font-bold">
        Drive into Savings!!
      </h4>

      <div className="lg:mt-16  mt-10  grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:mx-auto mx-4     ">
        {cars?.data && cars?.data?.length > 0 ? (
          cars?.data?.slice(0, 4).map((car: TCar) => (
            <div
              key={car._id}
              className="card card-compact border-[2px] max-w-[350px] rounded-lg overflow-hidden shadow-sm   border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-[#1572d3] mx-auto"
            >
              <div className="w-full h-[220px] bg-base-200  overflow-hidden relative group">
                <img
                  src={car?.image}
                  alt={car?.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold  truncate">{car?.name}</h3>

                <p className="text-sm   mt-1 line-clamp-2">
                  {car?.description.substring(0, 70)}...
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
                    <span className="text-sm font-normal ml-1">/hour</span>
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
          <h2 className="text-center">No Car Found!!! </h2>
        )}
      </div>
    </div>
  );
};

export default OfferedSection;
