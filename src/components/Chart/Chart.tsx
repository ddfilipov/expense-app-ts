import { FC } from "react";
import { ChartBar, ChartBarProps } from "./ChartBar";
import "./Chart.css";

interface ChartProps {
    dataPoints: ChartBarProps[];
}

export const Chart: FC<ChartProps> = ({ dataPoints }) => {
    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label} />
            ))}
        </div>
    );
};
