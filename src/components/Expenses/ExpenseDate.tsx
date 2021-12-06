import { FC } from "react";
import "./ExpenseDate.css";

interface ExpenseDateType {
    date: Date;
}

export const ExpenseDate: FC<ExpenseDateType> = ({ date }) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expanse-date__month">{month}</div>
            <div className="expanse-date__year">{year}</div>
            <div className="expanse-date__day">{day}</div>
        </div>
    );
};
