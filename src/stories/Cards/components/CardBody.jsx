import styles from "./../card.module.css";
import PropTypes from "prop-types";

export const CardBody = ({ children }) => {
  return <div className={styles["card-body"]}>{children}</div>;
};

CardBody.propTypes = {
  children: PropTypes.node,
};

export default CardBody;
