import "./Expenses.css";
import ExpensesList from './ExpensesList';
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterArr = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filterChangeHandler = (data) => {
    setFilterYear(data);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filterArr}></ExpensesChart>
        <ExpensesList items={filterArr}/>
      </Card>
    </div>
  );
}

export default Expenses;
