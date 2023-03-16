import { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { FormDataType } from "./Interfaces&Types/FormData";
import "./App.css";

const expenses: FormDataType[] = [];

function App() {
  const [expense, setExpense] = useState(expenses);

  const expenseDataHandler = function (formData: FormDataType) {
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
