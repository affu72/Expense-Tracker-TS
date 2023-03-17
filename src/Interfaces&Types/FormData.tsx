export enum ExpenseCategory {
  Rent = "Rent",
  Groceries = "Groceries",
  Transportation = "Transportation",
  Other = "Other",
}

export enum FilterBy {
  year = "year",
  person = "person",
  category = "category",
}

export interface FormDataType<T> {
  category: T;
  title: string;
  amount: number;
  date: Date;
  person: string;
  id?: string;
}
