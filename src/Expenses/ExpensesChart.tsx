import Chart from "../Chart/Chart";
import { FormDataType } from "../Interfaces&Types/FormData";

type ExpenseChartProp = {
  dataPoints: FormDataType[];
};

const ExpensesChart = ({ dataPoints }: ExpenseChartProp) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  dataPoints.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartData} />;
};
export default ExpensesChart;
