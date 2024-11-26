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
} from "recharts";

interface AnalyticsData {
  cars: number | undefined;
  bookings: number | undefined;
  users: number | undefined;
}

interface AnalyticsChartProps {
  data: AnalyticsData;
}

const Chart: FC<AnalyticsChartProps> = ({ data }) => {
  const chartData = [
    { name: "Avaiable Cars", cars: data?.cars },
    { name: "Total Bookings", bookings: data?.bookings },
    { name: "All Users", users: data?.users },
  ];

  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart data={chartData} width={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cars" fill="#155ba7" />
        <Bar dataKey="bookings" />
        <Bar dataKey="users" fill="#6A1E55" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
