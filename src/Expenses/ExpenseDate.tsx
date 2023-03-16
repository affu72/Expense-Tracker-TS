import Card from "../Card-component/Card";

import "./ExpenseDate.css";

type ExpenseDateProp = {
  date: Date;
};

function ExpenseDate(props: ExpenseDateProp) {
  const date = new Date(props.date);
  const year = date.toLocaleDateString("en-IN", { year: "numeric" });
  return (
    <Card className="expense-date">
      <div className="expense-date__month">
        {date.toLocaleDateString("en-IN", { month: "long" })}
      </div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">
        {date.toLocaleDateString("en-IN", { day: "2-digit" })}
      </div>
    </Card>
  );
}

export default ExpenseDate;
