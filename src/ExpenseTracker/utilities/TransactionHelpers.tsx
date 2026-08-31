// utils/transactionHelpers.ts

import { Transaction } from "../feature/Notifications/types/types";
import {  Section } from "../feature/Transactions/types/types";
import Colors from "./Colors";
import { WINDOW_WIDTH } from "./Constants";
import { GlobalStyles } from "./GlobalStyles";

const getLast7Days = () => {
  const today = new Date();

  let data = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));

    return {
      label: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      date,
      income: 0,
      expense: 0,
    };
  });

  return data.reverse()
};

const normalizeDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const isSameDay = (date: Date, compare: Date) =>
  date.getDate() === compare.getDate() &&
  date.getMonth() === compare.getMonth() &&
  date.getFullYear() === compare.getFullYear();

const startOfWeek = (date: Date) => {
 
  const d = new Date(date);
  // const day = d.getDay(); // Sunday = 0
  d.setDate(d.getDate() - 7);
  d.setHours(0, 0, 0, 0);
  return d;
};

const endOfWeek = (date: Date) => {
  // const d = startOfWeek(date);
  // d.setDate(d.getDate() + 6);
  // d.setHours(23, 59, 59, 999);
  let d = date;
  return d;
};

const isBetween = (date: Date, start: Date, end: Date) =>
  date >= start && date <= end;

export const getDailyTransactions = (
  transactions: Transaction[],
  date = new Date()
) => {

  console.log('Get Daily Transactions Called')

  console.log('current utc date',date.toISOString())
  console.log('local date',date.toLocaleString())

  return transactions.filter((transaction) =>
    isSameDay(normalizeDate(new Date(transaction.date!)), normalizeDate(date))
  );
};

export const getWeeklyTransactions = (
  transactions: Transaction[],
  date = new Date()
) => {

 console.log('Get Weekly Transactions Called')
  const start = normalizeDate(startOfWeek(date));
  const end = normalizeDate(endOfWeek(date));


  console.log("start date",start.toISOString())
  console.log("end date",end.toISOString())
  return transactions.filter((transaction) =>
    isBetween(normalizeDate(new Date(transaction.date!)), normalizeDate(start), normalizeDate(end))
  );
};

export const getMonthlyTransactions = (
  transactions: Transaction[],
  date = new Date()
) => {

  console.log('Get Monthly Transactions Called')

  return transactions.filter((transaction) => {
    const d = new Date(transaction.date!);

    return (
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear()
    );
  });
};


export const getIncomeLastWeek = (transactions: Transaction[]) => {
  let exps = getWeeklyTransactions(transactions)
  return exps
    .filter((transaction) => transaction.income)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
}
export const getIncome = (transactions: Transaction[]) =>
  transactions.filter((transaction) => transaction.income);

export const getTransactionsOnly = (transactions: Transaction[]) =>
  transactions.filter((transaction) => !transaction.income);

export const getTotalIncome = (transactions: Transaction[]) =>
  transactions
    .filter((transaction) => transaction.income)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

export const getTotalTransactions = (transactions: Transaction[]) =>
  transactions
    .filter((transaction) => !transaction.income)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

export const getBalance = (transactions: Transaction[]) =>
  getTotalIncome(transactions) - getTotalTransactions(transactions);

export const getCategoryTotals = (transactions: Transaction[]) => {
  const totals: Record<string, number> = {};

  transactions
    .filter((transaction) => !transaction.income)
    .forEach((transaction) => {
      totals[transaction.category] =
        (totals[transaction.category] || 0) + transaction.amount;
    });

  return totals;
};

export type TimeSpan = "week" | "month" | "year" | "all";

export const getSpecificCategoryTotalsInPeriod = (
  transactions: Transaction[],
  // category: string,
  timespan: TimeSpan
) => {
  const now = new Date();

  const start = new Date(now);

  switch (timespan) {
    case "week":
      start.setDate(now.getDate() - 6); // Last 7 days including today
      break;

    case "month":
      start.setMonth(now.getMonth() - 1); // Last month
      break;

    case "year":
      start.setFullYear(now.getFullYear() - 1); // Last 12 months
      break;

    case "all":
      start.setTime(0);
      break;
  }

  const totals: Record<string, number> = {};

  transactions
    .filter((transaction) => {
      if (transaction.income) return false;

      const date = new Date(transaction.date!);

      return date >= start && date <= now;
    })
    .forEach((transaction) => {
      totals[transaction.category] =
        (totals[transaction.category] ?? 0) + transaction.amount;
    });
    
  return totals;
};

export const groupTransactionsByMonth = (
  transactions: Transaction[],
  type: string | null,
  category?: string
): Section[] => {
  const grouped = new Map<string, Transaction[]>();
  let exps = []
  if(type == 'income'){
    exps = getIncome(transactions) 
  }
  else if(type == 'expense'){
    exps = getTransactionsOnly(transactions) 
  }
  else{
    exps = transactions
  }

  if(category!=null){
    exps = transactions.filter((transaction)=>transaction.category == category)
  }

  exps.forEach((transaction) => {
    
    const date = new Date(transaction.date!);

    const month = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    }); // e.g. "January 2025"

    if (!grouped.has(month)) {
      grouped.set(month, []);
    }

    grouped.get(month)!.push(transaction);
  });

  return Array.from(grouped.entries()).map(([title, data],index) => ({
    id: index,
    title,
    data: data.sort(
      (a, b) =>
        new Date(`${b.date} ${b.time}`).getTime() -
        new Date(`${a.date} ${a.time}`).getTime()
    ),
  }));
};


export const generateDailyBarData = (expenses: Transaction[]) => {
  const days = getLast7Days();
  let totalIncome = 0;
  let totalExpense = 0;
  expenses.forEach((transaction) => {
    const transactionDate = new Date(transaction.date!);

    const day = days.find(
      (d) =>
        d.date.getDate() === transactionDate.getDate() &&
        d.date.getMonth() === transactionDate.getMonth() &&
        d.date.getFullYear() === transactionDate.getFullYear()
    );

    if (!day) return;

    if (transaction.income) {
      day.income += transaction.amount;
      totalIncome += transaction.amount
    } else {
      day.expense += transaction.amount;
      totalExpense += transaction.amount;
    }
  });



  let data = days.flatMap((day) => [
    {
      value: Number(day.income.toFixed(2)),
      label: day.label,
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: {
        color: "gray",
        width: (WINDOW_WIDTH - 120) / 9,
        marginHorizontal: -8,
        ...GlobalStyles.textRegular12,
      },
      frontColor: Colors.MainGreen,
    },
    {
      value: Number(day.expense.toFixed(2)),
      frontColor: Colors.OceanBlue,
    },
  ]);

  return { data,totalIncome,totalExpense }
};



export const generateWeeklyBarData = (transactions: Transaction[]) => {
  const now = new Date();

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const weeks = [
    { label: "Week 1", income: 0, expense: 0 },
    { label: "Week 2", income: 0, expense: 0 },
    { label: "Week 3", income: 0, expense: 0 },
    { label: "Week 4", income: 0, expense: 0 },
    // { label: "5th Week", income: 0, expense: 0 },
  ];

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date!);

    // Ignore transactions outside current month
    if (
      date.getMonth() !== currentMonth ||
      date.getFullYear() !== currentYear
    ) {
      return;
    }

    const dayOfMonth = date.getDate();

    // 1-7 => 0, 8-14 => 1, ..., 29-31 => 4
    const weekIndex = Math.min(Math.floor((dayOfMonth - 1) / 7), 3);

    if (transaction.income) {
      weeks[weekIndex].income += transaction.amount;
      totalIncome += transaction.amount;
    } else {
      weeks[weekIndex].expense += transaction.amount;
      totalExpense += transaction.amount;
    }
  });

  const data = weeks.flatMap((week) => [
    {
      value: Number((week.income/1000).toFixed(2)),
      label: week.label,
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: {
        color:'gray',
        width:(WINDOW_WIDTH*0.7)/4, //100,
        marginHorizontal:-(WINDOW_WIDTH*0.7)/4/3, //100,
        ...GlobalStyles.textRegular12,
      },
      frontColor: Colors.MainGreen,
    },
    {
      value: Number((week.expense/1000).toFixed(2)),
      frontColor: Colors.OceanBlue,
    },
  ]);

  return {
    data,
    totalIncome,
    totalExpense,
  };
};


export const generateMonthlyBarData = (transactions: Transaction[]) => {
  const now = new Date();

  // Current month -> 11 months ago
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      label: date.toLocaleString("default", { month: "short" }),
      income: 0,
      expense: 0,
    };
  });

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.date!);

    const month = months.find(
      (m) =>
        m.year === transactionDate.getFullYear() &&
        m.month === transactionDate.getMonth()
    );

    if (!month) return;

    if (transaction.income) {
      month.income += transaction.amount;
      totalIncome += transaction.amount;
    } else {
      month.expense += transaction.amount;
      totalExpense += transaction.amount;
    }
  });

  const data = months.flatMap((month) => [
    {
      value: Number((month.income/1000).toFixed(2)),
      label: month.label,
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: {
        color: "gray",
        width: (WINDOW_WIDTH-120)/10,
        marginHorizontal: -6,
        ...GlobalStyles.textRegular12,
      },
      frontColor: Colors.MainGreen,
    },
    {
      value: Number((month.expense/1000).toFixed(2)),
      frontColor: Colors.OceanBlue,
    },
  ]);

  return {
    data,
    totalIncome,
    totalExpense,
  };
};


export const generateYearlyBarData = (transactions: Transaction[]) => {
  const yearMap = new Map<
    number,
    {
      income: number;
      expense: number;
    }
  >();

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date!);
    const year = date.getFullYear();

    if (!yearMap.has(year)) {
      yearMap.set(year, {
        income: 0,
        expense: 0,
      });
    }

    const data = yearMap.get(year)!;

    if (transaction.income) {
      data.income += transaction.amount;
      totalIncome += transaction.amount;
    } else {
      data.expense += transaction.amount;
      totalExpense += transaction.amount;
    }
  });

  // Sort years from newest to oldest
  const years = [...yearMap.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, values]) => ({
      label: year.toString(),
      ...values,
    }));

  const data = years.flatMap((year) => [
    {
      value: Number((year.income/1000).toFixed(2)),
      label: year.label,
      spacing: 3,
      labelWidth: 40,
      labelTextStyle: {
        color: "gray",
        // width: (WINDOW_WIDTH - 120) / Math.max(years.length, 1),
        // marginHorizontal: -6,
        width:(WINDOW_WIDTH-120)/6,
        marginHorizontal: -10,
        ...GlobalStyles.textRegular12,
      },
      frontColor: Colors.MainGreen,
    },
    {
      value: Number((year.expense/1000).toFixed(2)),
      frontColor: Colors.OceanBlue,
    },
  ]);

  return {
    data,
    totalIncome,
    totalExpense,
  };
};

export const searchTransaction = (
  transactions: Transaction[],
  searchTerm?:string | null,
  category?: string | null,
  date?: Date | null,
  type?: string | null
) => {
  let trans = transactions;

  if (date) {
    trans = getDailyTransactions(trans, date);
  }

  if(searchTerm){
     trans = trans.filter(
      (transaction) => transaction.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category) {
    trans = trans.filter(
      (transaction) => transaction.category === category
    );
  }

  if (type) {
    if(type == 'income'){
      trans = trans.filter(
        (transaction) => transaction.income == true
      );
    }
    else if(type == 'expense'){
      trans = trans.filter(
        (transaction) => transaction.income == false
      );
    }
  }

  return trans;
};

export const getRecentTransactions = (
  transactions: Transaction[],
  count = 10
) =>
  [...transactions]
    .sort(
      (a, b) =>
        new Date(`${b.date} ${b.time}`).getTime() -
        new Date(`${a.date} ${a.time}`).getTime()
    )
    .slice(0, count);