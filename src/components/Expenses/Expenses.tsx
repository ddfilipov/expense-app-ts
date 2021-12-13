import { FC, useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    const [date, setDate] = useState("2020");

    const onFilterDate = (filteredDate: string) => {
        setDate(filteredDate);
    };

    return (
        <div>
            <Card classCSS="expenses">
                <ExpensesFilter onChangeDate={onFilterDate} date={date} />
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
