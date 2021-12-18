import { FC } from "react";

export interface ChartBarProps {
    label: string;
    value: number;
    maxValue: any;
}

export const ChartBar: FC<ChartBarProps> = ({ label, value, maxValue }) => {
    return <div></div>;
};
