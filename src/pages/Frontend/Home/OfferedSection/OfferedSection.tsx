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
              className="card card-compact bg-base-100 lg:max-w-[240px] xl:max-w-[340px] shadow-md  mx-auto hover:scale-95 duration-300 rounded-xl "
            >
              <div className=" lg:w-[240px] xl:w-[300px]  h-[100px] flex justify-center items-center">
                <img
                  src={car.image}
                  alt="Product Picture"
                  className=" w-full h-full "
                />
              </div>
              <div className=" my-2  ">
                <div className="mx-7">
                  <h3 className="card-title">{car?.name}</h3>
                  <div className="flex justify-between mb-2 xl:text-lg lg:text-[12px]">
                    {" "}
                    <h4 className=" ">
                      <span className="font-semibold ">Car Type:</span>{" "}
                      {car?.carType}
                    </h4>
                    <h4 className="">
                      <span className="font-semibold "> Color:</span>{" "}
                      {car?.color}
                    </h4>
                  </div>

                  <div className="flex justify-between">
                    {" "}
                    <h4 className=" text-lg ">Price:</h4>{" "}
                    <div className="flex">
                      <h4 className="font-semibold text-lg ">
                        {" "}
                        ${car?.pricePerHour}
                      </h4>
                      <h4 className="text-lg ms-1">/hour</h4>
                    </div>
                  </div>
                </div>

                <div className="card-actions w-full mt-4 mb-4 items-center justify-center">
                  <Link
                    to={`/cars/${car._id}`}
                    className="custom-btn flex w-full mx-5  items-center justify-center"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="size-[20px] ms-[8px] mt-[2px]"
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
