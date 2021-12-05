import "./ExpenseItem.css";
import { FC } from "react";

interface ExpenseItemProps {
    title: string;
    amount: number;
    date: Date;
}

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
    return (
        <div className="expense-item">
            <div>
                {props.date.toLocaleDateString()}
                <div>Month</div>
                <div>Year</div>
                <div>Date</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
