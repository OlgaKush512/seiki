"use client";
import React, { ChangeEvent, FC, useState } from "react";
import styles from "./Sidebar.module.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { seikiData } from "../definitions";

interface Props {
  data: seikiData | null;
  onSubmit: (formData: {}) => void;
}

const ageOptions = ["15-24", "25-34", "35-49", "50-64", "65-PLUS"];
const genderOptions = ["FEMALE", "MALE"];
const hours = Array.from({ length: 24 }, (_, index) => index);
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

const weeks = Array.from({ length: 52 }, (_, index) => index + 1);

const SidePanel: FC<Props> = ({ data, onSubmit }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedOption, setSelectedOption] =
    useState<string>("crossings_in_a_day");
  const [selectedAge, setSelectedAge] = useState<string>(ageOptions[0]);
  const [selectedGender, setSelectedGender] = useState<string>(
    genderOptions[0]
  );

  const [selectedHour, setSelectedHour] = useState<string>(hours[0].toString());
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0].toString());

  const [selectedDayType, setSelectedDayType] = useState<string>(dayTypes[0]);

  const [selectedModeType, setSelectedModeType] = useState<string>(
    modeTypes[0]
  );

  const [selectedTripPurpose, setSelectedTripPurpose] = useState<string>(
    tripPurposeTypes[0]
  );

  const handleLocationChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedLocation(event.target.value as string);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption((event.target as HTMLInputElement).value);
  };

  const handleAgeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedAge(event.target.value as string);
  };

  const handleGenderChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedGender(event.target.value as string);
  };

  const handleHourChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedHour(event.target.value as string);
  };

  const handleDayTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedDayType(event.target.value as string);
  };
  const handleModeTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedModeType(event.target.value as string);
  };

  const handleTripPurposeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedTripPurpose(event.target.value as string);
  };

  const handleWeekChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedWeek(event.target.value as string);
  };

  const handleSubmit = () => {
    const formData = {
      id: selectedLocation,
      //   selectedOption,
      //   selectedAge,
      //   selectedGender,
      //   selectedHour,
      //   selectedWeek,
      //   selectedDayType,
      //   selectedModeType,
      //   selectedTripPurpose
    };
    onSubmit(formData);
  };
  return (
    <div className={styles.sidebar}>
      <Select
        className={styles.locationSelect}
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        {data &&
          data.items.map((el) => (
            <MenuItem key={el.address} value={el.id}>
              {el.address}
            </MenuItem>
          ))}
      </Select>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        <FormControlLabel
          value="crossings_in_a_day"
          control={<Radio />}
          label="Crossings in a Day"
        />
        <FormControlLabel
          value="people_in_a_day"
          control={<Radio />}
          label="People in a Day"
        />
      </RadioGroup>

      <Select
        className={styles.locationSelect}
        labelId="age-select-label"
        id="age-select"
        value={selectedAge}
        onChange={handleAgeChange}
      >
        {ageOptions.map((age) => (
          <MenuItem key={age} value={age}>
            {age}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="gender-select-label"
        id="gender-select"
        value={selectedGender}
        onChange={handleGenderChange}
      >
        {genderOptions.map((gender, index) => (
          <MenuItem key={index} value={gender}>
            {gender}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="hour-select-label"
        id="hour-select"
        value={selectedHour}
        onChange={handleHourChange}
      >
        {hours.map((hour) => (
          <MenuItem key={hour} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="day-type-select-label"
        id="day-type-select"
        value={selectedDayType}
        onChange={handleDayTypeChange}
      >
        {dayTypes.map((dayType, index) => (
          <MenuItem key={index} value={dayType}>
            {dayType}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="mode-type-select-label"
        id="mode-type-select"
        value={selectedModeType}
        onChange={handleModeTypeChange}
      >
        {modeTypes.map((modeType, index) => (
          <MenuItem key={index} value={modeType}>
            {modeType}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="trip-purpose-select-label"
        id="trip-purpose-select"
        value={selectedTripPurpose}
        onChange={handleTripPurposeChange}
      >
        {tripPurposeTypes.map((tripPurpose, index) => (
          <MenuItem key={index} value={tripPurpose}>
            {tripPurpose}
          </MenuItem>
        ))}
      </Select>
      <Select
        className={styles.locationSelect}
        labelId="week-select-label"
        id="week-select"
        value={selectedWeek}
        onChange={handleWeekChange}
      >
        {weeks.map((week, index) => (
          <MenuItem key={index} value={week}>
            {week}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default SidePanel;
