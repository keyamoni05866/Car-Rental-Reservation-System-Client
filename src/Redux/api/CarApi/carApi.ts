import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      providesTags: ["cars"],
    }),
    addCar: builder.mutation({
      query: (body) => ({
        url: "/cars/create-car",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const { useAddCarMutation, useGetCarsQuery } = carApi;
