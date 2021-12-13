import "./ExpensesFilter.css";
import React, { FC } from "react";

interface ExpensesFilterType {
    onChangeDate: (filteredDate: string) => void;
}

export const ExpensesFilter: FC<ExpensesFilterType> = ({ onChangeDate }) => {
    const dateChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        onChangeDate(e.currentTarget.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={dateChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};
