import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card-component//Card";
import { FormDataType } from "../Interfaces&Types/FormData";

function ExpenseItem(props: FormDataType<string>) {
  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            {`${props.title.toUpperCase()} by `}
            <span>
              {props.person
                ?.split("")
                .map((char, i) => (i === 0 ? char.toUpperCase() : char))
                .join("")}
            </span>
          </h2>
          <div className="category">{props.category}</div>
          <div className="expense-item__price">&#8377; {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
