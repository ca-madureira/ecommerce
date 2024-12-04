import LargeCard from './LargeCard';

export default function LargeCards() {
  const orderStats = [
    {
      period: 'Pedidos de hoje',
      sales: 110000,
      color: 'bg-green-600',
    },
    {
      period: 'Pedidos de ontem',
      sales: 11000,
      color: 'bg-blue-600',
    },
    {
      period: 'Este mês',
      sales: 3000,
      color: 'bg-orange-600',
    },
    {
      period: 'Último mês',
      sales: 11000,
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <LargeCard data={item} key={i} />;
      })}
    </div>
  );
}
