import { FC } from "react";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    return (
        <div className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </div>
    );
};
