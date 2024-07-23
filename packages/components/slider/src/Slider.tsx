/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import styles from "./slider.module.css";
import classNames from "classnames";
import { directions, sizes, SliderDirection, SliderSizes } from "./constants";
import { SemanticColor, semanticColors } from "@mirakle-ui/system20";
import { Button } from "@mirakle-ui/button";
import useSlider from "./hooks/useSlider";

type Props = {
  color?: SemanticColor;
  customColor?: string;
  customHoverColor?: string;
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
  value?: number;
  maxWidth?: number;
  onChange?: (value: number) => void;
};

export const Slider = ({
  name,
  isDisabled,
  label,
  blackText = false,
  direction = directions.horizontal,
  color = semanticColors.primary,
  customColor,
  customHoverColor,
  size = sizes.md,
  showSteps = false,
  step = 5,
  startContent,
  endContent,
  maxValue = 1,
  value: propValue,
  maxWidth = 448,
  onChange: setPropValue,
}: Props) => {
  const [internalValue, setInternalValue] = useState(propValue || 0.4);
  const value = propValue !== undefined ? propValue : internalValue;
  const setValue = (newValue: number) => {
    if (setPropValue) {
      setPropValue(newValue);
    } else {
      setInternalValue(newValue);
    }
  };
  const updateValue = (newValue: number) => {
    newValue = Math.max(0, Math.min(newValue, 1)) * maxValue;

    if (showSteps) {
      const stepValue = (step / 100) * maxValue;
      newValue = Math.round(newValue / stepValue) * stepValue;
    }

    setValue(newValue);
  };

  useSlider({ direction, updateValue });

  const handleIncrement = () => {
    //@ts-expect-error types
    setValue((prev) => {
      const incrementValue = showSteps
        ? (step / 100) * maxValue
        : 0.1 * maxValue;
      return Math.min(prev + incrementValue, maxValue);
    });
  };

  const handleDecrement = () => {
    //@ts-expect-error types
    setValue((prev) => {
      const decrementValue = showSteps
        ? (step / 100) * maxValue
        : 0.1 * maxValue;
      return Math.max(prev - decrementValue, 0);
    });
  };

  const thumbPositionStyle = {
    ...(direction === directions.horizontal
      ? { left: `${(value / maxValue) * 100}%` }
      : { bottom: `${(value / maxValue) * 100}%` }),
    ...(customColor && { backgroundColor: customColor }),
  };

  const fillerStyle = {
    ...(direction === directions.horizontal
      ? { width: `${(value / maxValue) * 100}%` }
      : { height: `${(value / maxValue) * 100}%` }),
    ...(customColor && { backgroundColor: customColor }),
  };

  const steps = showSteps ? Math.round(100 / step) : 0;

  const formatLabelValue = (value: number) => {
    return Number.isInteger(value) ? value : value.toFixed(2);
  };

  return (
    <div
      style={{
        width: direction === directions.horizontal ? `${maxWidth}px` : "",
        height: direction === directions.vertical ? `${maxWidth}px` : ``,
      }}
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
          <label
            className={classNames(styles.label, {
              [styles[size]]: size,
            })}
          >
            {label}
          </label>
          <label className={styles.label}>{formatLabelValue(value)}</label>
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
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
                onClick={handleDecrement}
                color={color}
                customColor={customColor}
                customHoverColor={customHoverColor}
              >
                {startContent}
              </Button>
            </div>
          )}
          <div
            className={classNames(styles.track, styles[size], {
              [styles.vertical]: direction === directions.vertical,
              [styles.horizontal]: direction === directions.horizontal,
              [styles.maxValued]: value === maxValue,
            })}
            style={{
              ...(customColor &&
                direction === directions.vertical && {
                  borderBottomColor: customColor,
                }),
              ...(customColor &&
                direction === directions.horizontal && {
                  borderInlineStartColor: customColor,
                }),
            }}
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
              style={thumbPositionStyle}
            >
              <div className={styles.inputContainer}>
                <input
                  tabIndex={0}
                  name={name}
                  id="slider-input"
                  min="0"
                  max={maxValue}
                  step={showSteps ? `${(step / 100) * maxValue}` : "any"}
                  aria-orientation={
                    direction === directions.horizontal
                      ? "horizontal"
                      : "vertical"
                  }
                  type="range"
                  value={value}
                  onChange={() => updateValue}
                />
              </div>
            </div>

            {showSteps && (
              <div className={styles.steps}>
                {Array.from({ length: steps + 1 }).map((_, index) => {
                  const position = (index * step) / 100;
                  const isActiveStep =
                    direction === directions.horizontal
                      ? value / maxValue >= position
                      : value / maxValue >= 1 - position;
                  return (
                    <div
                      key={index}
                      className={classNames(styles.step, styles[size], {
                        [styles.vertical]: direction === directions.vertical,
                        [styles.horizontal]:
                          direction === directions.horizontal,
                      })}
                      style={{
                        [direction === directions.horizontal ? "left" : "top"]:
                          `${position * 100}%`,
                        backgroundColor: isActiveStep ? "var(--color-3)" : "",
                        ...(customColor && {
                          backgroundColor: isActiveStep ? customColor : "",
                          filter: "brightness(0.7)",
                        }),
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
                onClick={handleIncrement}
                color={color}
                customColor={customColor}
                customHoverColor={customHoverColor}
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
