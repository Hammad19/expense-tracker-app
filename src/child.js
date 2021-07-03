import React from 'react';

const Child = () => {
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
                <li>
                    <span>
                        Cash
                    </span>
                    <span>
                        $500
                    </span>
                </li>
                <br></br>
                <li>
                    <span>
                        Bill
                    </span>
                    <span>
                        $200
                    </span>
                </li>
                <br></br>
                <li>
                    <span>
                        Camera
                    </span>
                    <span>
                        $800
                    </span>
                </li>

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