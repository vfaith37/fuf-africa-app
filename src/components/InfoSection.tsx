import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Education', 'Healthcare', 'Infrastructure', 'Other'],
  datasets: [
    {
      label: 'Donation Distribution',
      data: [30, 20, 25, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: 'transparent', // This removes the white border
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,  // Disable the default legend
    },
    tooltip: {
      enabled: true,
    },
  },
};

const InfoSection: React.FC = () => {
  useEffect(() => {
    const chart = ChartJS.getChart('doughnut-chart'); // Ensure the correct chart is referenced
    const legendContainer = document.getElementById('custom-legend');
    
    if (legendContainer && chart?.options?.plugins?.legend?.labels?.generateLabels) {
      const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0); // Calculate the total value of the dataset
      const legendItems = chart.options.plugins.legend.labels.generateLabels(chart);
      
      // Clear previous legend items
      legendContainer.innerHTML = '';
      
      legendItems.forEach((item, index) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'flex items-center mb-2';

        const colorBox = document.createElement('span');
        colorBox.style.backgroundColor = item.fillStyle || ''; // Fallback to an empty string if fillStyle is undefined
        colorBox.className = 'inline-block w-4 h-4 mr-2';

        // Calculate percentage
        const percentage = ((data.datasets[0].data[index] / total) * 100).toFixed(2);

        const text = document.createElement('p');
        text.className = 'text-sm';
        text.innerText = `${percentage}% on ${item.text}`;

        legendItem.appendChild(colorBox);
        legendItem.appendChild(text);
        legendContainer.appendChild(legendItem);
      });

      // Apply grid layout with 3 columns to the legend container
      legendContainer.style.display = 'grid';
      legendContainer.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))'; 
      legendContainer.style.gap = '10px'; // Adjust the gap between items as needed
    }
  }, []);
  
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How we spend your donations and where it goes
          </h2>
          <p className="text-sm md:text-base mb-8">
            We understand what you entrust to us, so we strive to clearly inform you where your donations go and what plan it has supported.
          </p>
          {/* Custom Legend */}
          <div id="custom-legend" className="space-y-2"></div>
        </div>
        {/* Doughnut Chart */}
        <div className="flex items-center justify-center">
          <Doughnut id="doughnut-chart" data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
