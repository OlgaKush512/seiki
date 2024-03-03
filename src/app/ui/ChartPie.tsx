import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import { Item } from "./definitions";

interface Props {
  selectedAddress: Item;
}

const ChartPie: FC<Props> = ({ selectedAddress }) => {
  const ages = Object.keys(
    selectedAddress.data.traffic.crossings_in_a_day.age_breakdown
  );
  const values = Object.values(
    selectedAddress.data.traffic.crossings_in_a_day.age_breakdown
  );

  const data = ages.map((el, index) => ({ age: el, value: values[index] }));

  const [chartOptions, setChartOptions] = useState({
    data: [...data],
    series: [{ type: "pie", angleKey: "value", legendItemKey: "age" }],
  });

  return (
    // AgCharsReact component with options passed as prop
    <AgChartsReact options={chartOptions} />
  );
};

export default ChartPie;
