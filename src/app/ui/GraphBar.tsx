"use client";

import React, { FC, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  names: undefined | string[];
  values: undefined | number[];
  label: string;
}

const GraphBar: FC<Props> = ({ names, values, label }) => {
  const chartRef = useRef<Chart | null>(null);
  const canvasId = `acquisitions-${label}`;

  useEffect(() => {
    if (!names || !values) return;
    const objectData = names.map((el, index) => ({
      age: el,
      value: values[index],
    }));

    if (chartRef.current) {
      chartRef.current.data.labels = objectData.map((row) => row.age);
      chartRef.current.data.datasets[0].data = objectData.map(
        (row) => row.value
      );
      chartRef.current.update();
    } else {
      const ctx = document.getElementById(canvasId)!.getContext("2d");
      chartRef.current = new Chart(ctx!, {
        type: "bar",
        data: {
          labels: objectData.map((row) => row.age),
          datasets: [
            {
              label: label,
              data: objectData.map((row) => row.value),
            },
          ],
        },
      });
    }
  }, [names, values]);

  return (
    <div style={{ width: "400px" }}>
      <canvas id={canvasId}></canvas>
    </div>
  );
};

export default GraphBar;
