import React from "react";
import TransactionReducer from "./transreducer";

const initialState = {
  transaction: [],
};
export const TransactionContext = React.createContext(initialState);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = React.useReducer(TransactionReducer, initialState);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transObj,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {
        id: id,
      },
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transaction: state.transaction,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
