import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../style/expenses/Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem title={props.item[0].title} date={props.item[0].date} amount={props.item[0].amount} /> <ExpenseItem title={props.item[1].title} date={props.item[1].date} amount={props.item[1].amount} />
      <ExpenseItem title={props.item[2].title} date={props.item[2].date} amount={props.item[2].amount} /> <ExpenseItem title={props.item[3].title} date={props.item[3].date} amount={props.item[3].amount} />
      <ExpenseItem title={props.item[4].title} date={props.item[4].date} amount={props.item[4].amount} />
    </div>
  );
}

export default Expenses;