import { Key, useState } from "react";
import { useGetAvailableCarsForBookingQuery } from "../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../Types";

import SearchedCar from "./SearchedCar";

import BookingForm from "./BookingForm";
import { useAppSelector } from "../../../Redux/hook";
import { useBookedCar } from "../../../Redux/features/booking/bookingSlice";

const Booking = () => {
  const [name, setName] = useState("");
  const [carType, setCartype] = useState("All");
  const [features, setFeatures] = useState("All");

  const selectedCar: any = useAppSelector(useBookedCar);

  console.log(selectedCar);

  const { data: cars, isLoading } = useGetAvailableCarsForBookingQuery({
    name,
    carType,
    features,
  });
  const [searchResults, setSearchResults] = useState<TCar[] | undefined>(
    undefined
  );
  // console.log(cars);

  const handleSearch = () => {
    if (cars) {
      setSearchResults(cars.data);
    } else {
      setSearchResults(undefined);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!selectedCar || selectedCar.length === 0) {
    return (
      <>
        <div className="lg:flex justify-between items-center  gap-x-2 px-2 rounded-xl  mx-auto lg:w-[70%]  mt-28 shadow-sm p-4">
          <label className="input   flex items-center ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="grow"
              placeholder="Enter Name"
            />
          </label>

          <div className="">
            <select
              className=" select  w-full max-w-xs"
              value={carType}
              onChange={(e) => setCartype(e.target.value)}
            >
              <option value="All">Select Car Type</option>
              <option value="SUV">SUV </option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Convertible">Convertible</option>

              <option value="Coupe">Coupe</option>
            </select>
          </div>

          <div className="">
            <select
              className=" select select-ghost w-full max-w-xs"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            >
              <option value="All">Select Features</option>
              <option value="Air Conditioning">Air Conditioning </option>
              <option value="Bluetooth">Bluetooth</option>
              <option value="Sunroof">Sunroof</option>
              <option value="Touchscreen">Touchscreen</option>
              <option value="Backup Camera">Backup Camera</option>
              <option value="Navigation System">Navigation System</option>
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="custom-btn  ms-5 lg:w-[20%] w-[40%]"
          >
            Search
          </button>
        </div>
        <div className="lg:flex justify-between gap-x-8 mt-16 mb-20 w-full ">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:w-[60%] gap-8 mt-10 lg:mb-0  mb-20">
            {searchResults && searchResults?.length > 0 ? (
              searchResults?.map((car: TCar) => (
                <SearchedCar key={car?._id} car={car} />
              ))
            ) : (
              <h2 className="text-center ms-16">
                No Car Found!!! Available Car will be Appear here!! Search A
                Available Car!!
              </h2>
            )}
          </div>

          <div className="lg:w-[40%] w-full">
            <BookingForm />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="ms-2 mt-28 mb-20 ">
      <h4 className="lg:pb-0 pb-3 text-center">
        <span className="primary-color lg:text-[40px] text-2xl font-bold text-center">
          {" "}
          Reserve Your Perfect Car Now!!
        </span>
        <p className=" font-extralight mt-2">
          Discover our wide range of vehicles to suit your travel needs!
        </p>
      </h4>

      {selectedCar ? (
        <>
          {" "}
          <div className="lg:flex justify-between mt-16 mb-20 w-full  mx-auto px-0 lg:px-5 ">
            <div className="lg:w-[60%]  mb-16 lg:mb-0">
              <div className="card card-compact bg-base-100 max-w-[550px] shadow-md rounded-xl  pb-10 mx-auto">
                <div className="bg-base-200 w-full h-[250px] rounded-md flex justify-center items-center">
                  <img
                    src={selectedCar?.image}
                    alt="Album"
                    className="lg:w-[50%] h-full"
                  />
                </div>
                <div className=" mt-6  mx-10">
                  <div className="flex  justify-between lg:text-xl">
                    <div>
                      <div className="flex gap-2">
                        {" "}
                        <span className="font-semibold">Model:</span>
                        <p className=" font-light">{selectedCar?.model}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Car Type:</span>
                        <p className=" font-light">{selectedCar?.carType}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Availability:</span>
                        <p className="font-light  uppercase">
                          {selectedCar?.status}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex ga-2">
                        <span className="font-semibold">Color:</span>
                        <p className=" font-light">{selectedCar?.color}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold">Year:</span>
                        <p className=" font-light">{selectedCar?.year}</p>
                      </div>
                    </div>
                  </div>

                  <h4 className=" font-bold  mt-2  lg:text-4xl text-lg uppercase">
                    {selectedCar?.name}
                  </h4>
                  <div className="flex gap-x-2 text-xl">
                    <span className="font-semibold">Price Per Hour:</span>
                    <p className=" font-light">${selectedCar?.pricePerHour}</p>
                  </div>
                  <div className=" flex justify-between items-center gap-5">
                    <div className="flex-grow place-items-center">
                      <h4 className="  ms-2 font-bold text-xl lg:text-xl mb-2">
                        Features
                      </h4>

                      <ul className="list-decimal space-y-2 text-xl list-inside ms-3 ">
                        {selectedCar?.features.map(
                          (feature: string, index: Key | null | undefined) => (
                            <li key={index} className="text-gray-700">
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {selectedCar.chosenAdditionalFeatures ? (
                      <>
                        <div className="  mb-16 ">
                          <h4 className="font-bold text-lg lg:text-xl mt-4 ">
                            {" "}
                            Choosen Additional Features
                          </h4>

                          {selectedCar?.chosenAdditionalFeatures?.map(
                            (AdditionalFeature: string) => (
                              <div className="flex items-center  ms-10">
                                <input
                                  checked
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
                            )
                          )}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] w-full">
              <BookingForm />
            </div>
          </div>
        </>
      ) : (
        <>No Car is Selected</>
      )}
    </div>
  );
};

export default Booking;
