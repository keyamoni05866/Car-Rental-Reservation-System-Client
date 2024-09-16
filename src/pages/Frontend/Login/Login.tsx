import { Link } from "react-router-dom";
import loginImage from "../../../assets/LoginRegisterPhotos/login.jpg";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../../Redux/features/auth/authApi";
import { useAppDispatch } from "../../../Redux/hook";
import { toast } from "sonner";
import { TResponse } from "../../../Types";
import { signUser } from "../../../Redux/features/auth/authSlice";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const handleLogin = async (data: LoginFormData) => {
    // console.log(data);
    const toastId = toast.loading("Sign In", { duration: 1000 });
    try {
      const res = (await loginUser(data).unwrap()) as TResponse<any>;
      toast.success("logging In", { id: toastId, duration: 1000 });
      const userInfo = res?.data.user;
      const token = res?.data.token;
      dispatch(signUser({ userInfo, token }));
    } catch (error) {
      toast.error("Something Went Wrong", { id: toastId, duration: 1000 });
    }
  };
  return (
    <div className=" mx-auto lg:max-w-screen-lg p-10 lg:p-0  ">
      <div className="lg:flex  lg:items-center lg:justify-between lg:gap-5 ">
        {/* image */}
        <div className="lg:w-[60%]">
          <img src={loginImage} alt="" className="w-full h-full" />
        </div>
        <div className="lg:w-[40%] mb-20">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="grid grid-cols-1  gap-2   mb-2">
              <h4 className="primary-color text-3xl font-bold text-center uppercase">
                Sign In
              </h4>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
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
            </div>

            <div className=" flex">
              <button
                type="submit"
                className="w-full    mt-5    py-2   rounded-3xl font-medium primary-bg-color text-lg uppercase text-white hover:bg-[#051c34] "
              >
                Sign In
              </button>
            </div>
            <div className="lg:flex lg:justify-between gap-2 me-5 mt-2">
              <div></div>
              <div>
                <label className="label">
                  <p className="text-sm text-black">
                    You don't have an account ?{" "}
                    <Link
                      to="/register"
                      className=" primary-color font-semibold ps-1"
                    >
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
