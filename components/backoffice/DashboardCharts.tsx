'use client';

import BestSellingProductsChart from '@/components/backoffice/BestSellingProductsChart';
import WeeklySalesChart from '@/components/backoffice/WeeklySalesChart';
export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  );
}
