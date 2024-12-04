import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart as ChartJS,
} from 'chart.js';

import { faker } from '@faker-js/faker';

import { Line } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklySalesChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
  ];

  const tabs = [
    {
      title: 'Vendas',
      type: 'sales',
      data: {
        labels,
        datasets: [
          {
            label: 'Vendas',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      },
    },
    {
      title: 'Pedidos',
      type: 'orders',
      data: {
        labels,
        datasets: [
          {
            label: 'Pedidos',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      <div className="p-4">
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={
                    chartToDisplay === tab.type
                      ? 'inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500'
                      : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100'
                  }
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line options={options} data={tab.data} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
