import React from "react";
import { TransactionContext } from "./transactionContext";

const Transactions = () => {
  let { transactions, addTransaction } = React.useContext(TransactionContext);

  let [desc, setdes] = React.useState();
  let [ID, setID] = React.useState(0);
  let [amount, setamount] = React.useState();

  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      id: ID,
      amount: Number(amount),
      desc: desc,
    });

    setID(ID + 1);
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <hr></hr>
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Text<br></br>
          <input
            type="text"
            onChange={(ev) => setdes(ev.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Amount
          <br></br>
          negative- expense, positive + income
          <br></br>
          <input
            type="number"
            onChange={(ev) => setamount(ev.target.value)}
            required
          />
        </label>
        <br></br>
        <input type="submit" value="Add Transaction" required></input>
      </form>
    </div>
  );
};

export default Transactions;
