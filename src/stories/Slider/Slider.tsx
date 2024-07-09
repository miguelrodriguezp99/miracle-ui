import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";

// type Props = {
//   color: string;
//   size?: string;
//   isDisabled?: boolean;

//   name?: string;
// };

export const Slider = () => {
  const [value, setValue] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const trackElement = document.querySelector(`.${styles.track}`);
        if (trackElement) {
          const { left, width } = trackElement.getBoundingClientRect();
          let newValue = (e.clientX - left) / width;
          newValue = Math.max(0, Math.min(newValue, 1));
          setValue(newValue);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          <div
            className={styles.filler}
            style={{
              left: "0%",
              width: value * 100 + "%",
            }}
          ></div>
          <div
            className={styles.thumb}
            data-dragging={isDragging}
            style={{
              left: value * 100 + "%",
            }}
            onMouseDown={handleMouseDown}
          >
            <div className={styles.inputContainer}>
              <input
                tabIndex={0}
                id="react-aria8368235164-:rm:-0"
                aria-labelledby="react-aria8368235164-:rm:"
                min="0"
                max="1"
                step="0.01"
                aria-orientation="horizontal"
                aria-valuetext={value.toString()}
                aria-describedby=""
                aria-details=""
                type="range"
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
