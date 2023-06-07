import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function AudioStreamsChart() {
  const [state] = useState({
    series: [
      {
        name: "Total Streams",
        data: [410, 500, 380, 510, 420, 1090, 1000, 800, 950, 700, 850, 750],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [50, 100],
          colorStops: [
            {
              offset: 3.77,
              color: "rgba(120, 62, 253, 0.30)",
              opacity: 1,
            },
            {
              offset: 100,
              color: "rgba(255, 255, 255, 0)",
              opacity: 1,
            },
          ],
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    },
  });

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height={350}
    />
  );
}

export default AudioStreamsChart;
