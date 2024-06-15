import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { paddingTypes } from "../constants";

type Props = {
    children: React.ReactNode;
    padding?: paddingTypes;
}
export const CardFooter = ({ children, padding = "md" }: Props) => {


    return <div className={classNames(styles["card-footer"], {
        [styles[`padding-${padding}`]]: padding,
    })}>
        {children}
    </div>;


}

export default CardFooter;

CardFooter.propTypes = {
    children: PropTypes.node,
};