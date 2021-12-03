import "./ExpenseItem.css";
import { FC } from "react";

interface ExpenseItemProps {
    title: string;
    amount: number;
    date: string;
}

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
