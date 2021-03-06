/** @format */

import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
    },
  ]);

  const addItems = (newExpense) => {
    console.log("add item func called", newExpense);
    setExpenses([...expenses, newExpense]);
  };
  return (
    <ExpenseContext.Provider value={{ expenses, addItems, setExpenses }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
