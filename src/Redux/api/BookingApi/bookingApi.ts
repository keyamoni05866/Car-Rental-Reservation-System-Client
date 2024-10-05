import { TBooked, TResponseRedux } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getUserBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getUserBookingsAfterCarReturned: builder.query({
      query: (params) => ({
        url: "/bookings/my-bookings-afterReturn",
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
    // approve Bookings
    approveBooking: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/approve-booking/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["booking"],
    }),

    // cancel booking from  user side
    cancelBookingOrDelete: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),
    // cancel booking from admin side
    cancelBookingOrDeleteFromAdminSide: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/cancel-booking/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),

    getAllConfirmBookings: builder.query({
      query: () => ({
        url: "/bookings/confirm-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    bookingHistory: builder.query({
      query: () => ({
        url: "/bookings/user-booking-history",
        method: "GET",
      }),
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TBooked[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    // return Car
    returnCar: builder.mutation({
      query: (body) => {
        return {
          url: "/bookings/return",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["booking"],
    }),

    // payment

    payment: builder.mutation({
      query: (body) => {
        return {
          url: "/bookings/payment",
          method: "POST",
          body,
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
  useCancelBookingOrDeleteFromAdminSideMutation,
  useApproveBookingMutation,
  useGetAllConfirmBookingsQuery,
  useReturnCarMutation,
  useGetUserBookingsAfterCarReturnedQuery,
  usePaymentMutation,
  useBookingHistoryQuery,
} = bookingApi;
