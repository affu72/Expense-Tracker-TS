export enum ExpenseCategory {
  Rent = "Rent",
  Groceries = "Groceries",
  Transportation = "Transportation",
  Other = "Other",
}

export enum FilterBy {
  year = "Year",
  person = "Person",
  category = "Category",
}

export interface FormDataType<T> {
  category: T;
  title: string;
  amount: number;
  date: Date;
  person: string;
  id?: string;
}
