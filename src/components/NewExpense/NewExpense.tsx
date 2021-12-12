import { FC } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseItemProps } from "../Expenses/ExpenseItem";

export interface NewExpanseType {
    onAddExpense: (expense: ExpenseItemProps) => void;
}

export const NewExpense: FC<NewExpanseType> = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log("entrando en NewExpense.saveExpenseDataHandler", expenseData);
        onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};
