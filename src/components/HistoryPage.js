import React from "react";
import "./HistoryPage.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "./Store/Slices/TransactionsSlice";

const HistoryPage = () => {
  let receipts = useSelector((Store) => {
    return Store.transactions.transactions;
  });
let dispatch = useDispatch();
  return (
    <div className="historyPageMain">
      <h3>Transaction History</h3>
      <div id="hr"/>
      <ul id="ul">
        {receipts.map((transaction, index) => (
          <li
          key={index} className={transaction.amount > 0 ? "historyLi" : "expense"}>
            <div>{transaction.purpose}</div>
            <div>{transaction.amount}</div>
            <p id="del" onClick={() => dispatch(deleteTransaction(transaction.id))}>X</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
