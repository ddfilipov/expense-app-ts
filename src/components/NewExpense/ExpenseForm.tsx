import React, { FC, useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm: FC = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredTitle(e.currentTarget.value);
    };
    const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredAmount(e.currentTarget.value);
    };
    const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredDate(e.currentTarget.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};