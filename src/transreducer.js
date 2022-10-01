const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    }
    case "DELETE_TRANSACTION": {
      return {
        ...state,
        transaction: state.transaction.filter((item) => item.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
export default TransactionReducer;
