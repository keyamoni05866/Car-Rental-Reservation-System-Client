import { createSlice } from "@reduxjs/toolkit";
import { TBooked, TBookingForm } from "../../../Types";
import { RootState } from "../../store";

type TBooking = {
  id: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
  approve: boolean;
};

type TBookingState = {
  bookings: TBooking[];
  booked: TBooked[];
  returnCar: TBooked[];
  bookingCar: TBookingForm[];
  confirmBooking: any;
  paymentInfo: any;
};

const initialState: TBookingState = {
  bookings: [],
  booked: [],
  returnCar: [],
  bookingCar: [],
  confirmBooking: [],
  paymentInfo: [],
};
export const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    bookingCar: (state, action) => {
      state.bookingCar = action.payload;
    },
    bookingConfirmWithForm: (state, action) => {
      state.confirmBooking = action.payload;
    },
    clearBookingStateAfterConfirm: (state) => {
      state.bookingCar = [];
      state.confirmBooking = [];
    },
  },
});

export const {
  bookingCar,
  bookingConfirmWithForm,
  clearBookingStateAfterConfirm,
} = bookingSlice.actions;

export const useBookedCar = (state: RootState) => state.booking.bookingCar;
export const useBookingConfirm = (state: RootState) =>
  state.booking.confirmBooking;

export default bookingSlice.reducer;
