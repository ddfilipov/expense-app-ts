import { FC, useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseItemProps } from "../Expenses/ExpenseItem";

export interface NewExpanseType {
    onAddExpense: (expense: ExpenseItemProps) => void;
}

export const NewExpense: FC<NewExpanseType> = ({ onAddExpense }) => {
    const [showFormFields, setShowFormFields] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
        setShowFormFields(false);
    };

    const handleShowForm = (visible: boolean) => {
        setShowFormFields(visible);
    };

    return (
        <div className="new-expense">
            {showFormFields === true ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} handleShowForm={handleShowForm} />
            ) : (
                <button
                    onClick={() => {
                        handleShowForm(true);
                    }}
                >
                    Add New Expense
                </button>
            )}
        </div>
    );
};
