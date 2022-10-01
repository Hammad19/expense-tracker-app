import React from "react";
import { TransactionContext } from "./transactionContext";

const Balance = () => {
  let { transaction, addTransaction, deleteTransaction } =
    React.useContext(TransactionContext);

  const GetIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0) {
        income += transaction[i].amount;
      }
    }
    return income;
  };

  const GetExpense = () => {
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0) {
        expense += transaction[i].amount;
      }
    }
    return expense;
  };

  return (
    <div>
      <h3 className="orange">
        Your Balance <br></br> {GetIncome() + GetExpense()}
      </h3>
      <div className="incexp-container">
        <h3 className="green">
          Income <br></br> {GetIncome()}
        </h3>
        <h3 className="pink">
          Expense <br></br> {GetExpense()}
        </h3>
      </div>
    </div>
  );
};

export default Balance;
