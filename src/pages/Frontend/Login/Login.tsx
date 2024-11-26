import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/LoginRegisterPhotos/login.jpg";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../../Redux/features/auth/authApi";
import { useAppDispatch } from "../../../Redux/hook";
import { toast } from "sonner";
import { TResponse } from "../../../Types";
import { signUser } from "../../../Redux/features/auth/authSlice";
import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormData) => {
    console.log(data);
    const toastId = toast.loading("Sign In", { duration: 1000 });
    try {
      const res = (await loginUser(data).unwrap()) as TResponse<any>;
      toast.success("logged In", { id: toastId, duration: 1000 });
      const userInfo = res?.data?.user;
      const token = res?.data?.token;
      dispatch(signUser({ userInfo, token }));
      reset();
      if (userInfo.role === "admin") {
        navigate(`/${userInfo.role}/dashboard`);
      } else {
        navigate(`/${userInfo.role}/profile-management`);
      }
    } catch (err) {
      toast.error(
        "Something Went Wrong!! Please use valid email or provide correct password",
        { id: toastId, duration: 3000 }
      );
    }
  };

  const handleAdminSetValue = async () => {
    setValue("email", "keya05866@gmail.com");
    setValue("password", "123456");
    toast.success("Demo Admin Credentials autofilled", { duration: 2000 });
  };
  const handleUserSetValue = async () => {
    setValue("email", "user1@gmail.com");
    setValue("password", "123456");
    toast.success("Demo User Credentials autofilled", { duration: 2000 });
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
              <div className="flex justify-end gap-2 mt-3 ">
                <button
                  type="button"
                  onClick={handleUserSetValue}
                  className="px-3 py-1 border border-gray-500 rounded-2xl text-md hover:bg-[#051c34] hover:text-white  "
                >
                  User Credentials
                </button>
                <button
                  type="button"
                  onClick={handleAdminSetValue}
                  className="px-3 py-1 bg-[#155ba7] hover:bg-[#193e68] text-white border rounded-2xl text-md"
                >
                  Admin Credentials
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 ">
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
                <label className="block text-sm font-medium leading-6 ">
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
                  <p className="text-sm ">
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
  );
};

export default Login;
