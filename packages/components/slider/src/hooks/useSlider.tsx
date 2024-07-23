import { useCallback, useEffect, useState } from "react";
import { directions, SliderDirection } from "./../constants";

import styles from "./../slider.module.css";

type Props = {
  direction: SliderDirection;
  value?: number;
  setValue?: (value: number) => void;
  updateValue: (value: number) => void;
};

const useSlider = ({ direction, updateValue }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [touchIdentifier, setTouchIdentifier] = useState<number | null>(null);

  const updateValueFromEvent = useCallback(
    (event: MouseEvent | Touch) => {
      const trackElement = document.querySelector(`.${styles.track}`);
      if (trackElement) {
        const { left, top, width, height } =
          trackElement.getBoundingClientRect();
        let newValue;

        if (event instanceof MouseEvent) {
          if (direction === directions.horizontal) {
            newValue = (event.clientX - left) / width;
          } else {
            newValue = 1 - (event.clientY - top) / height;
          }
        } else {
          if (direction === directions.horizontal) {
            newValue = (event.clientX - left) / width;
          } else {
            newValue = 1 - (event.clientY - top) / height;
          }
        }
        updateValue(newValue);
      }
    },
    [direction, updateValue]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateValueFromEvent(e);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && touchIdentifier !== null) {
        const touch = Array.from(e.changedTouches).find(
          (touch) => touch.identifier === touchIdentifier
        );
        if (touch) {
          updateValueFromEvent(touch);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = Array.from(e.changedTouches).find(
        (touch) => touch.identifier === touchIdentifier
      );
      if (touch) {
        updateValueFromEvent(touch);
      }
      setIsDragging(false);
      setTouchIdentifier(null);
    };

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      setTouchIdentifier(touch.identifier);
      setIsDragging(true);
      updateValueFromEvent(touch);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isDragging, touchIdentifier, updateValueFromEvent]);

  return { isDragging };
};

export default useSlider;
