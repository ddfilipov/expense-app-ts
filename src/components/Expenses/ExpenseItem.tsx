import "./ExpenseItem.css";
import { FC } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { useState } from "react";

export interface ExpenseItemProps {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("new title");
    };
    return (
        <Card classCSS="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
