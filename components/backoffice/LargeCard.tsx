// LargeCard.tsx
import { Layers } from 'lucide-react';

interface DataProps {
  period: string;
  sales: number;
  color: string;
}

const LargeCard: React.FC<{ data: DataProps }> = ({ data }) => {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}
    >
      <Layers />
      <h4>{data.period}</h4>
      <h2 className="text-3xl">UGX.{data.sales}</h2>
    </div>
  );
};

export default LargeCard;
