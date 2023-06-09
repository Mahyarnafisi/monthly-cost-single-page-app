import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import ExpenseFilter from "./components/expenses/ExpenseFilter";

// Dummy data list
const initiateExpense = [
  { id: 1, title: "car insurance", date: "2021-01-01", amount: 239 },
  { id: 2, title: "Books", date: "2020-06-12", amount: 199 },
  { id: 3, title: "Saving", date: "2021-02-13", amount: 829 },
  { id: 4, title: "Groceries", date: "2020-09-28", amount: 389 },
  { id: 5, title: "Jeans and shoes", date: "2020-12-31", amount: 299 },
  { id: 6, title: "Car wash", date: "2020-10-12", amount: 199 },
  { id: 7, title: "School", date: "2022-02-22", amount: 299 },
  { id: 8, title: "Roof Cost", date: "2022-07-02", amount: 499 },
];
function App() {
  const [expenses, setExpenses] = useState(initiateExpense);
  // State section
  const [filterYear, setFilterYear] = useState("2022");

  //climb up data from form expenses
  const addExpensesHandler = (data) => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    console.log(expenses);
  };

  // climb up data from filter selected and save it in state
  const selectedYearFilter = (data) => setFilterYear(data);

  return (
    <div className="App">
      <ExpenseFilter defaultValue={filterYear} onFilterChange={selectedYearFilter} />
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses item={expenses} filterYear={filterYear} />
    </div>
  );
}

export default App;
