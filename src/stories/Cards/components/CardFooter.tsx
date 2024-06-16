import React from "react";
import styles from "./../card.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import options, { paddingTypes } from "../constants";

type Props = {
    children: React.ReactNode;
    padding?: paddingTypes;
    absolute?: boolean;
    isBlurred?: boolean;
}
export const CardFooter = ({ children, padding = "none", absolute, isBlurred }: Props) => {


    return <div className={classNames(styles["card-footer"], {
        [styles[`padding-${padding}`]]: padding,
        [styles["absolute"]]: absolute,
        [styles["is-blurred"]]: isBlurred
    })}>
        {children}
    </div>;


}

export default CardFooter;

CardFooter.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(options.padding),
};