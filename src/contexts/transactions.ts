import { create } from "zustand";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;

}
interface TransactionsState{
  transactions: Transaction[],
  
}

const transactionsStore = create((set)=>{
  transactions:[]
})