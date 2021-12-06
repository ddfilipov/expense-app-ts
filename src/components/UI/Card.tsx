import "./Card.css";
import { FC } from "react";

interface CardType {
    classCSS: string;
}

export const Card: FC<CardType> = (props) => {
    const classes = "card " + props.classCSS;
    return <div className={classes}>{props.children}</div>;
};
