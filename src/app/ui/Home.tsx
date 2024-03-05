"use client";

import React, { useEffect, useState } from "react";
import { analyse, analyseFilter } from "../lib/actions";
import dynamic from "next/dynamic";
import { Filters, seikiData } from "../lib/definitions";
import SidePanel from "./SidePanel";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import TabContent from "./TabContent";

const DinamicMap = dynamic(() => import("./DinamicMap"), { ssr: false });

const Home = () => {
  const [data, setData] = useState<seikiData | null>(null);
  const [filtredData, setFiltredData] = useState<seikiData | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("ages");
  const [formData, setFormData] = useState<Filters | null>(null);

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

  const handleSubmit = async (formData: Filters) => {
    setFormData(formData);
    const fetchedData = await analyseFilter(formData);

    console.log("formData", formData);
    console.log("fetchedData", fetchedData);
    setFiltredData(fetchedData);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  console.log("formData?.kpi", formData?.kpi);
  return (
    <div>
      <SidePanel data={data} onSubmit={handleSubmit} />
      {filtredData !== null && (
        <div>
          <Stack direction="row">
            <div>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="Charts tabs"
              >
                <Tab value="ages" label="AGE" />
                <Tab value="gender" label="GENDER" />
                <Tab value="hour" label="HOUR" />
                <Tab value="day" label="DAY" />
                <Tab value="mode" label="MODE" />
                <Tab value="purpose" label="TRIP PURPOSE" />
                <Tab value="week" label="WEEK " />
              </Tabs>
              {selectedTab === "ages" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="age_breakdown"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (ages)"
                  labelPeople="Traffic: People in a day (ages)"
                />
              )}
              {selectedTab === "gender" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="gender_breakdown"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (gender)"
                  labelPeople="Traffic: People in a day (gender)"
                />
              )}
              {selectedTab === "hour" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="hour_breakdown"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (hour)"
                  labelPeople="Traffic: People in a day (hour)"
                />
              )}
              {selectedTab === "day" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="day_type_ratio"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (day type)"
                  labelPeople="Traffic: People in a day (day type)"
                />
              )}
              {selectedTab === "mode" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="mode_breakdown"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (mode)"
                  labelPeople="Traffic: People in a day (mode)"
                />
              )}
              {selectedTab === "purpose" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="trip_purpose_breakdown"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (trip purpose)"
                  labelPeople="Traffic: People in a day (trip purpose)"
                />
              )}
              {selectedTab === "week" && (
                <TabContent
                  filtredData={filtredData}
                  nameOfData="week_ratio"
                  formData={formData}
                  labelCrossing="Traffic: Crossings in a day (week)"
                  labelPeople="Traffic: People in a day (week)"
                />
              )}
            </div>
            <Box
              sx={{ width: "100%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {filtredData && (
                <DinamicMap
                  key={filtredData?.items[0]?.id}
                  selectedAddress={filtredData.items[0]}
                />
              )}
            </Box>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Home;
