import { TCar, TResponseRedux } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => ({
        url: "/cars",
        method: "GET",
        params,
      }),
      providesTags: ["cars"],
    }),
    getAvailableCarsForBooking: builder.query({
      query: (params) => ({
        url: "/cars/availableCarsForBooking",
        method: "GET",
        params,
      }),
      providesTags: ["cars"],
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getFeaturedCars: builder.query({
      query: () => ({
        url: "/cars/featuredCars",
        method: "GET",
      }),
      providesTags: ["cars"],
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    carDetails: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
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
    deleteCar: builder.mutation({
      query: (id) => {
        return {
          url: `/cars/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useAddCarMutation,
  useGetCarsQuery,
  useGetFeaturedCarsQuery,
  useGetAvailableCarsForBookingQuery,
  useCarDetailsQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
