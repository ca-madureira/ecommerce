import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';
import LargeCard from './LargeCard';
import SmallCard from './SmallCard';

export default function SmallCards() {
  const orderStats = [
    {
      title: 'Total de pedidos',
      number: 110000,
      iconBg: 'bg-green-600',
      icon: Loader2,
    },
    {
      title: 'Pedidos pendentes',
      number: 11000,
      iconBg: 'bg-blue-600',
      icon: RefreshCcw,
    },
    {
      title: 'Pedidos entregues',
      number: 3000,
      iconBg: 'bg-orange-600',
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <SmallCard data={item} />;
      })}
    </div>
  );
}
