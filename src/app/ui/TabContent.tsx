"use client";

import { Stack } from "@mui/material";
import React, { FC } from "react";
import GraphBar from "./GraphBar";
import GraphPie from "./GraphPie";
import { Filters, seikiData } from "../lib/definitions";

interface Props {
  filtredData: seikiData | null;
  nameOfData: string;
  formData: null | Filters;
  labelCrossing: string;
  labelPeople: string;
}

const TabContent: FC<Props> = ({
  filtredData,
  nameOfData,
  formData,
  labelCrossing,
  labelPeople,
}) => {
  const namesCrossings =
    filtredData?.items[0].data.traffic.crossings_in_a_day?.[nameOfData] &&
    Object.keys(
      filtredData?.items[0].data.traffic.crossings_in_a_day?.[nameOfData]
    );
  const valuesCrossing =
    filtredData?.items[0].data.traffic.crossings_in_a_day?.[nameOfData] &&
    Object.values(
      filtredData.items[0].data.traffic.crossings_in_a_day?.[nameOfData]
    );

  const namesPeople =
    filtredData?.items[0].data.traffic.people_in_a_day?.[nameOfData] &&
    Object.keys(
      filtredData.items[0].data.traffic.people_in_a_day?.[nameOfData]
    );
  const valuesPeople =
    filtredData?.items[0].data.traffic.people_in_a_day?.[nameOfData] &&
    Object.values(
      filtredData.items[0].data.traffic.people_in_a_day?.[nameOfData]
    );

  return (
    <Stack direction="row">
      {formData?.kpi !== "traffic.people_in_a_day" && (
        <div>
          <GraphBar
            names={namesCrossings}
            values={valuesCrossing}
            key={labelCrossing}
            label={labelCrossing}
          />
          <GraphPie
            names={namesCrossings}
            values={valuesCrossing}
            key={labelCrossing}
            label={labelCrossing}
          />
        </div>
      )}
      {formData?.kpi !== "traffic.crossings_in_a_day" && (
        <div>
          <GraphBar
            names={namesPeople}
            values={valuesPeople}
            key={labelPeople}
            label={labelPeople}
          />
          <GraphPie
            names={namesPeople}
            values={valuesPeople}
            key={labelPeople}
            label={labelPeople}
          />
        </div>
      )}
    </Stack>
  );
};

export default TabContent;
