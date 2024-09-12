"use client";
import Card from "@/app/helpers/Card";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-hero text-center text-xl mb-4">Order Details</h1>
      <div className="flex justify-center item-center">
        <Card>
          <div>
            <div className="flex item-center justify-between">
              <p>Price:</p>
              <p className="font-mono">$0.00</p>
            </div>
            <div className="flex item-center justify-between">
              <p>Quantity:</p>
              <p className=" font-mono">00</p>
            </div>
            <div className="flex item-center justify-between">
              <p>Duration:</p>
              <p className="font-mono">00.00.00</p>
            </div>
          </div>

          <div className="flex align-center justify-center mb-6">
            <p className="font-2xl mt-4 text-center border-2 rounded-full border-hero px-4 py-2">
              Buy
            </p>
          </div>

          <Card>
            <h1 className="text-lg mb-4 text-hero">Transactions Detail</h1>
            <div className="flex gap-2 justify-between items-center">
              <p>Seller Username:</p>
              <p>BlarkSheep</p>
            </div>
            <div className="flex gap-2 justify-between items-center">
              <p>Ratings:</p>
              <p>☆☆☆☆☆</p>
            </div>
            <div className="flex gap-2 justify-between items-center">
              <p>Completed Orders:</p>
              <p>678</p>
            </div>
          </Card>
        </Card>
      </div>
    </>
  );
};

export default page;
