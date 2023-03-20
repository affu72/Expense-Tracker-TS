import { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import { FormDataType } from "./Interfaces&Types/FormData";
import "./App.css";
import expensesData from "./ExpenseData";

function App() {
  const [expense, setExpense] = useState(expensesData);

  const expenseDataHandler = function (formData: FormDataType<string>) {
    setExpense((prev) => [formData, ...prev]);
  };

  const yearArray = expense.map((exp) => new Date(exp.date).getFullYear());
  const personArray = expense.map((expense) => expense.person);

  return (
    <div className="app-header">
      <h1>Expense Tracker</h1>
      <NewExpense onGettingData={expenseDataHandler} />
      <Expenses
        items={expense}
        year={[...new Set(yearArray)]}
        person={[...new Set(personArray)]}
      />
    </div>
  );
}

export default App;
