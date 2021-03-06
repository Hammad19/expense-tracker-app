import React from 'react';
import TransactionReducer from './transreducer';

const inittransactions  =[
    

] ;
export const TransactionContext = React.createContext(inittransactions);

export const TransactionProvider =({children})=>{
    let [state,dispatch] =React.useReducer(TransactionReducer,inittransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc,
            }
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction

        }}>{children}</TransactionContext.Provider>
    )
}
