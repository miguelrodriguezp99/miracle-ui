import React from "react";

interface UserIconProps {
  size?: string;
}

export const UserIcon = ({ size = "24" }: UserIconProps) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path
          data-name="Stroke 1"
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
        ></path>
        <path
          data-name="Stroke 3"
          d="M11.837 11.174a4.372 4.372 0 10-.031 0z"
        ></path>
      </g>
    </svg>
  );
};
