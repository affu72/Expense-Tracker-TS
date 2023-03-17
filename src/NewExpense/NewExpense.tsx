import { useState } from "react";
import { FormDataType } from "../Interfaces&Types/FormData";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

type NewExpenseProp = {
  onGettingData: (formData: FormDataType<string>) => void;
};

const NewExpense = ({ onGettingData }: NewExpenseProp) => {
  const [addNewExpense, setNewExpense] = useState(false);

  const inputHandler = function (formData: FormDataType<string>) {
    const data = {
      ...formData,
      id: Date.now().toString(),
    };
    onGettingData(data);
  };

  const newExpenseClickHandler = function () {
    setNewExpense(true);
  };

  const cancelButtonhandler = function () {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={newExpenseClickHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onFormSubmit={inputHandler}
          onCancel={cancelButtonhandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
