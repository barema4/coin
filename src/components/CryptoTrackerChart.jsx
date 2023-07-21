import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import "../assets/style.css"
const CryptoTrackerChart = ({ chartData }) => {
  return (
    <div className="crypto-chart-container">
      <LineChart width={300} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#007BFF"
          name="1 BTC=$30,389"
        />
      </LineChart>
    </div>
  );
};

export default CryptoTrackerChart;
