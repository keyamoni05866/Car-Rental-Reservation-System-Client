import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../../../Redux/api/UserApi/UserApi";
import { TResponse, TUser } from "../../../../../Types";
import { toast } from "sonner";

export type TUpdateUserFormData = {
  name?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  role?: "user" | "admin";
  phone?: string;
  termsConditionAccepted?: boolean;
};

const UpdateUser = () => {
  const { id } = useParams();
  const { data: users } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();
  const user = users?.data?.find((item: TUser) => item._id === id);
  const { register, handleSubmit } = useForm<TUpdateUserFormData>();

  const handleUpdate: SubmitHandler<TUpdateUserFormData> = async (data) => {
    if (data.newPassword && data.oldPassword) {
      if (data.oldPassword === user?.password) {
        const userData = {
          _id: id,
          password: data.newPassword,
          name: data.name,
          email: data.email,
          role: data.role,
          phone: data.phone,
          termsConditionAccepted: data.termsConditionAccepted,
        };
        console.log(userData);
        try {
          const res = (await updateUser(userData)) as TResponse<any>;
          if (res.error) {
            toast.error(res.error?.data?.message);
          } else {
            toast.success(res.data?.message);
          }
        } catch (error) {
          toast.error("Something Went Wrong!!");
        }
      } else {
        toast.error("Password doesn't match");
      }
    } else {
      const userData = {
        _id: id,
        name: data.name,
        email: data.email,
        role: data.role,
        phone: data.phone,
        termsConditionAccepted: data.termsConditionAccepted,
      };
      console.log(userData);
      try {
        const res = (await updateUser(userData)) as TResponse<any>;
        if (res.error) {
          toast.error(res.error?.data?.message);
        } else {
          toast.success(res.data?.message);
        }
      } catch (error) {
        toast.error("Something Went Wrong!!");
      }
    }
  };
  return (
    <div className="lg:mx-[240px] my-[100px]">
      {/* content */}
      <div className="text-lg font-bold divider">Update User </div>
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
            <label className="block text-sm font-medium leading-6 text-gray-900 ">
              Role :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <select
                defaultValue={user?.role}
                className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                {...register("role")}
              >
                <option>user</option>
                <option>admin</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Current Password :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                {...register("oldPassword")}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              New Password :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                {...register("newPassword")}
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
            <a href="/terms" className=" primary-color ms-2 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className=" mt-2 px-auto  pb-2 px-20 pt-1  rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34]  "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
