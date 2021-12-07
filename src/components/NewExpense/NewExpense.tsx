import { FC } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense: FC = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};
