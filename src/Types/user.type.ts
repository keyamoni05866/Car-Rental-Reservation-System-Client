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
