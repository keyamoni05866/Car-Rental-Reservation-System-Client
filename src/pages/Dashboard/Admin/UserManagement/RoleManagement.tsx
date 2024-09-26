import { toast } from "sonner";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../../Redux/api/UserApi/UserApi";
import { TResponse, TUser } from "../../../../Types";

const RoleManagement = () => {
  const { data: users } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();

  const handleRoleChange = async (id: string, role: "admin" | "user") => {
    const data = {
      id: id,
      role: role,
    };
    try {
      const res = (await updateUser(data)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message);
      } else {
        toast.success(res.data?.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong!!");
    }
  };

  const handleActivate = async (id: string) => {
    const data = {
      id: id,
      status: "active",
    };
    updateUser(data);
  };
  const handleBlock = async (id: string) => {
    const data = {
      id: id,
      status: "blocked",
    };
    updateUser(data);
  };

  return (
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
                <div>
                  {user.status === "active" ? (
                    <button
                      onClick={() => handleBlock(user._id)}
                      className="me-2 btn bg-[#ff0000] hover:bg-[#c51313] text-white  mb-2  btn-xs lg:btn-sm"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActivate(user._id)}
                      className="me-2 btn btn-success text-white  mb-2  btn-xs lg:btn-sm"
                    >
                      Activate
                    </button>
                  )}
                </div>

                <div
                  onClick={() =>
                    handleRoleChange(
                      user._id,
                      user.role === "admin" ? "user" : "admin"
                    )
                  }
                >
                  {user.role === "admin" ? (
                    <button className="me-2 mb-2 btn btn-xs lg:btn-sm">
                      Demote To User
                    </button>
                  ) : (
                    <button className="me-2 mb-2 btn btn-xs lg:btn-sm">
                      Promote To Admin
                    </button>
                  )}
                </div>
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
  );
};

export default RoleManagement;
