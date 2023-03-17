import { ChangeEvent, FormEvent, useState } from "react";
import "./ExpenseForm.css";
import { FormDataType, ExpenseCategory } from "../Interfaces&Types/FormData";

type ExpenseFormProp = {
  onFormSubmit: (data: FormDataType<string>) => void;
  onCancel: () => void;
};

const ExpenseForm = ({ onFormSubmit, onCancel }: ExpenseFormProp) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPerson, setEnteredPerson] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [category, setcategory] = useState("");

  const titleChangeHandler = function (event: ChangeEvent<HTMLInputElement>) {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = function (event: ChangeEvent<HTMLInputElement>) {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = function (event: ChangeEvent<HTMLInputElement>) {
    setEnteredDate(event.target.value);
  };
  const personChangeHandler = function (event: ChangeEvent<HTMLInputElement>) {
    setEnteredPerson(event.target.value.replace(/[0-9,!$%^&*%]/, ""));
  };

  const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setcategory(event.target.value);
  };

  const formHandler = function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onFormSubmit({
      category: category,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      person: enteredPerson,
    });

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredPerson("");
    // onCancel();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            placeholder="Expense Name"
          />
        </div>

        <div className="new-expense__control">
          <label>Category</label>

          <select onChange={categoryHandler} value={category}>
            <option value={ExpenseCategory.Rent}>{ExpenseCategory.Rent}</option>
            <option value={ExpenseCategory.Groceries}>
              {ExpenseCategory.Groceries}
            </option>
            <option value={ExpenseCategory.Transportation}>
              {ExpenseCategory.Transportation}
            </option>
            <option value={ExpenseCategory.Other}>
              {ExpenseCategory.Other}
            </option>
          </select>
        </div>

        <div className="new-expense__control">
          <label>Person</label>
          <input
            required
            type="text"
            onChange={personChangeHandler}
            value={enteredPerson}
            placeholder="Person Name"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
            placeholder="Amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={onCancel} type="button">
          Cancel
        </button>
        <button className="submit-btn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
