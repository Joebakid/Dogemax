import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenAllocationChart = () => {
  const data = {
    labels: ["Sale", "Airdrop", "Team", "Reserve"],
    datasets: [
      {
        label: "Token Allocation",
        data: [40, 40, 10, 10], // Corresponding percentages
        backgroundColor: [
          "#A6C8FF", // Light blue for Sale
          "#FFFFFF", // White for Airdrop
          "#4266FF", // Dark blue for Team
          "#9BB7FF", // Medium blue for Reserve
        ],
        borderColor: [
          "#000000", // Border for Sale
          "#000000", // Border for Airdrop
          "#000000", // Border for Team
          "#000000", // Border for Reserve
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#A6C8FF" }}>
        Token Allocation Breakdown
      </h3>
      <Pie data={data} options={options} />
      <p style={{ textAlign: "center", color: "#A6C8FF", marginTop: "10px" }}>
        40% Sale @ $0.0001
      </p>
      <p style={{ textAlign: "center", color: "#A6C8FF", marginTop: "10px" }}>
        1 Billion Total Token Supply
      </p>
    </div>
  );
};

export default TokenAllocationChart;
