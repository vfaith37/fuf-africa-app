import React from 'react';
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
    },
  ],
};

const InfoSection: React.FC = () => {
  return (
    <section className="container mx-auto my-16 p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold">How We Spend Your Donations and Where It Goes</h2>
      </div>
      <div>
        <Doughnut data={data} />
      </div>
    </section>
  );
}

export default InfoSection;
