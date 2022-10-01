import React, { useEffect } from "react";
import { TransactionContext } from "./transactionContext.js";

const History = () => {
  let { transaction, addTransaction, deleteTransaction } =
    React.useContext(TransactionContext);

  useEffect(() => {
    console.log("transaction", transaction);
  }, [transaction]);

  return (
    <div>
      <h3>History</h3>
      <hr></hr>
      <ul className="transaction-list">
        {transaction.length > 0 &&
          transaction.map((transobj, index) => {
            return (
              <li key={index}>
                <span>{transobj.desc}</span>
                <span>{transobj.amount}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transobj.id)}
                >
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default History;
