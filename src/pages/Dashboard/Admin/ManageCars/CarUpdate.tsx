import { SubmitHandler, useForm } from "react-hook-form";
import { TCar, TResponse, TUpdateCar } from "../../../../Types";
import { useParams } from "react-router-dom";
import {
  useGetCarsQuery,
  useUpdateCarMutation,
} from "../../../../Redux/api/CarApi/carApi";
import { toast } from "sonner";

const img_hosting_token = import.meta.env.VITE_image_upload_token;
const CarUpdate = () => {
  const { id } = useParams();
  const { data: cars, isLoading } = useGetCarsQuery({});
  const [updateCar] = useUpdateCarMutation();
  const car = cars?.data?.find((item: TCar) => item._id === id);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit } = useForm<TCar>();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );
  }

  const handleUpdate: SubmitHandler<TUpdateCar> = async (data) => {
    // if (data.image) {

    if (data.image && data.image.length > 0) {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (imgResponse) => {
          if (imgResponse.data && imgResponse.data.display_url) {
            const imgURL = imgResponse.data.display_url;
            // console.log(imgURL);

            if (typeof data.features === "string") {
              data.features = (data.features as string)
                ?.split(",")
                .map((feature: string) => feature.trim());
            }
            const toastId = toast.loading("Updating");
            const carData = {
              _id: id,
              name: data.name,
              description: data.description,
              color: data.color,
              model: data.model,
              year: data.year,
              isElectric: data.isElectric,
              carType: data.carType,
              features: data.features,
              pricePerHour: Number(data.pricePerHour),
              image: imgURL,
            };

            try {
              const res = (await updateCar(carData)) as TResponse<any>;
              if (res.error) {
                toast.error(res.error?.data?.message);
              } else {
                toast.success(res.data?.message, { id: toastId });
              }
            } catch (error) {
              toast.error("Something Went Wrong!!");
            }
          }
        });
    } else {
      const toastId = toast.loading("Updating");
      if (typeof data.features === "string") {
        data.features = (data.features as string)
          ?.split(",")
          .map((feature: string) => feature.trim());
      }

      const carData = {
        _id: id,
        name: data.name,
        description: data.description,
        color: data.color,
        model: data.model,
        year: data.year,
        isElectric: data.isElectric,
        carType: data.carType,
        features: data.features,
        pricePerHour: Number(data.pricePerHour),
      };

      try {
        const res = (await updateCar(carData)) as TResponse<any>;
        if (res.error) {
          toast.error(res.error?.data?.message, { id: toastId });
        } else {
          toast.success(res.data?.message, { id: toastId });
        }
      } catch (error) {
        toast.error("Something Went Wrong!!");
      }
    }
  };

  return (
    <div className="lg:mx-[70px]">
      <div className="divider text-lg font-bold lg:my-10">
        Update You Car Inventory
      </div>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 mt-7 mb-2 ">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Car Name :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                defaultValue={car?.name}
                type="text"
                {...register("name")}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Car Image:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="file"
                {...register("image")}
                className="file-input w-full  h-[37px] border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 "
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Features:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                defaultValue={car?.features}
                {...register("features")}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Color:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                defaultValue={car?.color}
                {...register("color")}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Car Model:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                {...register("model")}
                type="text"
                defaultValue={car?.model}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Car Year:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                {...register("year")}
                type="text"
                defaultValue={car?.year}
                placeholder="Car Year"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Price Per Hour:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                {...register("pricePerHour")}
                type="text"
                defaultValue={car?.pricePerHour}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
              IsElectric :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <select
                defaultValue={car?.isElectric}
                className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                {...register("isElectric")}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Car Type :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <select
              defaultValue={car?.carType}
              className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
              {...register("carType")}
            >
              <option>SUV</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Convertible</option>
              <option>Coupe</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
            Description :
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <textarea
              className="textarea textarea-bordered w-full"
              {...register("description")}
              defaultValue={car?.description}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end my-3">
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

export default CarUpdate;
