"use client";
import Order from "@/components/Order/Order";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Card from "./helpers/Card";
import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");

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

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const search = useSearchParams();

  const PadNav = [
    {
      name: "Buy ",
      url: "",
      param: "Buy",
    },
    {
      name: "Sell",
      url: "",
      param: "Buy",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center mt-16">
        <Card className="mx-auto">
          <div className="flex justify-between ">
            <div className="mb-4 flex flex-col gap-2 items-center">
              <div className="bg-button-1 rounded-2xl p-1 flex gap-4">
                {PadNav.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className={`border-b-2 w-full text-center text-lg outline-none border-0 hover:bg-hero hover:text-white ${
                      search.get(item.param) == "true" && "text-white bg-hero"
                    }`}
                    style={{ borderColor: "#FFAC1C" }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <p>Amount: 10000</p>
            </div>

            <div className="mb-4 flex flex-col gap-2 items-center">
              <p>
                <span className="text-[#FFAC1C]">+</span> Create Order
              </p>

              <div className="w-full max-w-xs">
                <select
                  id="country"
                  name="country"
                  value={selectedCountry}
                  onChange={handleChange}
                  className="block w-full p-2 border bg-black border-gray-800 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
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

          <div>
            <Order />
          </div>
        </Card>
      </div>
    </>
  );
}
