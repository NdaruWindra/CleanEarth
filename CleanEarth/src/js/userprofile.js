// Import our custom CSS
import "../scss/userprofile.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Organik", "Anorganik", "Residu"],
    datasets: [
      {
        label: "Setoran Sampah",
        backgroundColor: "#609966",
        data: [40, 50, 30, 60],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        labels: {
            font: {
              size: 20
            }
          }
        },
      },
    },
});
