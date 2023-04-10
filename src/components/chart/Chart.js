import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
	const lol = props.dataPoints.map(dp => dp.value);
	const totalMax = Math.max(...lol);
	console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
