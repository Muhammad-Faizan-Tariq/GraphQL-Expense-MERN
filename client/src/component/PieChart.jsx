import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Investment", "Saving", "Expense"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: [
          "#FF6384", // Color for Investment
          "#36A2EB", // Color for Saving
          "#FFCE56", // Color for Expense
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
