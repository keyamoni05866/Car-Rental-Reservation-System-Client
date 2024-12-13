import { Link } from "react-router-dom";
import { useGetFeaturedCarsQuery } from "../../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../../Types";

const FeaturedCars = () => {
  const { data: cars, isLoading } = useGetFeaturedCarsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-32   mx-5 lg:mx-0 ">
      <div className="bg-[#cfe4fa]   w-[180px] h-[50px] mx-auto rounded-xl">
        {" "}
        <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px]  text-center  pt-3 ">
          Featured Rentals
        </h4>
      </div>
      <h4 className="lg:text-[38px] mt-4 text-center text-lg font-bold">
        Drive Our Featured Cars!!
      </h4>

      <div className="lg:mt-16  mt-10 grid lg:grid-cols-3 gap-y-5 xl:gap-6 lg:mx-4 xl:max-w-[92%] xl:mx-auto ">
        {cars?.data && cars?.data?.length > 0 ? (
          cars?.data?.slice(0, 6).map((car: TCar) => (
            <div
              key={car._id}
              className="card card-compact lg:max-w-[320px] xl:max-w-[380px] shadow-md min-h-[400px] border border-gray-300 dark:border-gray-700 rounded-[10px] mx-auto hover:shadow-lg hover:border-[#1572d3]  transition-all duration-300 "
            >
              <div className="relative lg:max-w-[320px] xl:max-w-[380px] rounded-t-[10px] overflow-hidden">
                <img
                  src={car.image}
                  alt="Product Picture"
                  className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="my-2">
                <div className="px-6">
                  <h3 className="card-title  font-semibold text-lg">
                    {car?.name}
                  </h3>
                  <div className="flex justify-between mb-2  text-sm">
                    <span>
                      <strong>Car Type:</strong> {car?.carType}
                    </span>
                    <span>
                      <strong>Color:</strong> {car?.color}
                    </span>
                  </div>
                  <p className=" text-sm mb-2">
                    {car?.description.substring(0, 100)}...
                    <Link
                      to={`/cars/${car._id}`}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      See more
                    </Link>
                  </p>

                  <div className="border-t border-gray-300  my-3"></div>
                  <div className="flex justify-between items-center ">
                    <span className="text-lg font-medium">Price:</span>
                    <span className="flex items-baseline">
                      <span className="text-lg font-semibold">
                        ${car?.pricePerHour}
                      </span>
                      <span className="text-sm ml-1">/hour</span>
                    </span>
                  </div>
                </div>
                <div className="card-actions w-full mt-4 mb-4 flex items-center justify-center">
                  <Link
                    to={`/cars/${car._id}`}
                    className="w-full mx-5 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md font-medium transition-all duration-300"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="inline-block w-5 h-5 ml-2"
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

export default FeaturedCars;
