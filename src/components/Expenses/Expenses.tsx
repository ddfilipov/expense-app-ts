import { FC } from "react";
import { Card } from "../UI/Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    return (
        <Card classCSS="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};
