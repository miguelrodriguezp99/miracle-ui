import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./resizer.module.css";
import classNames from "classnames";

type Props = {
  direction?: "vertical" | "horizontal";
  children: React.ReactNode[];
  resizeBarSize?: number;
  resizeBarColor?: string;
  defaultSize?: string;
  minSize?: string;
};

export const Resizer = ({
  direction = "horizontal",
  children,
  resizeBarSize,
  resizeBarColor,
  defaultSize = "50%",
  minSize,
}: Props) => {
  const [sizes, setSizes] = useState<number[]>([]);
  const [hiddenIndices, setHiddenIndices] = useState<Set<number>>(new Set());
  const splitPaneRef = useRef<HTMLDivElement>(null);
  const paneRefs = useRef<HTMLDivElement[]>([]);
  const isResizing = useRef(false);

  useEffect(() => {
    const count = React.Children.count(children);
    if (count === 0) return;

    const initialSizes: number[] = [];
    let remainingSize = 100;

    if (defaultSize) {
      const defaultSizePercent = parseFloat(defaultSize);
      if (
        !isNaN(defaultSizePercent) &&
        defaultSizePercent >= 0 &&
        defaultSizePercent <= 100
      ) {
        initialSizes[0] = defaultSizePercent;
        remainingSize -= defaultSizePercent;
      }
    }

    if (count > 1) {
      const sizePerPanel = remainingSize / (count - 1);
      for (let i = 1; i < count; i++) {
        initialSizes[i] = sizePerPanel;
      }
    }

    setSizes(initialSizes);
  }, [children, defaultSize]);

  const onMouseDown = useCallback(
    (index: number, e: React.MouseEvent) => {
      isResizing.current = true;
      document.body.classList.add(styles.noSelect); // Prevent text selection
      const startPos = direction === "horizontal" ? e.clientX : e.clientY;
      const startSizes = sizes.slice();
      const totalSize =
        direction === "horizontal"
          ? splitPaneRef.current?.getBoundingClientRect().width || 0
          : splitPaneRef.current?.getBoundingClientRect().height || 0;

      const onMouseMove = (e: MouseEvent) => {
        if (!isResizing.current) return; // Stop if resizing is not active

        const deltaPos =
          direction === "horizontal"
            ? e.clientX - startPos
            : e.clientY - startPos;

        const deltaSizePercent = (deltaPos / totalSize) * 100;

        const newSizes = startSizes.slice();

        // Adjust sizes ensuring they are non-negative and within bounds
        newSizes[index] = Math.max(0, startSizes[index] + deltaSizePercent);
        newSizes[index + 1] = Math.max(
          0,
          startSizes[index + 1] - deltaSizePercent
        );

        // Adjust the hidden state based on the updated sizes
        const newHiddenIndices = new Set(hiddenIndices);

        if (direction === "horizontal") {
          if (newSizes[index] < 1) {
            newHiddenIndices.add(index);
          } else {
            newHiddenIndices.delete(index);
          }

          if (newSizes[index + 1] < 1) {
            newHiddenIndices.add(index + 1);
          } else {
            newHiddenIndices.delete(index + 1);
          }
        } else {
          if (newSizes[index] < 5) {
            newHiddenIndices.add(index);
          } else {
            newHiddenIndices.delete(index);
          }

          if (newSizes[index + 1] < 1) {
            newHiddenIndices.add(index + 1);
          } else {
            newHiddenIndices.delete(index + 1);
          }
        }

        setSizes(newSizes);
        setHiddenIndices(newHiddenIndices);
      };

      const onMouseUp = () => {
        if (isResizing.current) {
          isResizing.current = false;
          document.body.classList.remove(styles.noSelect); // Allow text selection again
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [sizes, direction, hiddenIndices]
  );

  return (
    <div
      className={classNames(styles.splitPane, styles[direction])}
      ref={splitPaneRef}
    >
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          <div
            className={classNames(styles.pad, {
              [styles.hidden]: hiddenIndices.has(index),
            })}
            style={
              direction === "horizontal"
                ? { width: `${sizes[index]}%`, minWidth: minSize }
                : { height: `${sizes[index]}%`, minHeight: minSize }
            }
            ref={(el) => (paneRefs.current[index] = el!)}
          >
            {child}
          </div>
          {index < children.length - 1 && (
            <div
              style={{
                width: direction === "horizontal" ? resizeBarSize : "",
                height: direction === "vertical" ? resizeBarSize : "",
                backgroundColor: resizeBarColor,
              }}
              className={styles.resizerBar}
              onMouseDown={(e) => onMouseDown(index, e)}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Resizer;
