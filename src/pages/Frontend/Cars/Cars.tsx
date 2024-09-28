import { Link } from "react-router-dom";
import { useGetCarsQuery } from "../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../Types";
import { useState } from "react";

const Cars = () => {
  const [carType, setCartype] = useState("All");
  const [color, setColor] = useState("All");
  const [features, setFeatures] = useState("All");
  const [priceRange, setPriceRange] = useState<number | "">("");
  const [sortByPrice, setSortByPrice] = useState<"asc" | "desc">("asc");
  const { data: cars, isLoading } = useGetCarsQuery({
    carType,
    color,
    priceRange,
    features,
    sortByPrice,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleForClear = () => {
    setCartype("All");
    setColor("All");
    setFeatures("All");
    setPriceRange("");
    setSortByPrice("asc");
  };

  return (
    <div className=" min-h-screen mb-20 mt-10 px-3 ">
      <div className="lg:flex justify-between w-full gap-5 ">
        <div className="lg:w-[20%] lg:px-0 px-3 ">
          <div className="flex  justify-between mb-5 mt-5">
            <h4>Filter</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <div className="mb-5">
            <label>Price Range: {priceRange}</label>
            <input
              type="range"
              min={20}
              value={priceRange}
              onChange={(e) =>
                setPriceRange(e.target.value ? Number(e.target.value) : "")
              }
              className="range"
            />
            <div className="flex justify-between">
              <h4>20</h4>
              <h4>100</h4>
            </div>
          </div>
          <div className="mb-3">
            <select
              className=" select select-ghost w-full max-w-xs"
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
          <div className="mb-3">
            <select
              className=" select select-ghost w-full max-w-xs"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="All">Select Color</option>
              <option value="Blue">Blue </option>
              <option value="Red">Red</option>
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
              <option value="White">White</option>
            </select>
          </div>
          <div className="mb-5">
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

          <div className="flex justify-end mt-9 me-3">
            <button
              className=" custom-outline-btn w-[60%] !font-bold "
              onClick={handleForClear}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="lg:ms-6 mt-10 lg:mt-0">
          <div className="lg:flex justify-between">
            <h4 className="lg:pb-0 pb-3">
              <span className="primary-color lg:text-4xl text-2xl font-bold text-center ">
                {" "}
                Choose Your Ideal Car.
              </span>
              <p className=" font-extralight mt-2">
                Discover our wide range of vehicles to suit your travel needs!
              </p>
            </h4>

            <select
              className="select select-bordered w-full max-w-xs"
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value as "asc" | "desc")}
            >
              <option value="asc">Price Per Hour: Low to High</option>
              <option value="desc">Price Per Hour: High to Low</option>
            </select>
          </div>
          <div className="lg:mt-3  mt-10 card-grid mx-auto   gap-4 lg:w-[80%]">
            {cars?.data && cars?.data?.length > 0 ? (
              cars?.data?.map((car: TCar) => (
                <div
                  key={car._id}
                  className="card card-compact bg-base-100 max-w-[320px] shadow-md rounded-[3px] mx-auto"
                >
                  <div className="bg-base-200 w-[320px]  h-[200px] flex justify-center items-center">
                    <img
                      src={car.image}
                      alt="Product Picture"
                      className=" w-full h-full "
                    />
                  </div>
                  <div className=" my-2 ">
                    <div className="mx-7">
                      <h3 className="card-title">{car?.name}</h3>
                      <p className="text-md">
                        {car?.description.substring(0, 100)}...
                        <Link
                          to={`/cars/${car._id}`}
                          className="primary-color hover:underline"
                        >
                          see more
                        </Link>
                      </p>
                      <div className="divider mb-0 mt-0"></div>
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
      </div>
    </div>
  );
};

export default Cars;
