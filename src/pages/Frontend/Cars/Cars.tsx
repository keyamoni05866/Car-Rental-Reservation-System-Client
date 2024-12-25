import { Link } from "react-router-dom";
import { useGetCarsQuery } from "../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../Types";
import { useState } from "react";
import PaginationComponent from "../../../Component/PaginationComponent";

const Cars = () => {
  const [carType, setCartype] = useState("All");
  const [color, setColor] = useState("All");
  const [features, setFeatures] = useState("All");
  const [priceRange, setPriceRange] = useState<number | "">("");

  const [sortByPrice, setSortByPrice] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetCarsQuery({
    carType,
    color,
    priceRange,
    features,
    sortByPrice,
    page,
    limit: 6,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const {
    result: cars = [],
    totalPages = 0,
    currentPage = 1,
  } = data?.data || {};

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
        <div className=" lg:px-0 px-3  ">
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
          <div className="lg:mt-3  mt-10 card-grid mx-auto   gap-4 ">
            {cars && cars.length > 0 ? (
              cars?.map((car: TCar) => (
                <div
                  key={car._id}
                  className="card card-compact border-[2px] max-w-[350px] rounded-lg overflow-hidden shadow-sm   border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-[#1572d3] mx-auto"
                >
                  <div className="w-full h-[220px]  overflow-hidden relative group">
                    <img
                      src={car?.image}
                      alt={car?.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold  truncate">
                      {car?.name}
                    </h3>

                    <p className="text-sm   mt-1 line-clamp-2">
                      {car?.description.substring(0, 80)}...
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
          <PaginationComponent
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
          {/* <div style={{ marginTop: "20px" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cars;
