export const CategoriesData = [
  { id: 1, name: "Food" },
  { id: 2, name: "Transport" },
  { id: 3, name: "Medicine" },
  { id: 4, name: "Groceries" },
  { id: 5, name: "Rent" },
  { id: 6, name: "Gifts" },
  { id: 7, name: "Savings" },
  { id: 8, name: "Entertainment" },
  { id: 9, name: "Salary" },
];

const expenseTemplates = [
  { name: "Groceries", category: "Groceries", min: 50, max: 300 },
  { name: "Restaurant", category: "Food", min: 40, max: 250 },
  { name: "Coffee", category: "Food", min: 15, max: 60 },
  { name: "Taxi", category: "Transport", min: 20, max: 120 },
  { name: "Fuel", category: "Transport", min: 100, max: 500 },
  { name: "Medicine", category: "Medicine", min: 50, max: 300 },
  { name: "Cinema", category: "Entertainment", min: 40, max: 120 },
  { name: "Netflix", category: "Entertainment", min: 120, max: 120 },
  { name: "Gifts", category: "Gifts", min: 80, max: 600 },
  { name: "Savings", category: "Savings", min: 500, max: 2000 },
];

function randomAmount(min: number, max: number) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

function randomTime() {
  const hour = Math.floor(Math.random() * 14) + 8; // 8AM - 9PM
  const minute = Math.floor(Math.random() * 60);

  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
}

export const GenerateYearExpenses = (() => {
  const expenses = [];
  let id = 1;

  const start = new Date("2026-08-01");
  const end = new Date();

  for (
    let date = new Date(start);
    date <= end;
    date.setDate(date.getDate() + 1)
  ) {
    const current = new Date(date);

    // Salary every month (1st)
    if (current.getDate() === 1) {
      expenses.push({
        id: `${id++}`,
        name: "Salary",
        category: "Salary",
        amount: 4000,
        income: true,
        date: current.toISOString().split("T")[0],
        time: "09:00",
      });
    }

    // Rent every month (5th)
    if (current.getDate() === 5) {
      expenses.push({
        id: `${id++}`,
        name: "Rent",
        category: "Rent",
        amount: 1000,
        income: false,
        date: current.toISOString().split("T")[0],
        time: "10:00",
      });
    }

    // 0-3 random expenses daily
    const dailyExpenses = Math.floor(Math.random() * 2 + 1);

    for (let i = 0; i < dailyExpenses; i++) {
      const template =
        expenseTemplates[
          Math.floor(Math.random() * expenseTemplates.length)
        ];

      expenses.push({
        id: `${id++}`,
        name: template.name,
        category: template.category,
        amount: randomAmount(template.min, template.max),
        income: false,
        date: current.toISOString().split("T")[0],
        time: randomTime(),
      });
    }
  }

  return expenses.sort((a, b) =>
    `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`)
  );
})();