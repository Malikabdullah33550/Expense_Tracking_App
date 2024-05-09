import React from "react";
import "./BalancePage.css";
import { useSelector } from "react-redux";


const BalancePage = () => { 
  let income = useSelector((Store)=> {
    return Store.transactions.income
  })
  let expense = useSelector((Store)=> {
    return Store.transactions.expense
  })
  return (
    <div className="Main">
      <div className="balanceUpSection">
        <h3>Balance</h3>
        <h2>${income - Math.abs(expense)}</h2>
      </div>
      <div className="incomeSection">
        <div>
          <p>Income</p>
          <h2>${income}</h2>
        </div>
        <div id="hr"/>
        <div>
          <p>Expense</p>
          <h2>${Math.abs(expense)}</h2>
        </div>
      </div>
    </div>
  );
};

export default BalancePage;
