import { Transaction } from "../../Notifications/types/types";



export type Section = {
  id: number;
  title: string;
  data: Transaction[];
};