"use client";
import Card from "@/app/helpers/Card";
import Image from "next/image";

export interface Order {
  className?: string;
  onClick?: () => void;
}

const Order = ({ ...props }: Order) => {
  const handleClick = () => {
    props.onClick?.();
  };

  return (
    <>
      <Card className={`mb-4 ${props.className}`} onClick={handleClick}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
              alt="Neil image"
              //   width={32} // Corresponds to w-8 (8 * 4 = 32px)
              //   height={32} // Corresponds to h-8 (8 * 4 = 32px)
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Holamite Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              $32
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1380 USDT
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            86.70%
          </div>
        </div>
      </Card>
    </>
  );
};

export default Order;
