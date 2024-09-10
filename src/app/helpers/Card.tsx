import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Card = ({ children, ...props }: CardProps) => {
  const handleClick = () => {
    props.onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
