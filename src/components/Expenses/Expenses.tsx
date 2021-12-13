import { FC, useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    const [date, setDate] = useState("");

    const onFilterDate = (filteredDate: string) => {
        console.log("checking the value of the param: ", filteredDate);
        //this setDate won't immidiately change the value of the "date" variable
        setDate(filteredDate);
        // that's why console.log(date) won't return a value
        console.log("checking the value of date: ", date);
    };

    return (
        <div>
            <ExpensesFilter onChangeDate={onFilterDate} />
            <Card classCSS="expenses">
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};
