import "./ExpenseItem.css";
import { FC } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";

export interface ExpenseItemProps {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const ExpenseItem: FC<ExpenseItemProps> = (props) => {
    const clickHandler = () => {
        console.log("clicking");
    };
    return (
        <Card classCSS="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
