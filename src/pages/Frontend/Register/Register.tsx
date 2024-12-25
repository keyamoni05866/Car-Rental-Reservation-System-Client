import { Link, useNavigate } from "react-router-dom";
import car1 from "../../../assets/LoginRegisterPhotos/register.avif";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../../Redux/features/auth/authApi";
import { toast } from "sonner";
import { TResponse } from "../../../Types";
import swal from "sweetalert";

type TSignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "user";
  phone: string;
  termsConditionAccepted: boolean;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TSignUpFormData>();
  const password = watch("password");
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const handleSignUp = async (data: TSignUpFormData) => {
    const toastId = toast.loading("Creating....");
    // console.log(data);

    const signUpUserData = {
      ...data,
      password: data.confirmPassword,
      role: "user",
    };

    try {
      const res = (await registerUser(signUpUserData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
        swal(
          "Registration Completed!",
          "Please Login to Access Dashboard and Booking Page",
          "success"
        );
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <div className="   mt-28 mb-16  p-5 lg:px-16">
      <div className=" min-h-full  rounded-lg lg:p-12  custom-background  mx-auto ">
        <div className="lg:flex  w-full  ">
          <div className=" rounded-s-lg hidden sm:block   w-full  lg:w-[50%]  shadow-2xl">
            <img src={car1} alt="" className="h-full w-full rounded-s-lg " />
          </div>
          <div className="pb-5  rounded-s-none rounded-e-lg lg:w-[50%] w-full p-5  lg:pt-5  lg:px-10   shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <h4 className="primary-color text-3xl font-bold text-center uppercase">
                Sign Up
              </h4>
              <div className="grid grid-cols-1  gap-2  mt-3 mb-4">
                <div className="">
                  <label className="block text-sm font-medium leading-6">
                    Name :
                  </label>
                  <div className="relative  rounded-md shadow-sm">
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Enter Your Name"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Email :
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid Email Address",
                        },
                      })}
                      placeholder="Enter Your Email Address"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Phone Number:
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                      placeholder="Enter Your Phone Number"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Password :
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      })}
                      placeholder="Enter Your Password"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 ">
                    Confirm Password :
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      placeholder="Confirm Your Password"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center mt-3 ms-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  {...register("termsConditionAccepted", {
                    required: "Please Accept Our Terms & Conditions",
                  })}
                />
                <label className="ml-2 block text-sm ">
                  I agree to the
                  <Link
                    to="/terms&conditions"
                    className=" primary-color ms-2 hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>
              {errors.termsConditionAccepted && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.termsConditionAccepted?.message}
                </p>
              )}
              <div className=" flex">
                <button
                  type="submit"
                  className="w-full   mt-5    py-2   rounded-3xl font-medium primary-bg-color text-lg uppercase text-white hover:bg-[#051c34] "
                >
                  Sign Up
                </button>
              </div>

              <div className="flex justify-center items-center mt-2">
                <label className="label">
                  <p className="text-sm ">
                    Already have an account ?{" "}
                    <Link
                      to="/login"
                      className=" primary-color font-semibold ps-1"
                    >
                      Sign In
                    </Link>
                  </p>
                </label>
              </div>
            </form>
            <div className="mt-2 text-center text-md text-gray-500">
              <Link to="/privacy&policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              &bull;{" "}
              <Link to="/terms&conditions" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
