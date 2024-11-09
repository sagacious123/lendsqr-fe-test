import { FC } from "react";

interface MetricsCardProps {
  icon: string;
  title: string;
  value: number;
}
export const MetricsCard: FC<MetricsCardProps> = ({ icon, title, value }) => {
  return (
    <div className="metrics-card">
      <img src={icon} alt={title} />
      <h2 className="text-[#676767] text-sm">{title}</h2>
      <h3>{value.toLocaleString("en-US")}</h3>
    </div>
  );
};
