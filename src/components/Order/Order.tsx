"use client";
import Card from "@/app/helpers/Card";
import Image from "next/image";

const Order = () => {
  return (
    <>
      <Card>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src="https://unsplash.com/photos/mEZ3PoFGs_k/download?force=true"
              alt="Neil image"
              width={32} // Corresponds to w-8 (8 * 4 = 32px)
              height={32} // Corresponds to h-8 (8 * 4 = 32px)
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              $12
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              2000 USDT
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            100.00%
          </div>
        </div>
      </Card>
    </>
  );
};

export default Order;
