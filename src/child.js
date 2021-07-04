import React from 'react';
import { TransactionContext } from './transactionContext';
import Header from './header.js';
import Balance from './balance';
import History from './History.js';
import Transactions from './transactions.js';



const Container = () => {
  
    return(
        <div className = "container">
            <Header/>
            <Balance/>
            <History/>
            <Transactions/>
            
        </div>

    )
}

export default Container