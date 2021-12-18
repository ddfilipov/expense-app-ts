import { FC } from "react";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./ExpensesList.css";

export interface ExpensesListType {
    expenses: ExpenseItemProps[];
}

export const ExpensesList: FC<ExpensesListType> = ({ expenses }) => {
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};
