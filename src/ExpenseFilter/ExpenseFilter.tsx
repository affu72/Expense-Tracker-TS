import { ChangeEvent } from "react";
import { FilterBy, ExpenseCategory } from "../Interfaces&Types/FormData";
import "./ExpenseFilter.css";
import { FormDataType } from "../Interfaces&Types/FormData";

type ExpeneFilterProp = {
  onChangeYear: (selectedValue: string) => void;
  onChangePerson: (selectedValue: string) => void;
  onChangeCategory: (selectedValue: string) => void;
  value: {
    selectedYear: string;
    selectedPerson: string;
    selectedCatogory: string;
  };
  year: number[];
  persons: string[];
};

const ExpenseFilter = (props: ExpeneFilterProp) => {
  const yearChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeYear(event.target.value);
  };

  const personChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangePerson(event.target.value);
  };

  const categoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeCategory(event.target.value);
  };

  const year = props.year.sort((a, b) => b - a);

  const catogryArray = (
    Object.keys(ExpenseCategory) as Array<keyof typeof ExpenseCategory>
  ).map((key) => {
    return key;
  });

  return (
    <div className="expenses-filter">
      <label>Filter By</label>

      <select onChange={yearChangeHandler} value={props.value.selectedYear}>
        <option value="">{`Select ${FilterBy.year}`} </option>
        {year.map((optionYear, i) => (
          <option key={optionYear} value={optionYear}>
            {optionYear}
          </option>
        ))}
      </select>

      <select onChange={personChangeHandler} value={props.value.selectedPerson}>
        <option value="">{`Select ${FilterBy.person}`}</option>
        {props.persons.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>

      <select
        onChange={categoryChangeHandler}
        value={props.value.selectedCatogory}
      >
        <option value="">{`Select ${FilterBy.category}`}</option>
        {catogryArray.map((optionYear) => (
          <option key={optionYear} value={optionYear}>
            {optionYear}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
