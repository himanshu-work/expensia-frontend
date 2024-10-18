import React from "react";
import Chart from "react-apexcharts";

function Donut({ income, expense, investment }) {
  const donutColors = ["#9376E0", "#FF4B91", "#FCE22A"]; // Customize colors

  const donutOptions = {
    labels: ["Income", "Expense", "Investment"],
    dataLabels: {
      enabled: false,
      enabledOnSeries: [0, 1, 2],
    },
    colors: donutColors ?? ["#2196F3", "#FF5252", "#4CAF50"], // Customize colors here
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Adjust the donut size
          labels: {
            show: true,
          },
          total: {
            showAlways: true,
          },
        },
      },
    },
    stroke: {
      color: "#fff", // Border color
      width: 0, // Border width
    },
    tooltip: {
      custom: function ({ series, seriesIndex, w }) {
        console.log(series, seriesIndex);
        const number = Intl.NumberFormat("en-In").format(series[seriesIndex]);
        return `<div class="tooltip-apex">
            ${number} inr
          </div>`;
      },
    },
    theme: {
      mode: "dark", // Use dark mode
      palette: "palette1", // Use a specific dark palette
    },
    chart: {
      background: "#1e1e1e", // Set the background color to black
      borderRadius: 8,
    },
  };

  return (
    <div className="donutChartrounded-lg text-white ">
      <Chart
        type="donut"
        options={donutOptions}
        series={[income, expense, investment]}
        labels={["Income", "Expense", "Investment"]}
        width="400"
        colors={donutColors}
      />
    </div>
  );
}

export default Donut;
