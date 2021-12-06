import { FC } from "react";
import { Card } from "./Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    return (
        <Card classCSS="expenses">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
};
