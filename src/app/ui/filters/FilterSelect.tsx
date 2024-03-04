import { MenuItem, Select, Typography } from "@mui/material";
import React, { FC, SetStateAction } from "react";

import { SelectChangeEvent } from "@mui/material";

interface Props {
  options: string[];
  selected: string[];
  setter: (value: SetStateAction<string[]>) => void;
  label: string;
}

const FilterSelect: FC<Props> = ({ options, selected, setter, label }) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const selectedOptions = value as string[];

    if (selectedOptions[selectedOptions.length - 1] === "all") {
      setter(["all"]);
    } else {
      if (selected.includes("all")) {
        const filteredOptions = selectedOptions.filter(
          (option) => option !== "all"
        );
        setter(filteredOptions);
      } else {
        setter(selectedOptions);
      }
    }
  };

  return (
    <>
      <Typography variant="caption">{label}</Typography>
      <Select multiple value={selected} onChange={handleChange}>
        <MenuItem key="all" value={"all"}>
          All
        </MenuItem>
        {options.map((elem) => (
          <MenuItem key={elem} value={elem}>
            {elem}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default FilterSelect;
