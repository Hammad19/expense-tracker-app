import React from 'react';
import { TransactionContext } from './transactionContext';

const Child = () => {
   let transactions = React.useContext(TransactionContext);
    return(
        <div className = "container">
            <h1>Expense Tracker </h1>
            <h3>Your Balance <br></br> $260 </h3>
            <div className = "incexp-container">
                <h3>Income <br></br> $500</h3>
                <h3>Expense <br></br> $240</h3>
            </div>
            <h3>History</h3>
            <hr></hr>
            <ul className="transaction-list">
                {transactions.map((transobj,index)=>{
                    return(
                        <li>
                    <span>
                        {transobj.desc}
                    </span>
                    <span>
                        {transobj.amount}
                    </span>
                    
                </li>
                

                    )
                })}
            
                
                
                

            </ul>
            <h3>Add New Transaction</h3>
            <hr></hr>
            <form className="transaction-form">
                <label>
                    Text<br></br>
                    <input type = "text"/>
                    </label>
                    <br></br>
                <label>
                    Amount
                    <br></br>
                    negative- expense, positive + income
                    <br></br>
                    <input type = "number" required/>
                    </label>
                    <br>
                    </br>
                    <input type="submit" value = "Add Transaction" required></input>
                
                
                

            </form>
            
        </div>

    )
}

export default Child