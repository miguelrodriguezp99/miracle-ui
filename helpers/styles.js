import classNames from "classnames";

const getModuleClasses = (cssModule, classKey) => {
  return (cssModule && cssModule[classKey]) || classKey;
};

const getObjectClasses = (cssModule, object) => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey];

    return className ? { ...classes, [className]: object[classKey] } : classes;
  }, {});
};

const getDynamicClasses = (cssModule, props, classes) => {
  return classes.reduce((classesObject, classKey) => {
    const propValue = props[classKey];
    const className = cssModule[`${classKey}-${propValue}`];

    return className && propValue
      ? { ...classesObject, [className]: propValue }
      : classesObject;
  }, {});
};

export const getClasses =
  (cssModule) =>
  (props) =>
  (...args) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props, arg);
        } else if (typeof arg === "string") {
          return getModuleClasses(cssModule, arg);
        } else if (typeof arg === "object") {
          return getObjectClasses(cssModule, arg);
        }
      })
    );
  };
