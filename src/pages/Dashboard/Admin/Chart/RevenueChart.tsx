import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

interface AnalyticsData {
  revenue: number | undefined;
}

interface AnalyticsChartProps {
  data: AnalyticsData;
}

const RevenueChart: FC<AnalyticsChartProps> = ({ data }) => {
  const chartData = [{ name: "Total Revenue", revenue: data?.revenue }];

  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#155ba7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
