import "./Expenses.css";
import Card from "../Card-component/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { SetStateAction, useState, useEffect } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { FormDataType } from "../Interfaces&Types/FormData";

type ExpensesProps = {
  items: FormDataType<string>[];
  year: number[];
  person: string[];
};

function Expenses(props: ExpensesProps) {
  let expenses = props.items;

  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [selectedCatogory, setSelectedCategory] = useState<string>("");
  const [clearFilter, setClearFilter] = useState<boolean>(false);

  const [filteredExpense, setFilteredExpense] = useState(expenses);

  useEffect(() => {
    let filteredExpenses = expenses;

    if (selectedYear !== "") {
      filteredExpenses = filteredExpenses.filter(
        (expense) => +selectedYear === new Date(expense.date).getFullYear()
      );
    }
    if (selectedPerson !== "") {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.person === selectedPerson
      );
    }
    if (selectedCatogory !== "") {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.category === selectedCatogory
      );
    }
    setFilteredExpense(filteredExpenses);
  }, [selectedYear, selectedPerson, selectedCatogory, expenses]);

  const yearChangehandler = function (selectedValue: SetStateAction<string>) {
    setSelectedYear(selectedValue);
  };

  const personChangehandler = function (selectedValue: SetStateAction<string>) {
    setSelectedPerson(selectedValue);
  };

  const categoryChangehandler = function (
    selectedValue: SetStateAction<string>
  ) {
    setSelectedCategory(selectedValue);
  };

  const clearFilterHandler = () => {
    setSelectedCategory("");
    setSelectedPerson("");
    setSelectedYear("");
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeYear={yearChangehandler}
        onChangePerson={personChangehandler}
        onChangeCategory={categoryChangehandler}
        year={props.year}
        persons={props.person}
        value={{ selectedYear, selectedCatogory, selectedPerson }}
        clearFilter={clearFilterHandler}
      />
      <ExpensesChart dataPoints={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}
export default Expenses;
