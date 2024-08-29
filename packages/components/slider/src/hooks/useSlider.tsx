import { useCallback, useEffect, useState } from "react";
import { directions, SliderDirection } from "./../constants";

type Props = {
  direction: SliderDirection;
  value?: number;
  setValue?: (value: number) => void;
  updateValue: (value: number) => void;
  name?: string;
};

const useSlider = ({ direction, updateValue, name }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [touchIdentifier, setTouchIdentifier] = useState<number | null>(null);

  const updateValueFromEvent = useCallback(
    (event: MouseEvent | Touch) => {
      const trackElement = document.getElementById(name || "slider");
      if (trackElement) {
        const { left, top, width, height } =
          trackElement.getBoundingClientRect();
        let newValue;

        if (direction === directions.horizontal) {
          newValue =
            (event instanceof MouseEvent ? event.clientX : event.clientX) -
            left;
          newValue /= width;
        } else {
          newValue =
            1 -
            (event instanceof MouseEvent
              ? event.clientY
              : event.clientY - top) /
              height;
        }

        updateValue(newValue);
      }
    },
    [direction, updateValue, name]
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

    const handleMouseDown = (e: MouseEvent) => {
      const trackElement = document.getElementById(name || "track");
      if (trackElement && trackElement.contains(e.target as Node)) {
        setIsDragging(true);
        updateValueFromEvent(e);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const trackElement = document.getElementById(name || "track");
      if (trackElement && trackElement.contains(touch.target as Node)) {
        setTouchIdentifier(touch.identifier);
        setIsDragging(true);
        updateValueFromEvent(touch);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isDragging, touchIdentifier, updateValueFromEvent, name]);

  return { isDragging };
};

export default useSlider;
