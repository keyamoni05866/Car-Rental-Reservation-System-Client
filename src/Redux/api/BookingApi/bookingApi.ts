import { TBooked, TResponseRedux } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (params) => ({
        url: "/bookings",
        method: "GET",
        params,
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getUserBookings: builder.query({
      query: (params) => ({
        url: "/bookings/my-bookings",
        method: "GET",
        params,
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    createBooking: builder.mutation({
      query: (body) => ({
        url: "/bookings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["booking"],
    }),

    cancelBookingOrDelete: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetUserBookingsQuery,
  useCancelBookingOrDeleteMutation,
} = bookingApi;
