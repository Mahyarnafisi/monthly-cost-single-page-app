import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  // Dummy data list
  const expense = [
    { id: 1, title: "car insurance", date: "24th April 2021", amount: 239 },
    { id: 1, title: "Books", date: "27th September 2021", amount: 199 },
    { id: 1, title: "Saving", date: "30th November 2021", amount: 829 },
    { id: 1, title: "Groceries", date: "29th March 2021", amount: 389 },
  ];
  //
  return (
    <div className="App">
      <Expenses item={expense} />
    </div>
  );
}

export default App;
