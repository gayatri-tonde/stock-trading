import React from "react";
import { holdings } from "../data";

const Holdings = () => {
  return (
    <>
      <h4 className="container-fluid">
        Holdings
        <span className="text-left"> ({holdings.length})</span>
      </h4>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row m-5 ">
        <div className="col py-2  text-center card">
          <h5>
            29,875.<small className="fs-6">55</small>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col  py-2 mx-3 text-center  card">
          <h5>
            31,428.<small className="fs-6">95</small>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col  py-2 text-center card">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
