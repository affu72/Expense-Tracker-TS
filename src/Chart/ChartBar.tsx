import "./ChartBar.css";

type ChartBarProps = {
  value: number;
  maxValue: number;
  label: string;
};
const ChartBar = (props: ChartBarProps) => {
  let barFilledHeight = "0%";

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
