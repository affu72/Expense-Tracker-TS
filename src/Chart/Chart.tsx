import ChartBar from "./ChartBar";
import "./Chart.css";

type ChartProp = {
  dataPoints: {
    label: string;
    value: number;
  }[];
};

const Chart = (props: ChartProp) => {
  const dataPointvalues = props.dataPoints.map((dataPoint) => +dataPoint.value);
  const totalmaximum = Math.max(...dataPointvalues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
