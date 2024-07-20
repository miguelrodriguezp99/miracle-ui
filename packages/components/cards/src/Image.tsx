import React from "react";

interface ImageProps {
  route: string;
  alt?: string;
  width: string;
  height: string;
}

export const Image = ({ route, width, height }: ImageProps) => {
  return (
    <img
      style={{
        borderRadius: "10px",
        objectFit: "cover",
      }}
      src={route}
      alt="image"
      width={width}
      height={height}
    />
  );
};

export default Image;
