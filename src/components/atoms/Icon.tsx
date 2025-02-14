import React, { JSX } from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const icons: Record<IconProps["name"], JSX.Element> = {
    email: (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
          ></rect>
        </g>
      </svg>
    ),
    shop: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M15 14V17.6C15 18.4401 15 18.8601 14.8365 19.181C14.6927 19.4632 14.4632 19.6927 14.181 19.8365C13.8601 20 13.4401 20 12.6 20H7.40001C6.55994 20 6.1399 20 5.81903 19.8365C5.53679 19.6927 5.30731 19.4632 5.1635 19.181C5.00001 18.8601 5.00001 18.4401 5.00001 17.6V10M19 10V20M5.00001 16H15M5.55778 4.88446L3.5789 8.84223C3.38722 9.22559 3.29138 9.41727 3.3144 9.57308C3.3345 9.70914 3.40976 9.8309 3.52246 9.90973C3.65153 10 3.86583 10 4.29444 10H19.7056C20.1342 10 20.3485 10 20.4776 9.90973C20.5903 9.8309 20.6655 9.70914 20.6856 9.57308C20.7086 9.41727 20.6128 9.22559 20.4211 8.84223L18.4422 4.88446C18.2817 4.5634 18.2014 4.40287 18.0817 4.28558C17.9758 4.18187 17.8482 4.10299 17.7081 4.05465C17.5496 4 17.3701 4 17.0112 4H6.98887C6.62991 4 6.45043 4 6.29198 4.05465C6.15185 4.10299 6.02422 4.18187 5.91833 4.28558C5.79858 4.40287 5.71832 4.5634 5.55778 4.88446Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
    heart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
    cart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
    user: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
    logo: (
      <svg
        fill={color}
        viewBox="0 0 32 32"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9.896 13.401c-0.245-0.213-0.615-0.308-1.125-0.308h-0.771l0.027 3.256 0.052 3.265 0.749-0.027c0.547 0 0.839-0.093 1.104-0.348 0.323-0.319 0.349-0.48 0.349-2.933 0-2.547-0.027-2.613-0.385-2.905zM0 6.588v18.824h32v-18.824zM11.412 20.401c-0.584 0.771-1.412 1.025-3.371 1.025h-1.76v-10.052h1.864c2.229 0 2.881 0.24 3.469 1.199 0.359 0.572 0.385 0.801 0.427 3.427 0.063 2.973-0.025 3.64-0.629 4.401zM18.197 13.104h-3.291v2.365h2.025v1.703l-0.959 0.057-1 0.036v2.36l1.625 0.041 1.599 0.052v1.708h-2.129c-2.041 0-2.136-0.015-2.495-0.4l-0.401-0.376v-4.213c0-4.025 0.016-4.24 0.333-4.635 0.307-0.417 0.333-0.417 2.511-0.417h2.181v1.735zM24.437 20.375c-0.224 0.573-0.849 1.052-1.333 1.052-0.24 0-0.599-0.197-0.891-0.52-0.427-0.428-0.599-0.839-1.093-2.771l-1.199-4.521-0.604-2.229h1.016c0.531 0 1 0.027 1 0.068 0 0.077 1.547 6.052 1.683 6.443 0.052 0.197 0.421-0.937 0.968-3.068l0.88-3.359 0.991-0.057c0.531-0.027 0.973 0 0.973 0.057 0 0.181-2.229 8.504-2.401 8.905z"></path>{" "}
        </g>
      </svg>
    ),
    trashCan: (
      <svg
        fill={color}
        viewBox="0 0 32 32"
        version="1.1"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>trash-can</title>
          <path d="M30 7.249h-5.598l-3.777-5.665c-0.137-0.202-0.366-0.334-0.625-0.334h-8c-0 0-0.001 0-0.001 0-0.259 0-0.487 0.131-0.621 0.331l-0.002 0.003-3.777 5.665h-5.599c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h3.315l1.938 21.319c0.036 0.384 0.356 0.682 0.747 0.682 0 0 0 0 0.001 0h16c0 0 0.001 0 0.001 0 0.39 0 0.71-0.298 0.745-0.679l0-0.003 1.938-21.319h3.316c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM12.401 2.75h7.196l2.999 4.499h-13.195zM23.314 29.25h-14.63l-1.863-20.5 18.358-0.001zM11 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0zM16 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0zM21 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0z"></path>{" "}
        </g>
      </svg>
    ),
  };
  return icons[name] || null;
};

export default Icon;
