import { useDispatch } from "react-redux";
import { clearBookingStateAfterConfirm } from "../../../Redux/features/booking/bookingSlice";

const ReviewBooking = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(clearBookingStateAfterConfirm());
  };

  return (
    <div>
      <h4>
        booking confirmation page{" "}
        <button onClick={handleConfirm}>Confirm</button>{" "}
      </h4>
    </div>
  );
};

export default ReviewBooking;
