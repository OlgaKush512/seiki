"use client";

import React, { useEffect, useState } from "react";
import { analyse, analyseFilter } from "../lib/actions";
import dynamic from "next/dynamic";
import { Item, seikiData } from "../lib/definitions";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";
import SidePanel from "./SidePanel";

const DinamicMap = dynamic(() => import("./DinamicMap"), { ssr: false });

const Home = () => {
  const [data, setData] = useState<seikiData | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Item | null>(null);
  const [filtredData, setFiltredData] = useState<seikiData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await analyse();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleAddressClick = (address: Item) => {
    setSelectedAddress(address);
  };

  const handleSubmit = async (formData) => {
    const fetchedData = await analyseFilter(formData);

    console.log("formData", formData);
    console.log("fetchedData", fetchedData);
    setFiltredData(fetchedData);
  };
  return (
    <div>
      <SidePanel data={data} onSubmit={handleSubmit} />
      {/* <button onClick={handleClick2}>Button2</button> */}
      {/* {data !== null && data.items.length > 0 && (
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
      )} */}
    </div>
  );
};

export default Home;
