import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeaderTab from "./components/header/HeaderTab";
import CurrencyTab from "./components/CurrencyTab";
import DaysInYear from "./components/DaysInYear";
import TransactionTab from "./components/TransactionTab";
import BuyCoins from "./components/BuyCoins";
import FooterTab from "./components/FooterTab";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [timeRange, setTimeRange] = useState("7");
  const [day, setDay] = useState(false);

  useEffect(() => {
    fetchCryptoData(timeRange);
  }, [timeRange]);

  const fetchCryptoData = (days) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
      )
      .then((response) => {
        setCryptoData(response.data.prices);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleTimeRangeChange = (days) => {
    setTimeRange(days);
  };

  const chartData = cryptoData.map((data) => ({
    date: new Date(data[0]).toLocaleDateString(),
    price: data[1],
  }));
  return (
    <>
      <div className="container">
        <HeaderTab />
        <div className="body-tab">
          <CurrencyTab setDay={setDay} day={day} />
          <div className="days">
            {day && (
              <DaysInYear handleTimeRangeChange={handleTimeRangeChange} />
            )}
          </div>
          <TransactionTab
            handleTimeRangeChange={handleTimeRangeChange}
            chartData={chartData}
          />
          <div>
            <BuyCoins />
          </div>
        </div>
        <div>
          <FooterTab />
        </div>
      </div>
    </>
  );
}

export default App;
