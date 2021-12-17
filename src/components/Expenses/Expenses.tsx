import { FC, useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    const [filteredYear, setYear] = useState("2020");

    const onChangeDate = (filteredDate: string) => {
        setYear(filteredDate);
    };

    const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card classCSS="expenses">
                <ExpensesFilter onChangeDate={onChangeDate} year={filteredYear} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};
