import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  bookingConfirmWithForm,
  useBookingConfirm,
} from "../../../Redux/features/booking/bookingSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../Redux/hook";

const BookingForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<any>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCarWithForm: any = useAppSelector(useBookingConfirm);
  const onSubmit: SubmitHandler<any> = async (data) => {
    // console.log(data);

    dispatch(bookingConfirmWithForm({ ...data }));
    navigate("/booking-confirmation");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="primary-color text-3xl font-bold text-center uppercase">
        Booking Form
      </h4>
      <div className="grid grid-cols-1  gap-2  mt-3 mb-4">
        <div className="">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            NID/Passport :
          </label>
          <div className="relative  rounded-md shadow-sm">
            <input
              type="text"
              {...register("nidOrPassport", { required: "required" })}
              placeholder="Enter Your NID/Passport Number"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.nidOrPassport && (
            <p className="mt-2 text-sm text-red-600">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Driving License :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              {...register("drivingLicense", { required: "required" })}
              placeholder="Driving License"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.drivingLicense && (
            <p className="mt-2 text-sm text-red-600">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Card Number:
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              {...register("cardNumber", { required: "required" })}
              placeholder="Enter Your Card Number"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.cardNumber && (
            <p className="mt-2 text-sm text-red-600">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Expiration Date :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="month"
              {...register("cardExpirationdate", { required: "required" })}
              placeholder="Enter Your Password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.cardExpirationdate && (
            <p className="mt-2 text-sm text-red-600">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Cvv :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              {...register("cvv", { required: "required" })}
              placeholder="Enter Your cvv"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.cvv && <p className="mt-2 text-sm text-red-600">Required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Booking Start Date & Time :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="datetime-local"
              {...register("startTime", { required: "required" })}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          {errors.cvv && <p className="mt-2 text-sm text-red-600">Required</p>}
        </div>
      </div>

      <div className=" flex">
        {selectedCarWithForm.length !== 0 ? (
          <>
            <div className=" w-full mt-5 text-lg font-semibold">
              <h4 className="text-center">
                You Have Already Filled Your Information
              </h4>
              <span className="text-center  ms-5">
                {" "}
                Now Please Go to Confirm Page for
                <Link
                  to="/booking-confirmation"
                  className="primary-color ms-1 hover:underline"
                >
                  {" "}
                  Booking Confirmation
                </Link>
              </span>
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              type="submit"
              className="w-full   mt-5    py-2   rounded-3xl font-medium primary-bg-color text-lg uppercase text-white hover:bg-[#051c34] "
            >
              Submit
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
