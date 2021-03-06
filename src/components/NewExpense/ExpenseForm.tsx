import React, { FC, useState } from "react";
import "./ExpenseForm.css";
import { ExpenseItemProps } from "../Expenses/ExpenseItem";

export interface ExpanseFormType {
    onSaveExpenseData: (expanse: ExpenseItemProps) => void;
    handleShowForm: (visible: boolean) => void;
}

export const ExpenseForm: FC<ExpanseFormType> = ({ onSaveExpenseData, handleShowForm }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredTitle(e.currentTarget.value);
    };
    const amountChangeHandler = (e: any) => {
        setEnteredAmount(e.currentTarget.value);
    };
    const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredDate(e.currentTarget.value);
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const expenseData: ExpenseItemProps = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: "",
        };
        onSaveExpenseData(expenseData);
    };

    const resetFormValues = () => {
        setEnteredTitle("");
        setEnteredAmount(0);
        setEnteredDate("");
    };

    const handleHideForm = () => {
        resetFormValues();
        handleShowForm(false);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={handleHideForm}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};
