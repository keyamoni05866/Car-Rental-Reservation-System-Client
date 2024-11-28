import { TCar } from "./carType";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  phone?: string;
  address?: string;
  oldPassword?: string;
  newPassword?: string;
  termsConditionAccepted: boolean;
  status: "active" | "blocked";
};

export type TComment = {
  _id: string;
  user: TUser;
  car: TCar;
  rating: number;
  comment: string;
  createdAt: string;
};
