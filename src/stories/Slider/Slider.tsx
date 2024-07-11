import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import classNames from "classnames";
import { directions, SliderDirection } from "./constants";

type Props = {
  color: string;
  size?: string;
  isDisabled?: boolean;
  direction?: SliderDirection;
  name?: string;
};

export const Slider = ({
  isDisabled,
  direction = directions.vertical,
}: Props) => {
  const [value, setValue] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const trackElement = document.querySelector(`.${styles.track}`);
        if (trackElement) {
          const { left, top, width, height } =
            trackElement.getBoundingClientRect();
          let newValue;
          if (direction === directions.horizontal) {
            newValue = (e.clientX - left) / width;
          } else {
            newValue = 1 - (e.clientY - top) / height;
          }
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
  }, [direction, isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const trackElement = e.currentTarget;
    const { left, top, width, height } = trackElement.getBoundingClientRect();
    let newValue;
    if (direction === directions.horizontal) {
      newValue = (e.clientX - left) / width;
    } else {
      newValue = 1 - (e.clientY - top) / height;
    }
    newValue = Math.max(0, Math.min(newValue, 1));
    setValue(newValue);
  };

  const thumbPositionStyle =
    direction === directions.horizontal
      ? { left: `${value * 100}%` }
      : { bottom: `${value * 100}%` };
  const fillerStyle =
    direction === directions.horizontal
      ? { width: `${value * 100}%` }
      : { height: `${value * 100}%` };

  return (
    <div
      className={classNames(styles.container, {
        [styles.disabled]: isDisabled,
        [styles.vertical]: direction === directions.vertical,
        [styles.horizontal]: direction === directions.horizontal,
      })}
    >
      <div
        className={classNames(styles.trackWrapper, {
          [styles.vertical]: direction === directions.vertical,
          [styles.horizontal]: direction === directions.horizontal,
        })}
      >
        <div
          className={classNames(styles.track, {
            [styles.vertical]: direction === directions.vertical,
            [styles.horizontal]: direction === directions.horizontal,
          })}
          onMouseDown={handleTrackClick}
        >
          <div
            className={classNames(styles.filler, {
              [styles.vertical]: direction === directions.vertical,
              [styles.horizontal]: direction === directions.horizontal,
            })}
            style={fillerStyle}
          ></div>
          <div
            className={classNames(styles.thumb, {
              [styles.vertical]: direction === directions.vertical,
              [styles.horizontal]: direction === directions.horizontal,
            })}
            data-dragging={isDragging}
            style={thumbPositionStyle}
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
                aria-orientation={
                  direction === directions.horizontal
                    ? "horizontal"
                    : "vertical"
                }
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
