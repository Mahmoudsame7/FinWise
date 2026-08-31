export  type Transaction = {
    id:string
    amount: number;
    category: string;
    name: string;
    income?: boolean;
    date?: string;
    time?: string;
}




export type NotificationType = {
  id: string;
  title: string;
  msg: string;
  transaction?: Transaction;
  type:string
};