import styles from "./../card.module.css";
import PropTypes from "prop-types";

export const CardHeader = ({ imageRoute, title, subtitle }) => {
  return (
    <div className={styles["card-header"]}>
      <img src={imageRoute} alt="image" className={styles["card-image"]} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  imageRoute: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardHeader;
