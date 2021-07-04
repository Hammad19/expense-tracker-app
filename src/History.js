import React from 'react';
import { TransactionContext } from './transactionContext.js';

const History = ()=>
{
    let {transactions,addTransaction} = React.useContext(TransactionContext);
   
    return(
        <div>
        <h3>History</h3>
        <hr></hr>
        <ul className="transaction-list">
        
            {transactions.map((transobj,index)=>{

                return(
                    
                    <li key = {index}>
                    
                <span>
                
                    {transobj.desc}
                </span>
                <span>
                    {transobj.amount}
                </span>
                <button className ="delete-btn">X</button>
                
            </li>
            
            

                )
            })}
        
            
            
            

        </ul>
        </div>)
}

export default History