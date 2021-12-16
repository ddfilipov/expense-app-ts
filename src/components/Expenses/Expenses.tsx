import { FC, useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

interface ExpenseType {
    expenses: ExpenseItemProps[];
    filterExpenses: (expenses: ExpenseItemProps[]) => void;
    passYearFilter: (date: string) => void;
}

export const Expenses: FC<ExpenseType> = ({ expenses, filterExpenses, passYearFilter }) => {
    const [filteredYear, setYear] = useState("2020");
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);

    const onChangeDate = (filteredDate: string) => {
        setYear(filteredDate);
        // const filteredExpenseList = expenses.filter(
        //     (expense) => expense.date.getFullYear().toString() === filteredDate
        // );
        // const newList = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredDate);
        console.log("filteredDate: ", filteredDate);
        // passYearFilter(filteredDate);
        // console.log("expenses: ", expenses);
        setFilteredExpenses(expenses.filter((expense) => expense.date.getFullYear().toString() === filteredDate));
        // console.log("checkeando expenses[0].date al filtrar: ", expenses[0].date.getFullYear().toString());
        // console.log(expenses.filter((expense) => expense.date.getFullYear().toString() === filteredDate));
    };

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
