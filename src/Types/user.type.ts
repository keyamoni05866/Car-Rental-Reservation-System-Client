export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  phone?: string;
  address?: string;
  termsConditionAccepted: boolean;
  status: "active" | "blocked";
};
