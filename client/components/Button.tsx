import { ReactNode } from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
  isSelected?: boolean;
};

export default function Button({
  title,
  onClick,
  className = "",
  isSelected,
}: ButtonProps) {
  return (
    <button
      data-selected={isSelected}
      className={`border h-10 rounded-md hover:border-green-400 hover:text-green-400 ${
        isSelected ? "border-green-400 text-green-400" : ""
      } ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
