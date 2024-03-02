"use client";

import React, { useState } from "react";
import { analyse } from "../actions";
import dynamic from "next/dynamic";
import { Item, seikiData } from "../definitions";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";

const DinamicMap = dynamic(() => import("./DinamicMap"), { ssr: false });

const Home = () => {
  const [data, setData] = useState<seikiData | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Item | null>(null);

  const handleClick2 = async () => {
    try {
      const fetchedData = await analyse();

      console.log(fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressClick = (address: Item) => {
    setSelectedAddress(address);
  };
  return (
    <div>
      <button onClick={handleClick2}>Button2</button>
      {data !== null && data.items.length > 0 && (
        <>
          {data.items.map((item, index) => (
            <div key={index} onClick={() => handleAddressClick(item)}>
              <p>ID: {item.id}</p>
              <p>Address: {item.address}</p>
            </div>
          ))}
          {selectedAddress && (
            <div key={selectedAddress.id}>
              <DinamicMap
                // key={selectedAddress.id}
                selectedAddress={selectedAddress}
              />
              <ChartBar selectedAddress={selectedAddress} />
              <ChartPie selectedAddress={selectedAddress} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
