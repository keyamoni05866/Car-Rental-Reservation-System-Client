import { Link, useNavigate } from "react-router-dom";
import { TCar } from "../../../Types";

import { useDispatch } from "react-redux";
import { bookingCar } from "../../../Redux/features/booking/bookingSlice";

const SearchedCar = ({ car }: { car: TCar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBooking2 = () => {
    const updatedCar = {
      ...car,
    };
    dispatch(bookingCar(updatedCar));
    navigate("/booking");
  };

  return (
    <div className="card card-compact bg-base-100 max-w-[360px] h-[450px] shadow-md rounded-[3px] mx-auto ">
      <div className="bg-base-200 w-[360px]  h-[200px]  flex justify-center items-center">
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
              <h4 className="font-semibold text-lg "> ${car?.pricePerHour}</h4>
              <h4 className="text-lg ms-1">/hour</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="card-actions w-full mt-4 mb-4 items-center justify-center">
        <button onClick={handleAddBooking2} className="custom-btn w-full mx-5">
          {" "}
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchedCar;
