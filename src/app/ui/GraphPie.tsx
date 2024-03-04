"use client";

import React, { FC, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  names: undefined | string[];
  values: undefined | number[];
  label: string;
}

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const GraphPie: FC<Props> = ({ names, values, label }) => {
  const chartRef = useRef<Chart | null>(null);
  const canvasId = `pie-chart-${label}`;

  useEffect(() => {
    if (!names || !values) return;
    const objectData = names.map((el, index) => ({
      age: el,
      value: values[index],
      color: generateRandomColor(),
    }));

    if (chartRef.current) {
      chartRef.current.data.labels = objectData.map((row) => row.age);
      chartRef.current.data.datasets[0].data = objectData.map(
        (row) => row.value
      );
      chartRef.current.data.datasets[0].backgroundColor = objectData.map(
        (row) => row.color
      );
      chartRef.current.data.datasets[0].borderColor = objectData.map(
        (row) => row.color
      );
      chartRef.current.update();
    } else {
      const ctx = document.getElementById(canvasId)!.getContext("2d");
      chartRef.current = new Chart(ctx!, {
        type: "pie",
        data: {
          labels: objectData.map((row) => row.age),
          datasets: [
            {
              label: label,
              data: objectData.map((row) => row.value),
              backgroundColor: objectData.map((row) => row.color),
              borderColor: objectData.map((row) => row.color),
              borderWidth: 1,
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

export default GraphPie;
