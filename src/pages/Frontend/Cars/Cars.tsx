import { Link } from "react-router-dom";
import { useGetCarsQuery } from "../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../Types";
import { useState } from "react";

const Cars = () => {
  const [carType, setCartype] = useState("All");
  const [color, setColor] = useState("All");
  const [features, setFeatures] = useState("All");
  const [priceRange, setPriceRange] = useState<number | "">("");
  const { data: cars } = useGetCarsQuery({
    carType,
    color,
    priceRange,
    features,
  });
  const handleForClear = () => {
    setCartype("All");
    setColor("All");
    setFeatures("All");
    setPriceRange("");
  };

  return (
    <div className="lg:px-20 min-h-screen mb-20">
      <div>
        <div className="lg:w-[80%] flex justify-end gap-2">
          <div className="lg:w-[20%]">
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
          <div className="lg:w-[20%]">
            <select
              className=" select select-bordered w-full max-w-xs"
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
          <div className="lg:w-[20%]">
            <select
              className=" select select-bordered w-full max-w-xs"
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

          <div className="lg:w-[20%]">
            <label>Price Range: {priceRange}</label>
            <input
              type="range"
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
          <button className=" " onClick={handleForClear}>
            Reset
          </button>
        </div>
      </div>
      <div className="mt-5  card-grid   gap-6 ">
        {cars?.data && cars?.data?.length > 0 ? (
          cars?.data?.map((car: TCar) => (
            <div
              key={car._id}
              className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[3px] mx-auto"
            >
              <div className="bg-base-200 w-[360px]  h-[200px] flex justify-center items-center">
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
                    className="custom-btn flex w-full mx-5   items-center justify-center"
                  >
                    Details
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

export default Cars;
