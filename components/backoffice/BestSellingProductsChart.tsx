import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    label: ['Perfume', 'Batom', 'Rímel', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of votos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2',
          'rgba(54,162,235,0.2',
          'rgba(255, 206, 86, 0.2',
          'rgba(75,192, 192, 0.2',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold">Best Selling Charts</h2>
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
