import { ShoppingCart } from 'lucide-react';

// Tipo para o ícone (componente React)
interface DataProps {
  title: string;
  number: number;
  iconBg: string;
  icon: React.ComponentType<any>;
}

export default function SmallCard({ data }: { data: DataProps }) {
  const { title, number, iconBg, icon: Icon } = data; // Icon é agora um componente

  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          <Icon /> {/* Renderizando o ícone passado */}
        </div>
        <div>
          <p>{title}</p> {/* Exibindo o título passado */}
          <h3 className="text-2xl font-bold">{number}</h3>{' '}
          {/* Exibindo o número passado */}
        </div>
      </div>
    </div>
  );
}
