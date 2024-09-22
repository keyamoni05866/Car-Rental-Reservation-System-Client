import { Link } from "react-router-dom";
import { useGetCarsQuery } from "../../../../Redux/api/CarApi/carApi";
import { TCar } from "../../../../Types";
import CarUpdateModal from "./CarUpdate";
import { useForm } from "react-hook-form";

const CarTables = () => {
  const { data: cars } = useGetCarsQuery({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCar>();
  return (
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

        {cars?.data && cars?.data?.length > 0 ? (
          cars?.data?.map((car: TCar) => (
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

              <td>
                <Link
                  to={`/products/${car._id}`}
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
                  //   onClick={() => handleDelete(product._id)}
                  className="btn text-white bg-[#ff0000] hover:bg-[#c51313] mb-2 btn-xs lg:btn-sm"
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
  );
};

export default CarTables;
