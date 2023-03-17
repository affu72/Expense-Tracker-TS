import "./Expenses.css";
import Card from "../Card-component/Card";
// import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import { SetStateAction, useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { FormDataType } from "../Interfaces&Types/FormData";

type ExpensesProps = {
  items: FormDataType[];
  year: Set<number>;
};

function Expenses(props: ExpensesProps) {
  const [selectedYear, setSelectedYear] = useState("select year");

  const filterChangehandler = function (selectedValue: SetStateAction<string>) {
    setSelectedYear(selectedValue);
  };

  let filteredExpense = props.items;

  filteredExpense =
    selectedYear !== "select year"
      ? props.items.filter(
          (item) => +selectedYear === new Date(item.date).getFullYear()
        )
      : filteredExpense;

  return (
    <Card className="expenses">
      {/* <ExpenseFilter onChangeFilter={filterChangehandler} year={props.year} /> */}
      <ExpensesChart dataPoints={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}
export default Expenses;
