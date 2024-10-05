import { SubmitHandler, useForm } from "react-hook-form";
import { TCar, TResponse } from "../../../../Types";
import { useAddCarMutation } from "../../../../Redux/api/CarApi/carApi";
import { toast } from "sonner";
const img_hosting_token = import.meta.env.VITE_image_upload_token;
// console.log(img_hosting_token);
const CreateCarModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCar>();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const [addCar] = useAddCarMutation();
  // console.log(img_hosting_url);
  const onSubmit: SubmitHandler<TCar> = async (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    // console.log(formData);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgResponse) => {
        const imgURL = imgResponse.data.display_url;
        data.image = imgURL;
        if (typeof data.features === "string") {
          data.features = (data.features as string)
            ?.split(",")
            .map((feature: string) => feature.trim());
        }
        if (typeof data.AdditionalFeatures === "string") {
          data.AdditionalFeatures = (data.AdditionalFeatures as string)
            ?.split(",")
            .map((additionalFeature: string) => additionalFeature.trim());
        }

        data.pricePerHour = Number(data.pricePerHour);

        try {
          const res = (await addCar({ ...data })) as TResponse<any>;
          if (res.error) {
            toast.error(res.error?.data.message, { duration: 3000 });
          }
          toast.success(res.data?.message, { duration: 3000 });
          reset();
        } catch (error) {
          toast.error("Something Went Wrong!!");
        }
      });
  };

  return (
    <div>
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
          Add A Car
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
          <h3 className="text-lg font-bold">Add New Car to Inventory</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 mt-7 mb-2">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Car Name :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Car Name"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Car Image:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="file"
                    {...register("image", { required: "Image is required" })}
                    className="file-input w-full max-w-xs h-[37px] border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 "
                  />
                </div>

                {errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {" "}
                    {errors?.image.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Features:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("features", {
                      required: "Features is required",
                    })}
                    type="text"
                    placeholder="Add Features using comma"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.features && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.features.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Color:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("color", { required: "Color is required" })}
                    type="text"
                    placeholder="Car Color"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.color && (
                  <p className="text-red-500 text-xs mt-1">
                    {" "}
                    {errors?.color.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Car Model:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("model", { required: "Model is required" })}
                    type="text"
                    placeholder="Car Model"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.model && (
                  <p className="text-red-500 text-xs mt-1">
                    {" "}
                    {errors?.model.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Car Year:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("year", { required: "year is required" })}
                    type="text"
                    placeholder="Car Year"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.year && (
                  <p className="text-red-500 text-xs mt-1">
                    {" "}
                    {errors?.year.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Price Per Hour:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("pricePerHour", {
                      required: "price per hour is required",
                    })}
                    type="text"
                    placeholder="Price Per Hour"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.pricePerHour && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.pricePerHour.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                  IsElectric :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <select
                    defaultValue={"selected"}
                    className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    {...register("isElectric", {
                      required: "isElectric is required",
                    })}
                  >
                    <option disabled value={"selected"}>
                      Select Yes Or No
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                {errors.isElectric && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.isElectric.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Car Type :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <select
                    defaultValue={"selected"}
                    className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    {...register("carType", {
                      required: "car type is required",
                    })}
                  >
                    <option disabled value={"selected"}>
                      Select Car Type
                    </option>
                    <option>SUV</option>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                    <option>Convertible</option>
                    <option>Coupe</option>
                  </select>
                  {errors.carType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.carType.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Additional Features:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("AdditionalFeatures", {
                      required: "Additional Features is required",
                    })}
                    type="text"
                    placeholder="Separate with comma"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.AdditionalFeatures && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors?.AdditionalFeatures.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                Description :
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Describe Your Car"
                  {...register("description", {
                    required: "Description is required",
                  })}
                ></textarea>
              </div>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors?.description.message}
                </p>
              )}
            </div>
            <div className="flex justify-end my-3">
              <button
                type="submit"
                className=" mt-2 px-auto  pb-2 px-3 pt-1  rounded-lg font-medium primary-bg-color text-[15px] text-white hover:bg-[#051c34]  "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCarModal;
