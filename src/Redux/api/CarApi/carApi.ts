import { TCar, TResponseRedux, TUpdateCar } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      providesTags: ["cars"],
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    addCar: builder.mutation<TUpdateCar, Partial<TUpdateCar>>({
      query: (body) => ({
        url: "/cars/create-car",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cars"],
    }),

    updateCar: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/cars/update-car/${data._id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["cars"],
    }),
  }),
});

export const { useAddCarMutation, useGetCarsQuery, useUpdateCarMutation } =
  carApi;
