import { useParams } from "react-router-dom";
import {
  useAddCarMutation,
  useCarDetailsQuery,
} from "../../../Redux/api/CarApi/carApi";
import { Key } from "react";
import { TCar } from "../../../Types";

const CarDetails = () => {
  const { id } = useParams();
  const { data: cars, isLoading } = useCarDetailsQuery(id);
  //   console.log(cars);
  const carDetails: TCar = cars?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" lg:px-8 pb-20 px-9">
      <div className="w-full lg:flex lg:justify-between   lg:gap-x-12 lg:mt-16 ">
        <div className="lg:w-[50%] h-[300px] lg:h-[600px] bg-[#dbd9d7] flex justify-center items-center  rounded-[4px]">
          <img
            src={carDetails?.image}
            alt={carDetails?.name}
            className="w-full h-full"
          />
        </div>
        <div className="lg:w-[50%] lg:mt-0 mt-10">
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Model:</span>
            <p className=" font-light">{carDetails?.model}</p>
          </div>
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Car Type:</span>
            <p className=" font-light">{carDetails?.carType}</p>
          </div>
          <div className="flex gap-2 items-center lg:text-xl">
            <span className="font-semibold">Availability:</span>
            <p className="font-light  uppercase">{carDetails?.status}</p>
          </div>

          <h4 className=" font-bold mt-5 mb-3  lg:text-[45px] text-lg uppercase">
            {carDetails?.name}
          </h4>
          <div className="flex gap-10 mb-2">
            <div className="flex gap-2 items-center lg:text-xl">
              <span className="font-semibold">Color:</span>
              <p className=" font-light">{carDetails?.color}</p>
            </div>
            <div className="flex gap-2 items-center lg:text-xl">
              <span className="font-semibold">Year:</span>
              <p className=" font-light">{carDetails?.year}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center lg:text-xl mb-2 ms-1">
            <span className="font-semibold uppercase">Is-Electric:</span>
            <p className=" font-light">{carDetails?.isElectric}</p>
          </div>
          <div className="divider mt-0"></div>
          <div className="flex w-full gap-10 ">
            <div className="flex-grow place-items-center">
              <h4 className="  ms-2 font-bold text-xl lg:text-2xl mb-2">
                Features
              </h4>

              <ul className="list-decimal space-y-2 text-xl list-inside ms-3 ">
                {carDetails?.features.map(
                  (feature: string, index: Key | null | undefined) => (
                    <li key={index} className="text-gray-700">
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="  ">
              <h4 className="font-bold text-lg lg:text-2xl mb-2">
                {" "}
                Choose Additional Features
              </h4>

              {carDetails.AdditionalFeatures.map((AdditionalFeature) => (
                <div className="flex items-center">
                  <input
                    value={AdditionalFeature}
                    type="checkbox"
                    className="size-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    key={AdditionalFeature}
                    className="ml-2 block text-xl "
                  >
                    {AdditionalFeature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="divider mb-0"></div>

          <p className="font-light  ">{carDetails?.description}</p>
          <div className=" mt-5 flex justify-end ">
            <button className="custom-outline-btn lg:w-[50%] w-full  !font-bold !text-xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
