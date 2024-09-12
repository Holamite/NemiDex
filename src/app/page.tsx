"use client";
import Sell from "@/components/Order/Sell";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "./helpers/Card";
import { useState } from "react";
import Buy from "@/components/Order/Buy";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("buy");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const route = useRouter();

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "Japan",
    "China",
    // Add more countries as needed
  ];

  const AmountRange = [
    "0 - N10,000",
    "N10,000 - N50,000",
    "N50,000 - N100,000",
    "N100,000 - N500,000",
    "N500,000 - N1,000,000",
    "N1,000,000 - N5,000,000",
    "N5,000,000 - N10,000,000",
    "N10,000,000+",
    // Add more AmountRange as needed
  ];

  const handleChange = (e: any) => {
    setSelectedCountry(e.target.value);
    setSelectedAmount(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-16">
        <Card className="mx-auto">
          <div className="flex justify-between ">
            <div className="mb-4 flex flex-col gap-2 items-center">
              <div className="mb-4 -ml-12 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "buy"
                          ? "border-hero"
                          : "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                      }`}
                      onClick={() => handleTabClick("buy")}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "buy"}
                    >
                      Buy
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "sell"
                          ? "border-hero"
                          : "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                      }`}
                      onClick={() => handleTabClick("sell")}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "sell"}
                    >
                      Sell
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-full max-w-xs">
                <select
                  id="Amount"
                  name="Amount"
                  value={selectedAmount}
                  onChange={handleChange}
                  className="block w-full p-2 border bg-white border-gray-800 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                >
                  <option className="bg-[#0000]" value="" disabled>
                    Amount
                  </option>
                  {AmountRange.map((Amount) => (
                    <option key={Amount} value={Amount}>
                      {Amount}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-2 items-center justify-end">
              <p>
                <span className="text-hero">+</span> Create Order
              </p>

              <div className="w-full max-w-xs mt-4">
                <select
                  id="country"
                  name="country"
                  value={selectedCountry}
                  onChange={handleChange}
                  className="block w-full p-2 border bg-white border-gray-800 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                >
                  <option className="bg-[#0000]" value="" disabled>
                    Choose a country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div id="default-tab-content">
            {activeTab === "buy" && (
              <div id="dashboard" role="tabpanel">
                {Array.from({ length: 5 }).map((_: any, index) => (
                  <Buy
                    key={index}
                    className="cursor-pointer mb-4"
                    onClick={() => route.push(`../order/${index}/buyDetails`)}
                  />
                ))}
              </div>
            )}

            {activeTab === "sell" && (
              <div id="dashboard" role="tabpanel">
                {Array.from({ length: 5 }).map((_: any, index) => (
                  <Sell
                    key={index}
                    className="cursor-pointer mb-4"
                    onClick={() => route.push(`../order/${index}/sellDetails`)}
                  />
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
