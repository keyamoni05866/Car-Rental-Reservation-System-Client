import { Link } from "react-router-dom";
import { TCar } from "../../../Types";

const SuggestedCar = ({ car }: { car: TCar }) => {
  return (
    <div>
      <div className="bg-base-200 xl:w-[290px]  h-[280px] flex justify-center items-center rounded-xl p-4">
        <img
          src={car?.image}
          alt="Product Picture"
          className=" w-full h-full "
        />
      </div>
      <div className="ms-2">
        <h4 className="text-xl font-bold mt-5 ">{car?.name}</h4>
        <div className="xl:flex justify-between">
          <h4 className="lg:text-md text-lg font-bold text-black">
            Car Type:
            <span className="lg:text-sm text-lg  text-gray-500 ms-2">
              {car?.carType}
            </span>
          </h4>
          <h4 className="lg:text-md text-lg  font-bold text-black">
            Color:
            <span className="lg:text-sm text-lg  text-gray-500 ms-2">
              {car?.color}
            </span>
          </h4>
        </div>
        <div className="flex gap-7 mb-4">
          {" "}
          <h4 className=" text-xl ">Price:</h4>{" "}
          <div className="flex">
            <h4 className="font-semibold text-lg "> ${car?.pricePerHour}</h4>
            <h4 className="text-lg ms-1">/hour</h4>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            to={`/cars/${car._id}`}
            className=" hover:underline hover:text-[#155ba7] px-4 text-lg font-bold  flex  items-center justify-center"
          >
            More Details
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
  );
};

export default SuggestedCar;
