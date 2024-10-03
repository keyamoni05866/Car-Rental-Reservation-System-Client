import { createSlice } from "@reduxjs/toolkit";
import { TBookingForm } from "../../../Types";
import { RootState } from "../../store";

type TBookingState = {
  bookingCar: TBookingForm[];
  confirmBooking: any;
  paymentInfo: any;
};

const initialState: TBookingState = {
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
