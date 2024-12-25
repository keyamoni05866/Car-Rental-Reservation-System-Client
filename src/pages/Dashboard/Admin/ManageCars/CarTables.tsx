import { Link } from "react-router-dom";
import {
  useDeleteCarMutation,
  useGetCarsQuery,
  useUpdateCarMutation,
} from "../../../../Redux/api/CarApi/carApi";
import { TCar, TResponse } from "../../../../Types";
import swal from "sweetalert";
import { toast } from "sonner";
import { useState } from "react";
import PaginationComponent from "../../../../Component/PaginationComponent";

const CarTables = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetCarsQuery({
    page,
    limit: 6,
  });
  const [deleteCar] = useDeleteCarMutation();
  const [updateCar] = useUpdateCarMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  const {
    result: cars = [],
    totalPages = 0,
    currentPage = 1,
  } = data?.data || {};
  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deleteCar(id);
        toast.success(res.data?.message);
      }
    });
  };

  const handleFeatured = async (id: string, isFeatured: boolean) => {
    const data = {
      _id: id,
      isFeatured: isFeatured,
    };
    console.log(id);
    try {
      const res = (await updateCar(data)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <div>
      <table className="table-xs md:table-md lg:table lg:mx-10  ">
        {/* head */}
        <thead className="">
          <tr className="text-sm md:text-base lg:text-lg">
            <th>Image</th>
            <th>Name</th>
            <th>Car Type</th>
            <th>Model</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {cars && cars?.length > 0 ? (
            cars?.map((car: TCar) => (
              <tr key={car._id} className="text-xs md:text-sm lg:text-base">
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask bg-base-300 mask-squircle lg:h-14 lg:w-14 h-10 w-10">
                        <img src={car.image} alt="Product Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{car.name}</span>
                </td>
                <td>{car?.carType}</td>
                <td>{car?.model}</td>

                <td className="lg:flex lg:gap-2 gap-y-3 ">
                  <Link
                    to={`/cars/${car._id}`}
                    className="me-2 btn btn-outline  mb-2  btn-xs lg:btn-sm"
                  >
                    Details
                  </Link>

                  <Link
                    to={`/admin/update/${car._id}`}
                    className="me-2 mb-2 btn btn-xs lg:btn-sm"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn text-white bg-[#ff0000] hover:bg-[#c51313] mb-2 btn-xs lg:btn-sm"
                  >
                    Delete
                  </button>

                  <div
                    onClick={() =>
                      handleFeatured(
                        car._id,
                        car.isFeatured === false ? true : false
                      )
                    }
                  >
                    {car.isFeatured === false ? (
                      <button className="me-2 mb-2 btn btn-xs lg:btn-sm">
                        Feature
                      </button>
                    ) : (
                      <button className="        rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34] btn-xs  lg:btn-sm">
                        Featured
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
      <div className="lg:me-40 lg:mb-10 mb-4">
        <PaginationComponent
          setPage={setPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CarTables;
