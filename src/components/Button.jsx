import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
export const buttonStyles = cva(
  ["hover:bg-secondary-hover", "transition-colors"],
  {
    variants: {
      default: ["bg-secondary"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  }
);

function Button({ variants, size, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variants, size }), className)}
    />
  );
}

export default Button;
