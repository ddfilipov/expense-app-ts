import { FC, useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

interface ExpenseType {
    expenses: ExpenseItemProps[];
}

export const Expenses: FC<ExpenseType> = ({ expenses }) => {
    const [filteredYear, setYear] = useState("2020");

    const onChangeDate = (filteredDate: string) => {
        setYear(filteredDate);
    };

    const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card classCSS="expenses">
                <ExpensesFilter onChangeDate={onChangeDate} year={filteredYear} />
                {filteredExpenses.map((expense) => (
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
