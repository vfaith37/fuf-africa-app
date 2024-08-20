import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "child care home",
    "cleanliness program",
    "helping people",
    "excurion",
    "feeding the poor",
  ],
  datasets: [
    {
      label: "Donation Distribution",
      data: [40, 35, 10, 10, 5],
      backgroundColor: ["#BEF3C0", "#AC94F1", "#FFF0CA", "#F9CF64", "#F38FBF"],
      hoverBackgroundColor: [
        "#BEF3C0",
        "#AC94F1",
        "#FFF0CA",
        "#F9CF64",
        "#F38FBF",
      ],
      borderColor: "transparent",
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Disable the default legend
    },
    tooltip: {
      enabled: true,
    },
  },
};

const InfoSection: React.FC = () => {
  useEffect(() => {
    const chart = ChartJS.getChart("doughnut-chart");
    if (chart?.options?.plugins?.legend?.labels?.generateLabels) {
      const legendItems =
        chart.options.plugins.legend.labels.generateLabels(chart);
      const createLegend = (container: HTMLElement | null) => {
        if (container) {
          container.innerHTML = "";
          legendItems.forEach((item, index) => {
            const legendItem = document.createElement("div");
            legendItem.className = "flex items-center mb-2";
            const colorBox = document.createElement("span");
            colorBox.style.backgroundColor = item.fillStyle as string;
            colorBox.className = "inline-block w-4 h-4 mr-2";
            const percentage = (
              (data.datasets[0].data[index] /
                data.datasets[0].data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2);
            const text = document.createElement("p");
            text.className = "text-sm";
            text.innerText = `${percentage}% ${item.text}`;
            legendItem.appendChild(colorBox);
            legendItem.appendChild(text);
            container.appendChild(legendItem);
          });
          container.style.display = "grid";
          container.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
          container.style.gap = "10px";
        }
      };

      // Generate legends for both desktop and mobile views
      createLegend(document.getElementById("desktop-legend"));
      createLegend(document.getElementById("mobile-legend"));

      // Trigger a re-render to apply the Tailwind classes correctly
      chart.update();
    }
  }, []);

  return (
    <section className="bg-black text-white px-4 md:px-28 py-16 flex flex-col font-Roboto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How we spend your donations and where it goes
          </h2>
          <p className="text-sm md:text-base mb-8">
            We understand what you entrust to us, so we strive to clearly inform
            you where your donations go and what plan it has supported.
          </p>
          {/* Custom Legend for Desktop */}
          <div className="hidden md:block">
            <div id="desktop-legend" className="space-y-2"></div>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="items-center hidden md:block">
          <Doughnut id="doughnut-chart" data={data} options={options} />
        </div>
      </div>
      <div className="flex-col self-center h-auto w-96 block md:hidden bg-black">
        <Doughnut id="doughnut-chart" data={data} options={options} />
        {/* Custom Legend for Mobile */}
        <div className="block md:hidden ">
          <div id="mobile-legend" className="mt-4 space-y-2"></div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
