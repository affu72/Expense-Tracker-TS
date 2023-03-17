import { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { FormDataType, ExpenseCategory } from "./Interfaces&Types/FormData";
import "./App.css";
const expenses: FormDataType<string>[] = [
  {
    title: "Shopping",
    amount: 153,
    date: new Date("2021-02-10T06:16:35.876Z"),
    person: "Mary",
    id: "4k4ty4zry6jm4w6",
    category: ExpenseCategory.Groceries,
  },
  {
    title: "Groceries",
    amount: 971,
    date: new Date("2022-09-13T13:23:59.266Z"),
    person: "Tom",
    id: "um8p3yq3vqkuxn3",
    category: ExpenseCategory.Groceries,
  },
  {
    title: "Dinner",
    amount: 719,
    date: new Date("2022-03-28T00:03:10.331Z"),
    person: "John",
    id: "x19x66e3nb8q3cu",
    category: ExpenseCategory.Rent,
  },
  {
    title: "Movie",
    amount: 783,
    date: new Date("2021-10-06T11:24:35.644Z"),
    person: "Bob",
    id: "m95m9xg6n73m4k4",
    category: ExpenseCategory.Groceries,
  },
  {
    title: "Gas",
    amount: 426,
    date: new Date("2021-05-25T14:25:22.005Z"),
    person: "Alice",
    id: "d8q3h3n9x9x6x1z",
    category: ExpenseCategory.Transportation,
  },
];
function App() {
  const [expense, setExpense] = useState(expenses);

  const expenseDataHandler = function (formData: FormDataType<string>) {
    setExpense((prev) => [formData, ...prev]);
  };

  const yearArray = expense.map((exp) => new Date(exp.date).getFullYear());

  return (
    <div className="app-header">
      <h1>Expense Tracker</h1>
      <NewExpense onGettingData={expenseDataHandler} />
      <Expenses items={expense} year={new Set(yearArray)} />
    </div>
  );
}

export default App;
