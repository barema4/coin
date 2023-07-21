import { GoDotFill } from "react-icons/go";
import CryptoTrackerChart from "./CryptoTrackerChart";
import "../assets/style.css"
export default function TransactionTab({ chartData }) {
  return (
    <div className="transaction">
      <div className="price">
        <div>
          <span className="left-dot">
            <GoDotFill />
          </span>
          <span>Lower:$15742</span>
        </div>
        <div>
          <span className="right-dot">
            <GoDotFill />
          </span>
          <span>Higher:$15742</span>
        </div>
      </div>
      <CryptoTrackerChart chartData={chartData} />
    </div>
  );
}
