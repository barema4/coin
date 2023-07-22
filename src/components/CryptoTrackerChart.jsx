import { LineChart, Line, Tooltip, Legend } from "recharts";
import "../assets/style.css"
const CryptoTrackerChart = ({ chartData }) => {
  return (
    <div className="crypto-chart-container">
      <LineChart width={300} height={200} data={chartData}>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          fill="rgb(255, 247, 238)"
          dataKey="price"
          stroke="hsl(24.05deg 100% 68%)"
          name="1 BTC=$30,389"
        />
      </LineChart>
    </div>
  );
};

export default CryptoTrackerChart;
// hsl(24.05deg 100% 68%)