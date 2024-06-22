import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import options, { PaddingTypes, MarginTypes } from "../constants";

type Props = {
    children: React.ReactNode;
    padding?: PaddingTypes;
    margin?: MarginTypes;
    absolute?: boolean;
    isBlurred?: boolean;
}
export const CardFooter = ({ children, padding = "none", margin = "none", absolute, isBlurred }: Props) => {


    return <div className={classNames(styles["card-footer"], {
        [styles[`padding-${padding}`]]: padding,
        [styles["absolute"]]: absolute,
        [styles["is-blurred"]]: isBlurred,
        [styles[`margin-${margin}`]]: margin,
    })}>
        {children}
    </div>;


}

export default CardFooter;

CardFooter.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(options.padding),
};