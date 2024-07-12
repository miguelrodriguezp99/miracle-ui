import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import classNames from "classnames";
import { directions, sizes, SliderDirection, SliderSizes } from "./constants";
import { SemanticColor, semanticColors } from "../../lib/colors";
import Button from "../Button";

type Props = {
  color: SemanticColor;
  size?: SliderSizes;
  label?: string;
  isDisabled?: boolean;
  direction?: SliderDirection;
  name?: string;
  blackText?: boolean;
  showSteps?: boolean;
  step?: number;
  maxValue?: number;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
};

export const Slider = ({
  isDisabled,
  label,
  blackText = false,
  direction = directions.horizontal,
  color = semanticColors.primary,
  size = sizes.md,
  showSteps = false,
  step = 5,
  startContent,
  endContent,
  maxValue = 1,
  value,
  onChange: setValue,
}: Props) => {
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
          newValue = Math.max(0, Math.min(newValue, 1)) * maxValue;

          if (showSteps) {
            const stepValue = (step / 100) * maxValue;
            newValue = Math.round(newValue / stepValue) * stepValue;
          }
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
  }, [direction, isDragging, showSteps, step, maxValue, setValue]);

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
    newValue = Math.max(0, Math.min(newValue, 1)) * maxValue;

    if (showSteps) {
      const stepValue = (step / 100) * maxValue;
      newValue = Math.round(newValue / stepValue) * stepValue;
    }

    setValue(newValue);
  };

  const thumbPositionStyle =
    direction === directions.horizontal
      ? { left: `${(value / maxValue) * 100}%` }
      : { bottom: `${(value / maxValue) * 100}%` };
  const fillerStyle =
    direction === directions.horizontal
      ? { width: `${(value / maxValue) * 100}%` }
      : { height: `${(value / maxValue) * 100}%` };

  const steps = showSteps ? Math.round(100 / step) : 0;

  const formatLabelValue = (value: number) => {
    return Number.isInteger(value) ? value : value.toFixed(2);
  };

  return (
    <div
      className={classNames(styles.container, color, {
        [styles.disabled]: isDisabled,
        [styles.vertical]: direction === directions.vertical,
        [styles.horizontal]: direction === directions.horizontal,
        [styles[size]]: size,
      })}
    >
      {label && (
        <div
          className={classNames(styles.labelContainer, {
            [styles.blackText]: blackText,
          })}
        >
          <label className={styles.label}>{label}</label>
          <label className={styles.label}>{formatLabelValue(value)}</label>
        </div>
      )}

      <div>
        <div
          className={classNames(styles.trackWrapper, {
            [styles.vertical]: direction === directions.vertical,
            [styles.horizontal]: direction === directions.horizontal,
          })}
        >
          {startContent && (
            <div
              className={classNames({
                [styles.startContentVertical]:
                  direction === directions.vertical,
              })}
            >
              <Button
                isIconOnly
                onClick={() =>
                  //@ts-expect-error - Noticed
                  setValue((prev) => {
                    if (showSteps) {
                      return Math.max(prev - step, 0);
                    }
                    return Math.max(prev - 0.1 * maxValue, 0);
                  })
                }
              >
                {startContent}
              </Button>
            </div>
          )}
          <div
            className={classNames(styles.track, styles[size], {
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
              className={classNames(styles.thumb, styles[size], {
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
                  max={maxValue}
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
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value);
                    if (showSteps) {
                      const stepValue = (step / 100) * maxValue;
                      setValue(Math.round(newValue / stepValue) * stepValue);
                    } else {
                      setValue(newValue);
                    }
                  }}
                />
              </div>
            </div>

            {showSteps && (
              <div className={styles.steps}>
                {Array.from({ length: steps + 1 }).map((_, index) => {
                  const position = (index * step) / 100;
                  return (
                    <div
                      key={index}
                      className={classNames(styles.step, styles[size], {
                        [styles.vertical]: direction === directions.vertical,
                        [styles.horizontal]:
                          direction === directions.horizontal,
                      })}
                      style={{
                        [direction === directions.horizontal
                          ? "left"
                          : "bottom"]: `${position * 100}%`,
                        backgroundColor:
                          value / maxValue >= position ? "var(--color-3)" : "",
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
          {endContent && (
            <div
              className={classNames({
                [styles.endContentVertical]: direction === directions.vertical,
              })}
            >
              <Button
                isIconOnly
                onClick={() =>
                  //@ts-expect-error - Noticed
                  setValue((prev) => {
                    if (startContent && showSteps) {
                      return Math.min(prev + step, maxValue);
                    }
                    return Math.min(prev + 0.1 * maxValue, maxValue);
                  })
                }
              >
                {endContent}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
