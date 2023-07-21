import ConvertCurrency from "./ConvertCurrency";
import { SiBitcoinsv } from "react-icons/si";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import "../assets/style.css"
export default function CurrencyTab({ setDay, day }) {
  return (
    <div className="currency">
      <div className="coins">
        <div className="left">
          <div className="bitcon">
            <SiBitcoinsv />
          </div>
          <div>Bitcon</div>
        </div>

        <div>BTC</div>
      </div>
      <div className="btc">3.529020 BTC</div>
      <div>
        <ConvertCurrency />
      </div>
      {day ? (
        <div className="arrow" onClick={() => setDay(false)}>
          <BiUpArrow />
        </div>
      ) : (
        <div className="arrow" onClick={() => setDay(true)}>
          <BiDownArrow />
        </div>
      )}
    </div>
  );
}
