export type TBookingForm = {
  _id?: string;
  nidOrPassport: string;
  drivingLicense: string;
  cardNumber: string;
  cardExpirationdate: string;
  cvv: string;
  startTime: string;
};

export type TBooked = {
  _id: string;
  user?: string;
  carId?: string;
  endTime?: string;
  totalCost?: number;
  paymentStatus?: "pending" | "paid";
  isBooked?: "confirmed" | "unconfirmed";
  isReturned?: boolean;
  payment?: TBookingForm;
};
