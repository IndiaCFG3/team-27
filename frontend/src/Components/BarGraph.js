import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "Population",
      data: [617594, 181045, 153060, 106519, 105162, 95072],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
      borderWidth: 1,
      borderColor: "#777",
    },
  ],
};

function BarGraph() {
  return (
    <div style={{ height: "200px", width: "35vw", margin: "20px" }}>
      <Bar
        data={data}
        options={{
          layout: {
            padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          title: {
            display: "PieChart",
            text: "Testing",
            fontSize: 10,
          },
          legend: {
            display: false,
            labels: { fontColor: "#000", fontSize: 5 },
            position: "right",
          },
          labels: {
            fontSize: 10,
          },
        }}
      />
    </div>
  );
}

export default BarGraph;
