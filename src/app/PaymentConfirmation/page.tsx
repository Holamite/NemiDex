"use client";
import React from "react";
import Card from "../helpers/Card";
import Button1 from "../helpers/Button1";

const UserPayment = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Card className="mx-auto w-1/2 bg-gray-200 p-6">
        <h1 className="text-2xl text-center mb-4">
          Please Ensure to send the exact amount indicted
        </h1>
        <div>
          <h1 className="mb-2 font-bold">Seller payment Details</h1>
          <div className="flex gap-4 items-center justify-between">
            <p>Payment Method:</p>
            <p>Bank transfer</p>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p>Bank Name:</p>
            <p>Paypal</p>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p>Account No.:</p>
            <p>002908765430977</p>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p>Tel:</p>
            <p>0913493095990</p>
          </div>
        </div>

        <Button1 className="w-full mt-6">Paid!</Button1>

        <p className="italic mt-2 text-center">
          Only click after ensuring the Transactions was successfully executed!{" "}
        </p>
      </Card>
    </div>
  );
};

export default UserPayment;
