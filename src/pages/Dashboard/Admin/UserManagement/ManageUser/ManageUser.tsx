import { useForm } from "react-hook-form";
import {
  useCreateUserMutation,
  useDeleteAUserMutation,
  useGetUsersQuery,
} from "../../../../../Redux/api/UserApi/UserApi";
import { TResponse, TUser } from "../../../../../Types";

import { toast } from "sonner";
import { Link } from "react-router-dom";

type TAddUserFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "user" | "admin";
  phone?: string;
  termsConditionAccepted: boolean;
};

const ManageUser = () => {
  const { data: users } = useGetUsersQuery({});
  const [createUser] = useCreateUserMutation();
  const [deleteAUser] = useDeleteAUserMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TAddUserFormData>();
  const password = watch("password");

  const onSubmit = async (data: TAddUserFormData) => {
    const toastId = toast.loading("Creating....");
    // console.log(data);

    const UserData = {
      ...data,
      password: data.confirmPassword,
    };

    try {
      const res = (await createUser(UserData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
        reset();
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }
  };

  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deleteAUser(id);
        toast.success(res.data?.message);
      }
    });
  };
  return (
    <>
      <div className="lg:mx-10 ">
        <div className=" flex justify-end">
          <label
            htmlFor="my_modal"
            className="flex items-center gap-1  mt-2 px-auto  pb-2 px-3 pt-1  rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34] uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Create New User
          </label>
        </div>

        <input type="checkbox" id="my_modal" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box max-w-2xl">
            {/* close button */}
            <label
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              htmlFor="my_modal"
            >
              ✕
            </label>

            {/* content */}
            <h3 className="text-lg font-bold">Add New User </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-center   gap-2  mt-3 mb-4">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email :
                  </label>
                  <div className="relative  rounded-md shadow-sm">
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number (optional):
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      {...register("phone")}
                      placeholder="Enter Your Phone Number"
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
                      defaultValue={"selected"}
                      className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                      {...register("role")}
                    >
                      <option disabled value={"selected"}>
                        Select Role
                      </option>
                      <option>user</option>
                      <option>admin</option>
                    </select>
                  </div>
                  {errors.role && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.role.message}
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
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
              <div className="flex items-center mt-3 ms-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  {...register("termsConditionAccepted", {
                    required: "Please Accept Our Terms & Conditions",
                  })}
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
              {errors.termsConditionAccepted && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.termsConditionAccepted?.message}
                </p>
              )}
              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className=" mt-2 px-auto  pb-2 px-10 pt-1  rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34]  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="divider lg:mx-10 "></div>

      {/* table */}
      <table className="table-xs md:table-md lg:table lg:mx-10  ">
        {/* head */}
        <thead className="">
          <tr className="text-sm md:text-base lg:text-lg">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {users?.data && users?.data?.length > 0 ? (
            users?.data?.map((user: TUser) => (
              <tr key={user._id} className="text-xs md:text-sm lg:text-base">
                <td>
                  <span>{user.name}</span>
                </td>
                <td>
                  <span>{user.email}</span>
                </td>
                <td>
                  <span>{user.role}</span>
                </td>
                <td>
                  {user.status === "active" ? (
                    <span className="bg-green-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                      {user.status}
                    </span>
                  ) : (
                    <span className="bg-red-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                      {user.status}
                    </span>
                  )}
                </td>

                <td className="flex gap-2">
                  <Link
                    to={`/admin/updateUser/${user._id}`}
                    className="me-2 mb-2 btn btn-xs lg:btn-sm"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="me-2 mb-2 btn bg-[#ff0000] hover:bg-[#c51313] text-white  btn-xs lg:btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-3">
                No Product Found!!! Please Add
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ManageUser;
