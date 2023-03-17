import { ChangeEvent } from "react";

import "./ExpenseFilter.css";

type ExpeneFilterProp = {
  onChangeFilter: (selectedValue: string) => void;
  year: Set<number>;
};

const ExpenseFilter = (props: ExpeneFilterProp) => {
  const dropDwonChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };

  const year = [...props.year].sort((a, b) => b - a);

  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select onChange={dropDwonChangeHandler}>
        <option value={"select year"}>select year</option>
        {year.map((optionYear) => (
          <option key={optionYear} value={optionYear}>
            {optionYear}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
