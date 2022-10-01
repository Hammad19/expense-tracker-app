
import React from 'react';
import { TransactionContext } from './transactionContext';


const Balance = ()=>{
    let {transactions,addTransaction,deleteTransaction} = React.useContext(TransactionContext);

    const GetIncome=()=>
    {
        let income = 0
        for (var i = 0 ; i < transactions.length;i ++)
        {
            if (transactions[i].amount> 0)
            {
                income += transactions[i].amount
            }
        }
        return income;
    }

    const GetExpense=()=>
    {
     let expense = 0
     for (var i = 0 ; i < transactions.length;i ++)
     {
         if (transactions[i].amount< 0)
         {
             expense += transactions[i].amount
         }
     }
     return expense;
    }
    
    return(
        <div>
        <h3 className="orange">Your Balance <br></br> {GetIncome()+GetExpense()}
        </h3>
        <div className = "incexp-container">
        <h3 className="green">Income <br></br> {GetIncome()}</h3>
        <h3 className="pink">Expense <br></br> {GetExpense()}</h3>
    </div>
    </div>)
}

export default Balance