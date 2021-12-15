import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpenseItemProps } from "./components/Expenses/ExpenseItem";
import { useState } from "react";

function App() {
    const expensesList = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date("2020-07-14"),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date("2021-02-12") },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date("2021-02-28"),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date("2021-05-12"),
        },
    ];
    const [expenses, setExpanses] = useState(expensesList);

    const addExpenseHandler = (expense: ExpenseItemProps) => {
        setExpanses([...expenses, expense]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
