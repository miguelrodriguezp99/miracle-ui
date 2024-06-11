import options from "./constants";
import PropTypes from "prop-types";
import React from "react";

export const Card = ({
  children = "Children",
  color = "primary",
  size = "md",
}) => {
  return <div>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default Card;
