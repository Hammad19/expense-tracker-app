import React from 'react';
const inittransactions  =[
    {amount: 500, desc: "Cash" },
    {amount: -40, desc: "Book" },
    {amount: -200, desc: "Camera" },

] ;
export const TransactionContext = React.createContext(inittransactions);