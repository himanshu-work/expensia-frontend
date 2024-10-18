import React, { useState } from "react";
import Chart from "react-apexcharts";

//install : npm install react-apexcharts apexcharts//
function LineGraph() {
  const [product, setProduct] = useState([
    {
      name: "Income",
      data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890],
    },
    {
      name: "Expense",
      data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20],
    },
    {
      name: "Investments",
      data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120],
    },
  ]);

  const [option, setOption] = useState({
    title: { text: "Summary classifieds over months" },
    xaxis: {
      title: { text: "" },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: { text: "Amount in INR" },
    },
    theme: {
      mode: "dark", // Use dark mode
      palette: "palette1", // Use a specific dark palette
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    chart: {
      background: "#1e1e1e", // Set the background color to black
      borderRadius: 8, // Set the border radius
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 0.9,
    //     stops: [0, 100],
    //   },
    // },
  });

  return (
    <div className="area-chart">
      <div className="container-fluid mt-3 mb-3">
        {/* <h2>Line Chart- Using Apexcharts in React</h2> */}
        <Chart
          type="line"
          width={700}
          height={400}
          series={product}
          options={option}
        ></Chart>
      </div>
    </div>
  );
}

export default LineGraph;
