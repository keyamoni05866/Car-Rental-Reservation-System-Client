export type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  model: string;
  year: string;
  isElectric: "Yes" | "No";
  carType?: ["SUV" | "Sedan" | "Hatchback" | "Convertible" | "Coupe"];
  status: "available" | "unavailable";
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};
export type TUpdateCar = {
  _id?: string;
  name?: string;
  description?: string;
  color?: string;
  image?: string;
  model?: string;
  year?: string;
  isElectric?: "Yes" | "No";
  carType?: ["SUV" | "Sedan" | "Hatchback" | "Convertible" | "Coupe"];
  status?: "available" | "unavailable";
  features?: string[];
  pricePerHour?: number;
  isDeleted?: boolean;
};
