import { TCar } from "../../../Types";

const SuggestedCar = ({ car }: { car: TCar }) => {
  return <div>{car.name}</div>;
};

export default SuggestedCar;
