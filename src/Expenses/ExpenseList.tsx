import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-expense">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          person={expense.person}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
