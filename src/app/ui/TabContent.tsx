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
    <Stack direction="row" spacing={5}>
      {formData?.kpi !== "traffic.people_in_a_day" && (
        <Stack spacing={2}>
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
        </Stack>
      )}
      {formData?.kpi !== "traffic.crossings_in_a_day" && (
        <Stack spacing={2}>
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
        </Stack>
      )}
    </Stack>
  );
};

export default TabContent;
