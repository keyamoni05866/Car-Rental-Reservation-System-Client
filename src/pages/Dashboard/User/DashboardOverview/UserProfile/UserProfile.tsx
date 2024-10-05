import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hook";
import {
  currentToken,
  currentUser,
  signUser,
} from "../../../../../Redux/features/auth/authSlice";

import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../../../Redux/api/UserApi/UserApi";
import profile from "../../../../../assets/profilePicture/profile.jpg";
import { TResponse, TUser } from "../../../../../Types";
import { toast } from "sonner";

export type TUpdateUserFormData = {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  termsConditionAccepted?: boolean;
};
const UserProfile = () => {
  const user = useAppSelector(currentUser) as unknown as TUser;
  const { isLoading } = useGetUsersQuery({});
  // console.log(user);
  // const user = users?.data?.find((item: TUser) => item._id === stateUser.email);
  const token = useAppSelector(currentToken);

  console.log(user);
  // const { address, email, name, phone, _id } = user;
  const { register, handleSubmit } = useForm<TUpdateUserFormData>();
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const handleUpdate: SubmitHandler<TUpdateUserFormData> = async (data) => {
    const userFormData = {
      id: user?._id,
      ...data,
    };
    // console.log(userData);
    try {
      const res = (await updateUser(userFormData).unwrap()) as TResponse<any>;

      const userInfo = res?.data;
      console.log(userInfo);
      dispatch(signUser({ userInfo, token }));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Something Went Wrong!!");
    }
  };
  return (
    <div>
      {/* Profile Mangement*/}
      <div className="lg:flex   lg:justify-center lg:gap-7 mb-10">
        {/* user Information */}
        <div className="lg:w-[28%] w-full mt-6">
          <div className="shadow-md pb-2 rounded-3xl lg:h-[230px] border">
            <img
              src={profile}
              alt=""
              className="lg:w-[200px] lg:h-[150px] mx-auto "
            />
            <h4 className="lg:text-2xl font-bold text-center  primary-color">
              {user?.name}
            </h4>
            <h4 className="lg:text-xl  font-semibold text-center">
              {user?.email}
            </h4>
          </div>
          <div className="shadow-md py-4 rounded-xl mt-4 pb-4 border">
            <div className="lg:text-xl font-bold divider">Information</div>

            <div className="ps-5 pe-2  pb-2">
              <h4 className="lg:text-lg ">
                <span className="font-bold"> Name:</span> {user?.name}
              </h4>
              <h4 className="lg:text-lg mt-2  ">
                <span className="font-semibold">Email:</span> {user?.email}
              </h4>
              <h4 className="lg:text-lg  mt-2 ">
                <span className="font-semibold">Phone:</span> {user?.phone}
              </h4>
              <h4 className="lg:text-lg  mt-2 ">
                <span className="font-semibold">Address:</span> {user?.address}
              </h4>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] w-full lg:h-[500px] h-full border mt-6 lg:mx-5 shadow-md rounded-3xl lg:p-10 p-5">
          <div className="text-lg divider font-bold mt-20 ">
            Update Your Profile
          </div>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center   gap-2  mt-3 mb-4">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Name :
                </label>
                <div className="relative  rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("name")}
                    defaultValue={user?.name}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email :
                </label>
                <div className="relative  rounded-md shadow-sm">
                  <input
                    type="email"
                    disabled
                    {...register("email")}
                    defaultValue={user?.email}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number (optional):
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("phone")}
                    defaultValue={user?.phone}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Your Physical Address:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("address")}
                    defaultValue={user?.address}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-3 ms-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...register("termsConditionAccepted")}
                defaultChecked
              />
              <label className="ml-2 block text-sm text-gray-900">
                I agree to the
                <a
                  href="/terms"
                  className=" primary-color ms-2 hover:underline"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div className="w-full mt-3">
              <button
                type="submit"
                className=" mt-2 px-auto  w-full py-2  rounded-2xl font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34]  "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
