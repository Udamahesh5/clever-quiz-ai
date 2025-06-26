
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

const StatsCard = ({ label, value, icon: Icon }: StatsCardProps) => {
  return (
    <div className="text-center group">
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl group-hover:from-blue-100 group-hover:to-green-100 transition-all duration-300">
        <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;
