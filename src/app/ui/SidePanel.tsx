"use client";

import React, { ChangeEvent, FC, useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Stack,
  Paper,
} from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Filters, seikiData } from "../lib/definitions";
import FilterSelect from "./filters/FilterSelect";

interface Props {
  data: seikiData | null;
  onSubmit: (formData: Filters) => Promise<void>;
}

const ageOptions = ["15-24", "25-34", "35-49", "50-64", "65-PLUS"];
const genderOptions = ["FEMALE", "MALE"];
const hours = Array.from({ length: 24 }, (_, index) => index.toString());
const dayTypes = ["SATURDAYS", "SUNDAYS_AND_PUBLIC_HOLIDAYS", "WORKING_DAYS"];
const modeTypes = ["SOFT_MODE", "VEHICLE"];
const tripPurposeTypes = [
  "ACHATS",
  "AUTRES",
  "DOMICILE",
  "EDUCATION",
  "SPORT_CULTURE_LOISIR_RELIGION",
  "TOURISME",
  "TRAVAIL",
];

const weeks = Array.from({ length: 52 }, (_, index) => (index + 1).toString());

const SidePanel: FC<Props> = ({ data, onSubmit }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string[]>(["all"]);
  const [selectedGender, setSelectedGender] = useState<string[]>(["all"]);

  const [selectedHour, setSelectedHour] = useState<string[]>(["all"]);
  const [selectedWeek, setSelectedWeek] = useState<string[]>(["all"]);

  const [selectedDayType, setSelectedDayType] = useState<string[]>(["all"]);

  const [selectedModeType, setSelectedModeType] = useState<string[]>(["all"]);

  const [selectedTripPurpose, setSelectedTripPurpose] = useState<string[]>([
    "all",
  ]);

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    setSelectedLocation(event.target.value as string);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    const formData = {
      id: selectedLocation,
      kpi: selectedOption === "all" ? "" : selectedOption,
      age: selectedAge[0] === "all" ? "" : selectedAge,
      gender: selectedGender[0] === "all" ? "" : selectedGender,
      hour:
        selectedHour[0] === "all" ? "" : selectedHour.map((el) => parseInt(el)),
      week:
        selectedWeek[0] === "all" ? "" : selectedWeek.map((el) => parseInt(el)),
      dayType: selectedDayType[0] === "all" ? "" : selectedDayType,
      mode: selectedModeType[0] === "all" ? "" : selectedModeType,
      purpose: selectedTripPurpose[0] === "all" ? "" : selectedTripPurpose,
    };
    onSubmit(formData);
  };
  return (
    <Paper
      sx={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#bbb3b3",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        float: "left",
      }}
    >
      <Select
        fullWidth
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        {data &&
          data.items.map((el, index) => (
            <MenuItem key={el.address} value={el.id}>
              {index === 0 ? "Default address" : el.address}
            </MenuItem>
          ))}
      </Select>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        <FormControlLabel
          value="traffic.crossings_in_a_day"
          control={<Radio />}
          label="Crossings in a Day"
        />
        <FormControlLabel
          value="traffic.people_in_a_day"
          control={<Radio />}
          label="People in a Day"
        />
        <FormControlLabel value="all" control={<Radio />} label="All" />
      </RadioGroup>
      <Stack spacing={1}>
        <FilterSelect
          options={ageOptions}
          selected={selectedAge}
          setter={setSelectedAge}
          label="Age"
        />
        <FilterSelect
          options={genderOptions}
          selected={selectedGender}
          setter={setSelectedGender}
          label="Gender"
        />
        <FilterSelect
          options={hours}
          selected={selectedHour}
          setter={setSelectedHour}
          label="Hour"
        />
        <FilterSelect
          options={dayTypes}
          selected={selectedDayType}
          setter={setSelectedDayType}
          label="Day"
        />
        <FilterSelect
          options={modeTypes}
          selected={selectedModeType}
          setter={setSelectedModeType}
          label="Mode"
        />
        <FilterSelect
          options={tripPurposeTypes}
          selected={selectedTripPurpose}
          setter={setSelectedTripPurpose}
          label="Trip Purpose"
        />
        <FilterSelect
          options={weeks}
          selected={selectedWeek}
          setter={setSelectedWeek}
          label="Week"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Paper>
  );
};

export default SidePanel;
