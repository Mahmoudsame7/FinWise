import { create } from "zustand";
import { Transaction } from "../feature/Notifications/types/types";
import { GenerateYearExpenses } from "../utilities/GenerateRandomData";
import { getDailyTransactions, getMonthlyTransactions, getWeeklyTransactions } from "../utilities/TransactionHelpers";
import { CategoriesData } from "../data/CategoriesData";
import { SavingCategoriesData } from "../data/SavingCategoriesData";
import EncryptedStorage from "react-native-encrypted-storage";


interface TransactionStore {
  expenses: Transaction[];
  categories: {id:number,name:string}[]
  savingCategories: {id:number,name:string}[]
  firstTime: boolean;
  user: object | null;
  initialLoad: boolean;
  login: (username:string) => void;
  logout: () => void;
  initializeApp: () => void;
  initialize: () => void;
  regenerate: () => void;
  addNewExpense: (transaction: Transaction)=>void;
  addNewCategory: (cat:{id:number,name:string})=>void;
  addNewSavingCategory: (cat:{id:number,name:string})=>void;
}


export const useExpenseStore = create<TransactionStore>((set,get) => ({
  expenses: [],
  categories: CategoriesData,
  savingCategories: SavingCategoriesData,
  initialLoad: true,
  firstTime: false,
  user: null,
  
  login: async (username) => {
    try{
      await EncryptedStorage.setItem("FIRST_TIME","false")
      await EncryptedStorage.setItem("USER",JSON.stringify({
          "name": username
      }))

      set({
        initialLoad: false,
        firstTime: false,
        user: {
        "name":username
        },
        expenses: GenerateYearExpenses
      })

      
    }catch(exp){
      set({firstTime: false,user: null})
    }
  },


  logout: async () => {
    try{
      await EncryptedStorage.removeItem("USER")

      set({
        user: null,
      })

      
    }catch(exp){
      set({initialLoad: false,firstTime: false,user: null})
    }
  },

  initializeApp: async () => {
      try {
        // await EncryptedStorage.removeItem("FIRST_TIME")
        // await EncryptedStorage.removeItem("USER")
        
        const savedUser = await EncryptedStorage.getItem("USER")
        const firstTimeUsage = await EncryptedStorage.getItem("FIRST_TIME")

        console.log('Saved User', savedUser)
        console.log('First Time', firstTimeUsage)

        if(savedUser == undefined) {
          if(firstTimeUsage == undefined){
            set({initialLoad: false,firstTime: true,user: null})
          }else if(firstTimeUsage == "false"){
            set({initialLoad: false,firstTime: false,user: null})
          }
        }
        else{
          set({initialLoad: false,firstTime: false,user: JSON.parse(savedUser),expenses: GenerateYearExpenses})
        }

       
      }catch(e){
        set({initialLoad: false,firstTime: true,user: null})
      }
  },

  initialize: () =>
    set((state) => {
      if (state.expenses.length) return state;

      return {
        expenses: GenerateYearExpenses,
      };
    }),

  regenerate: () =>
    set({
      expenses: GenerateYearExpenses,
    }),

  addNewExpense: (transaction) =>
  set((state) => {
    const newExpenses = [transaction,...state.expenses];
    const sortedExpenses = newExpenses.sort((a, b) =>
    `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));


    return {
      expenses: sortedExpenses,
    };
  }),

  addNewCategory: (cat:{id:number,name:string}) => 
    set((state)=>{
      const newCats = [cat,...state.categories];
      return {
      categories: newCats,
    };
    }),

  addNewSavingCategory: (cat:{id:number,name:string}) => 
    set((state)=>{
      const newCats = [cat,...state.savingCategories];
      return {
      savingCategories: newCats,
    };
    }),
  
  

}));