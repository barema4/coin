import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import "../assets/style.css"
export default function BuyCoins() {
  return (
    <div className="buy-coins-btc">
      <div className="buy-btc">
        <div className="dollar">
          <AiFillDollarCircle />
        </div>
        <div className="buy-dollars">Buy BTC</div>
      </div>
      <div className="buy-btc">
        <div className="dollar-right">
          <AiFillDollarCircle />
        </div>
        <div className="buy-dollars">Sell BTC</div>
      </div>
    </div>
  );
}
